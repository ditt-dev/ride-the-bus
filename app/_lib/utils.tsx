//TODO: 'with these multipliers, the optimal betting strategy would have been...', 'this round has been accessed x times', 'why math'

import Card from '@/app/_lib/classes';

// GLOBAL VARIABLES

const drawnCards: Card[] = [];
let deck = Card.deckTemplate;

const bet = 100;
let currentTotal = -bet;

const mult = [2, 3, 4, 20];

//--------

/**
 * Substitute a dummy error card instead of undefined in functions that access the drawnCards array.
 * @param i - The desired index of drawnCards array
 * @returns The indexed card or the error card
 */

const getDrawnCards = (i: number): Card => drawnCards.at(i) ?? new Card(134);

/**
 * Calculate the total bet return based on the current round's multiplier.
 * @param n - The value of the bet
 * @returns - The bet as a string formatted to two decimal places
 */
const calcReturn = (n: number): string => {
	const currentMult = mult.slice(0, n + 1).reduce((a, b) => a * b);
	const totalMult = mult.reduce((a, b) => a * b);

	return ((100 * (bet * currentMult)) / (bet * totalMult)).toFixed(2);
};

/**
 * Format dollar values into USD with en-US punctuation.
 * @param n - Dollar value to be formatted
 * @returns - Formatted string
 */
const format = (n: number): string =>
	new Intl.NumberFormat('en-US', {
		currency: 'USD',
		maximumFractionDigits: 0,
		style: 'currency',
	}).format(n);

/**
 * Select a Card from a randomly generated number. For rounds 2 and 3, if the Card.value is the same as a previously drawn Card, select another.
 * @returns - The selected Card
 */
const drawCard = (): Card => {
	const draw = (): Card => new Card(Math.floor(Math.random() * deck.length));
	let card;

	do {
		const testCard = draw();

		// Draw any card value for the fourth round
		if (drawnCards.length === 3) {
			card = testCard;

			break;
		}

		// Redraw if the value is the same as a previous round
		else if (
			testCard.value !== drawnCards.at(-1)?.value &&
			testCard.value !== drawnCards.at(-2)?.value
		) {
			card = testCard;

			break;
		}
	} while (true);

	drawnCards.push(card);
	deck = deck.toSpliced(deck.indexOf(card.n), 1);

	return card;
};

/**
 * Run the first round of the game.
 * @param n - Number: 0 for 'red', 1 for 'black'
 * @returns - True if n is correct, otherwise false
 */
const round1 = (n: 0 | 1): boolean => {
	const card = drawCard();

	calcPercentColor();

	console.log(card.name);
	console.log('___');
	return n === card.color;
};

/**
 * Run the second round of the game.
 * @param n - Number: 0 for 'lower', 1 for 'higher
 * @returns - True if n is correct, otherwise false
 */
const round2 = (n: 0 | 1): boolean => {
	const card = drawCard();

	currentTotal += bet * (mult.at(0) ?? -1);

	calcPercentLH(getDrawnCards(0));

	console.log(card.name);
	console.log('___');
	return n === 0
		? (drawnCards.at(0)?.value ?? -1) > card.value
		: card.value > (drawnCards.at(0)?.value ?? -1);
};

/**
 * Run the third round of the game.
 * @param n - Number: 0 for 'inside', 1 for 'outside'
 * @returns - True if n is correct, otherwise false
 */
const round3 = (n: 0 | 1): boolean => {
	const card = drawCard();
	const a = drawnCards.at(0)?.value ?? -1;
	const b = drawnCards.at(1)?.value ?? -1;

	currentTotal *= mult.at(1) ?? -1;

	calcPercentIO(getDrawnCards(0), getDrawnCards(1));

	console.log(card.name);
	console.log('___');
	return n === 0
		? card.value > Math.min(a, b) && card.value < Math.max(a, b)
		: card.value < Math.min(a, b) || card.value > Math.max(a, b);
};

/**
 * Run the fourth round of the game.
 * @param n - Number: 0 for 'diamonds', 1 for 'clubs', 2 for 'hearts', 3 for 'spades'
 * @returns - True if n is correct, otherwise false
 */
const round4 = (n: 0 | 1 | 2 | 3): boolean => {
	const card = drawCard();

	currentTotal *= mult.at(2) ?? -1;

	calcPercentSuit(getDrawnCards(0), getDrawnCards(1), getDrawnCards(2));

	console.log(card.name);
	console.log('___');
	return n === card.suit;
};

/**
 * Calculate the percentages for the first round.
 * @returns - Array of percentages, ordered 'red', 'black'
 */
const calcPercentColor = (): number[] => {
	console.log(`Red: 50%, black: 50%`);
	console.log(
		`100% of players reach Round 1. The independent chance of winning this round is 50.00% [TODO: (Why?)]. Since coming online, this stage has been reached [TODO: X] times. You have earned ${format(
			currentTotal
		)}, 0.00% of the maximum return on your bet.`
	);

	return [50, 50];
};

/**
 * Calculate the percentages for the second round.
 * @param n - The first round's Card
 * @returns - Array of percentages, ordered 'lower', 'higher'
 */
const calcPercentLH = (n: Card): number[] => {
	const lower = Math.round(n.value * (4 / 48) * 100);
	const higher = 100 - lower;

	console.log(`Lower: ${lower}%, higher: ${higher}%`);
	console.log(
		`50.00% of players reach Round 2. The independent chance of winning this round is 76.92% [TODO: (Why?)]. You have earned ${format(
			currentTotal
		)}, ${calcReturn(0)}% of the maximum return on your bet.`
	);

	return [lower, higher];
};

/**
 * Calculate the percentages for the third round.
 * @param m - The first round's Card
 * @param n - The second round's Card
 * @returns - Array of percentages, ordered 'inside', 'outside'
 */
const calcPercentIO = (m: Card, n: Card): number[] => {
	const inside = Math.round(
		(Math.max(m.value, n.value) - Math.min(m.value, n.value) - 1) *
			(4 / 44) *
			100
	);
	const outside = 100 - inside;

	console.log(`Inside: ${inside}%, outside: ${outside}%`);
	console.log(
		`38.96% of players reach Round 3. The independent chance of winning this round is 74.50% [TODO: (Why?)]. You have earned ${format(
			currentTotal
		)}, ${calcReturn(1)}% of the maximum return on your bet.`
	);

	return [inside, outside];
};

/**
 * Calculate the percentages for the fourth round. The chances have been massaged for visual interest. They all remain within +/-1.5% of the actual values (below).
 * 3, 0, 0, 0: 20.41%, 26.53%, 26.53%, 26.53%
 * 2, 1, 0, 0: 22.45%, 24.49%, 26.53%, 26.53%
 * 1, 1, 1, 0: 24.49%, 24.49%, 24.49%, 26.53%
 *
 * @param m - The first round's Card
 * @param n - The second round's Card
 * @param o - The third round's Card
 * @returns - Array of percentages, ordered 'diamond', 'club', 'heart', 'spade'
 */
const calcPercentSuit = (m: Card, n: Card, o: Card): number[] => {
	const count = [m.suit, n.suit, o.suit].reduce(
		(a: Record<number, number>, v) => {
			a[v]++;
			return a;
		},
		{ 0: 0, 1: 0, 2: 0, 3: 0 }
	);

	const [d, c, h, s] = Object.values(count).map((v, _i, arr) => {
		let percentages: Record<number, number>;

		if (arr.includes(2)) {
			percentages = { 0: 28, 1: 23, 2: 21 };
		} else if (arr.includes(3)) {
			percentages = { 0: 27, 3: 19 };
		} else {
			percentages = { 0: 28, 1: 24 };
		}

		v = percentages[v];

		return v;
	});

	console.log(`Diamond: ${d}%, club: ${c}%, heart: ${h}%, spade: ${s}%`);
	console.log(
		`29.03% of players reach Round 4. The independent chance of winning this round is 26.53% [TODO: (Why?)]. You have earned ${format(
			currentTotal
		)}, ${calcReturn(2)}% of the maximum return on your bet.`
	);

	return [d, c, h, s];
};

/**
 * Log to console the win message and final bet return.
 */
const winMessage = (): void => {
	currentTotal *= mult.at(3) ?? -1;

	console.log(
		`Congratulations! The overall chance of winning all four rounds is 7.60%! You have earned ${format(
			currentTotal
		)}, 100.00% of the maximum return on your bet.`
	);
};

export { round1, round2, round3, round4, winMessage };

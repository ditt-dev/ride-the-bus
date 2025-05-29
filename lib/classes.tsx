export default class Card {
	n: number;

	constructor(n: number) {
		// Format undefined errors to show 'ERROR' as the suit and value
		this.n = Card.deckTemplate.at(n) ?? 134;
	}

	// Return 0 or 1 (red or black)
	get color() {
		return this.n % 2;
	}

	// Return human-readable card value and suit
	get name() {
		return `${Card.values.at(this.value)} of ${Card.suits.at(this.suit)}`;
	}

	// Return 0, 1, 2, or 3 (diamond, club, heart, or spade)
	get suit() {
		return this.n % 10;
	}

	// Return 0 - 12 (corresponding to values two through ace)
	get value() {
		return Math.floor(this.n / 10);
	}

	static deckTemplate = [
		0, 1, 2, 3, 10, 11, 12, 13, 20, 21, 22, 23, 30, 31, 32, 33, 40, 41, 42, 43,
		50, 51, 52, 53, 60, 61, 62, 63, 70, 71, 72, 73, 80, 81, 82, 83, 90, 91, 92,
		93, 100, 101, 102, 103, 110, 111, 112, 113, 120, 121, 122, 123,
	];

	static suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades', 'ERROR'];

	static values = [
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
		'Jack',
		'Queen',
		'King',
		'Ace',
		'ERROR',
	];
}

import { CardBox } from '@/components/index';
import { Divider, Grid, Stack } from '@mui/material';
import { useState } from 'react';

// import Image from 'next/image';

// import card0 from '@/public/faces/0.svg';
// import card10 from '@/public/faces/10.svg';
// import card20 from '@/public/faces/20.svg';
// import card30 from '@/public/faces/30.svg';
// import cardBack from '@/public/backs/red2.svg';

// import { useTheme } from '@mui/material/styles';

export default function CardsContainer() {
	// const history = [cardBack, card0, card10, card20, card30];

	const [round, setRound] = useState(1);

	// const theme = useTheme();

	switch (round) {
		case 3:
			return (
				<Stack
					direction={'row'}
					divider={<Divider orientation={'vertical'} />}
					spacing={2}
					sx={{ height: '100%' }}
				>
					{/* Display history from rounds 1 and 2 */}
					<Stack divider={<Divider variant={'middle'} />} sx={{ flex: 1 }}>
						{[1, 2].map(historyIdx => {
							return (
								<CardBox
									key={historyIdx}
									name={'test'}
									src={history.at(historyIdx)}
								/>
							);
						})}
					</Stack>

					{/* Display history from rounds 3 and 4 */}
					<Stack
						direction={'row'}
						divider={<Divider orientation={'vertical'} />}
						sx={{ flex: 3 }}
					>
						{[3, 4].map(historyIdx => {
							return (
								<CardBox
									key={historyIdx}
									name={'test'}
									src={history.at(historyIdx)}
								/>
							);
						})}
					</Stack>
				</Stack>
			);
		default:
			return (
				<Grid container spacing={1} sx={{ height: '100%' }}>
					<Grid size={{ xs: 6, sm: 3 }} sx={{ outline: 'solid green' }}>
						<CardBox name={'\u00A0'} src={cardBack} />
					</Grid>
					<Grid size={{ xs: 6, sm: 3 }}>
						<CardBox name={'Jack of Spades'} src={cardBack} />
					</Grid>
					<Grid size={{ xs: 6, sm: 3 }}>
						<CardBox name={'Jack of Spades'} src={cardBack} />
					</Grid>
					<Grid size={{ xs: 6, sm: 3 }}>
						<CardBox name={'Jack of Spades'} src={cardBack} />
					</Grid>
				</Grid>
			);
	}
}

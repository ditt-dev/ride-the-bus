import { CardBox } from '@/components/index';
import { Box, Divider, Stack } from '@mui/material';
import { useState } from 'react';

import Image from 'next/image';

import card0 from '@/public/faces/0.svg';
import card10 from '@/public/faces/10.svg';
import card20 from '@/public/faces/20.svg';
import card30 from '@/public/faces/30.svg';
import cardBack from '@/public/backs/red2.svg';

export default function CardsContainer() {
	const history = [cardBack, card0, card10, card20, card30];
	// const history = [];

	const [round, setRound] = useState(1);

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
				<Box
					sx={{
						height: '100%',
						// width: '100%',
						// position: 'absolute',
						outline: 'solid green 5px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							transform: 'rotate(10deg)',
							outline: 'solid orange',
							height: '100%',
						}}
					>
						{[-2, -1, 0, 1].map(i => {
							return (
								<Box
									key={i}
									sx={{
										background: 'white',
										height: '200px',
										width: '150px',
										borderRadius: '5px',
										position: 'absolute',
										boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
										left: '50%',
										// top: ' 50%',
										transform: `rotate(${15 * i}deg) 
									// translate(-50%, -50%)
									`,
										transformOrigin: 'center 200%',
									}}
								/>
							);
						})}
					</Box>
				</Box>
			);
	}
}

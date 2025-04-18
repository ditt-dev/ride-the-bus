'use client';

import Card from '@/lib/classes';
import { round1, round2, round3, round4, winMessage } from '@/lib/utils';

import Image from 'next/image';
import { Button, Box, Container, Grid, Stack, Typography } from '@mui/material';
import cardBack from '@/public/backs/red2.svg';

import { useTheme } from '@mui/material/styles';

export default function Home() {
	const headerHeight = 64;

	const theme = useTheme();

	// round1(0);
	// round2(0);
	// round3(0);
	// round4(0);
	// winMessage();

	const history = ['card0', 'card1', 2, 3];

	return (
		<Container
			maxWidth={'md'}
			sx={{
				backgroundColor: 'blue',
				height: `calc(100vh - ${headerHeight}px)`,
			}}
		>
			<Typography
				variant={'h1'}
				sx={{ display: 'flex', justifyContent: 'center' }}
			>
				Ride the Bus
			</Typography>

			<Stack sx={{ width: '100%' }}>
				{/* Cards container */}
				<Box sx={{ height: '33vh', outline: 'solid' }}>
					<Grid container spacing={2} sx={{ height: '100%' }}>
						{/* Display history from rounds 1 and 2 */}
						<Grid size={2}>
							<Stack sx={{ height: '100%' }}>
								{[0, 1].map(historyIdx => {
									return (
										<Box
											key={historyIdx}
											sx={{
												alignItems: 'center',
												display: 'flex',
												flex: 2,
												justifyContent: 'center',
												marginBottom: `${
													historyIdx === 0 ? theme.spacing(1) : ''
												}`,
												marginTop: `${
													historyIdx === 1 ? theme.spacing(1) : ''
												}`,
												outline: 'solid',
											}}
										>
											{history.at(historyIdx)}
										</Box>
									);
								})}
							</Stack>
						</Grid>

						<Grid
							size={5}
							sx={{
								alignItems: 'center',
								display: 'flex',
								justifyContent: 'center',
								outline: 'solid',
							}}
						>
							lg
						</Grid>
						<Grid
							size={5}
							sx={{
								alignItems: 'center',
								display: 'flex',
								justifyContent: 'center',
								outline: 'solid',
							}}
						>
							lg
						</Grid>
					</Grid>
				</Box>

				{/* Message container */}
				<Box></Box>
				{/* Buttons container */}
				<Box></Box>
			</Stack>
		</Container>
	);
}

'use client';

import Card from '@/lib/classes';
import { round1, round2, round3, round4, winMessage } from '@/lib/utils';

import Image from 'next/image';
import { Button, Box, Container, Grid, Item, Typography } from '@mui/material';
import cardBack from '@/public/backs/red2.svg';

export default function Home() {
	// round1(0);
	// round2(0);
	// round3(0);
	// round4(0);
	// winMessage();

	const history: Card[] = [];

	return (
		<Container
			maxWidth={'md'}
			sx={{
				alignItems: 'center',
				backgroundColor: 'blue',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography variant={'h1'}>Ride the Bus</Typography>

			{/* Cards */}
			<Box>
				<Grid container spacing={6}>
					{history.map(i => {
						return (
							<Grid key={i} size={6}>
								<Image alt={'card back'} priority src={cardBack} />
							</Grid>
						);
					})}
				</Grid>
			</Box>

			{/* Message */}
			<Box></Box>

			{/* Buttons */}
			<Box></Box>
		</Container>
	);
}

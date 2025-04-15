'use client';

import { round1, round2, round3, round4, winMessage } from '@/lib/utils';

import Image from 'next/image';
import { Button, Box, Container, Typography } from '@mui/material';
import cardBack from '@/public/backs/red2.svg';

export default function Home() {
	round1(0);
	round2(0);
	round3(0);
	round4(0);
	winMessage();

	return (
		<Container
			maxWidth={'md'}
			sx={{
				alignItems: 'center',
				backgroundColor: 'blue',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Typography>hello from page.tsx</Typography>
			{/* <Typography variant={'h1'}>Ride the Bus</Typography>

			<Image alt={'test'} src={cardBack} />

			<Button>Begin game</Button> */}
		</Container>
	);
}

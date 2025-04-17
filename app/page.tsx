'use client';

import Card from '@/lib/classes';
import { round1, round2, round3, round4, winMessage } from '@/lib/utils';

import Image from 'next/image';
import { Button, Box, Container, Grid, Stack, Typography } from '@mui/material';
import cardBack from '@/public/backs/red2.svg';

export default function Home() {
	const headerHeight = 64;

	// round1(0);
	// round2(0);
	// round3(0);
	// round4(0);
	// winMessage();

	const data = [
		{ id: 0, name: 'child0' },
		{ id: 1, name: 'child1' },
		{ id: 2, name: 'child2' },
	];

	const history: Card[] = [];

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

			<Stack spacing={2} sx={{ width: '100%' }}>
				{data.map(child => {
					return (
						<Box key={child.id} sx={{ flex: 1, outline: 'solid' }}>
							{child.name}
						</Box>
					);
				})}
			</Stack>
		</Container>
	);
}

const Child0 = function (name) {
	return <h1>{name}</h1>;
};

const Child1 = function (name) {
	return <h1>{name}</h1>;
};

const Child2 = function (name) {
	return <h1>{name}</h1>;
};

'use client';

import { CardsContainer } from '@/components';

import Image from 'next/image';
// import card0 from '@/public/faces/0.svg';

import Card from '@/lib/classes';
import { round1, round2, round3, round4, winMessage } from '@/lib/utils';

import {
	// Button,
	Box,
	Container,
	Stack,
	// Typography,
	useMediaQuery,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

export default function Home() {
	const theme = useTheme();

	// Reduce header height on for mobile viewport
	const headerHeight = useMediaQuery(theme.breakpoints.down('sm')) ? 56 : 64;

	// round1(0);
	// round2(0);
	// round3(0);
	// round4(0);
	// winMessage();

	return (
		<Container
			maxWidth={'md'}
			sx={{
				backgroundColor: 'dodgerblue',
				display: 'flex',
				flexDirection: 'column',
				height: `calc(100vh - ${headerHeight}px)`,
			}}
		>
			{/* <Typography
				variant={'h1'}
				sx={{ display: 'flex', justifyContent: 'center' }}
			>
				Ride the Bus
			</Typography> */}

			<Stack
				spacing={2}
				sx={{ flex: 1, paddingY: theme.spacing(4) }}
				useFlexGap
			>
				{[
					<CardsContainer key={'cards'} />,
					<Box key={'message'}>middle</Box>,
					// <CardBox key={'test'} />,
					<Box key={'buttons'}>bottom</Box>,
				].map(child => {
					return (
						<Box
							key={child.key}
							sx={{
								flex: 1,
								outline: 'solid',
							}}
						>
							{child}
						</Box>
					);
				})}
			</Stack>
		</Container>
	);
}

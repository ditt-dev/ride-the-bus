import Image from 'next/image';
import { Button, Box, Container, Typography } from '@mui/material';
import cardBack from '@/public/backs/red2.svg';

interface Props {
	children: React.ReactNode;
}

export default function MainBody({ children }: Props) {
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
			{/* <Typography variant={'h1'}>Ride the Bus</Typography>

			<Image alt={'test'} src={cardBack} />

			<Button>Begin game</Button> */}
			{children}
		</Container>
	);
}

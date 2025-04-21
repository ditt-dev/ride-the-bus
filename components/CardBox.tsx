import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

interface Props {
	name: string;
	src: string;
}

export default function CardBox({ name, src }: Props) {
	const theme = useTheme();

	return (
		<Stack
			spacing={1}
			sx={{
				height: '100%',
				paddingTop: theme.spacing(2),
				textAlign: 'center',
				width: '100%',
			}}
		>
			<Box sx={{ flex: 9, position: 'relative' }}>
				<Image alt={'name'} fill src={src} />
			</Box>

			<Typography variant={'h6'} sx={{ flex: 1 }}>
				{name}
			</Typography>
		</Stack>
	);
}

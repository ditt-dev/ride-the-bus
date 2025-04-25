import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

interface Props {
	name: string | React.ReactElement;
	src: string;
}

export default function CardBox({ name, src }: Props) {
	const theme = useTheme();

	return (
		<Stack
			spacing={2}
			sx={{
				height: '100%',
				paddingTop: theme.spacing(2),
				textAlign: 'center',
				width: '100%',
			}}
		>
			<Box sx={{ flex: 8, position: 'relative' }}>
				<Image alt={'name'} fill src={src} />
			</Box>

			<Typography variant={'h6'} sx={{ flex: 2, lineHeight: 1.2 }}>
				{name}
			</Typography>
		</Stack>
	);
}

import { Box } from '@mui/material';

import Image from 'next/image';

import cardBack from '@/public/backs/red2.svg';

export default function CardDeck() {
	const colors = ['red', 'orange', 'yellow', 'green'];

	return (
		<Box
			sx={{
				outline: 'solid',
				width: '100%',
				height: '100%',
				display: 'flex',
				// justifyContent: 'center',
				// transform: 'translate(-15%)',
				// maxWidth: '100%',
				position: 'relative',
			}}
		>
			{[0, 1, 2, 3].map(i => {
				return (
					<Box
						key={i}
						sx={{
							backgroundColor: `${colors.at(i)}`,
							position: 'absolute',
							transform: `translate(${20 * i}%)`,
							height: '100%',
							outline: 'solid',
							// width: `calc(${100 - 20 * i}%)`,
							width: '50%',

							// width: {
							// 	xs: 80, // ≤ 600 px ­→ 80 px wide
							// 	sm: 100, // ≥ 600 px ­→ 100 px
							// 	md: 120, // ≥ 900 px ­→ 120 px
							// 	lg: 140, // ≥ 1200 px ­→ 140 px
							// },

							// '& img': {
							// 	width: '100%',
							// 	height: 'auto',
							// 	display: 'block',
							// },
						}}
					>
						<Image alt="" fill src={cardBack} />
					</Box>
				);
			})}
		</Box>
	);
}

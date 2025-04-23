import { Box } from '@mui/material';

export default function CardFan() {
	return (
		<Box
			sx={{
				height: '100%',
				outline: 'solid green 5px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					top: '-30%',
					transform: 'rotate(10deg)',
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

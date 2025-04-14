import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

interface Props {
	credit: number;
}

export default function MainHeader({ ...props }: Props) {
	return (
		<Box>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Credit: {props.credit}
					</Typography>

					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

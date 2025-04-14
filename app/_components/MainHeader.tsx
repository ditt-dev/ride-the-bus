import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header(props){
  
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {props.menutitle}
        </Typography>
      </Toolbar>
    </AppBar>
    
  )
}
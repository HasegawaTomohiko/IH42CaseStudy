import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Register from '@/pages/register';


export default function Home() {
  
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            index  
          </Typography>
        </Toolbar>
      </AppBar>
      
    <Stack spacing={2} direction="row">
      <Button variant="contained" href='login'>ログイン</Button>
      <Button variant="contained" href='register'>新規登録</Button>
    </Stack>
    </>
  )
}
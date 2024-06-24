import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Register from '@/pages/register';


export default function Home() {
  
  return(
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" href='login'>ログイン</Button>
        <Button variant="contained" href='register'>新規登録</Button>
      </Stack>
    </>
  )
}
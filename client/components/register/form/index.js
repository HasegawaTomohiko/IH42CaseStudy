import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './form.module.scss';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';


export default function FormPropsTextFields() {

  const router = useRouter(); 

  const handleButtonClick = () => {
    router.push('/login'); 
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
      className={styles.formContainer}
    >

      <Typography variant="body1" component="p">
      ドライバーID：
      </Typography>

        <TextField
          required
          id="DoriverId"
          label="ドライバーID"
        />

      <Typography variant="body1" component="p">
      パスワード：
      </Typography>

        <TextField
          required
          id="password"
          label="パスワード"
          type="password"
          autoComplete="current-password"
        />

      <Typography variant="body1" component="p">
      もう一度パスワードを入力してください：
      </Typography>

          <TextField
          required
          id="password"
          label="もう一度パスワードを入力してください"
          type="password"
          autoComplete="current-password"
        />

        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleButtonClick} className={styles.submitButton}>
          登録
        </Button>
        </Stack>

    </Box>
  );
}





import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './form.module.scss';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

export default function FormPropsTextFields() {


  
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


        <Stack spacing={2} direction="row">
            <Button variant="contained" href='map'　className={styles.submitButton}>ログイン</Button>
        </Stack>

    </Box>
  );
}





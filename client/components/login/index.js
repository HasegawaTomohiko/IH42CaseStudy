import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from "./login.module.scss";

console.log(styles);

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      className={styles.container}
      noValidate
      autoComplete="off"
    >
    
    <div className={styles.fieldContainer}>
    <Typography variant="h5" className={styles.typography}>
      ドライバーID
    </Typography>

        <TextField
          required
          id="DoriverId"
          label="ドライバーID"
          className={styles.textField}
        />
     </div>

    <div className={styles.fieldContainer}>
    <Typography variant="h5" className={styles.typography}>
      パスワード
    </Typography>

        <TextField
          required
          id="password"
          label="パスワード"
          type="password"
          autoComplete="current-password"
          className={styles.textField}
        />
     </div>

        <Stack spacing={2} direction="row">
            <Button variant="contained" className={styles.button} href='map'>ログイン</Button>
        </Stack>


    </Box>
  );
}
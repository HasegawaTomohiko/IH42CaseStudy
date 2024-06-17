import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="DoriverId"
          label="ドライバーID"
        />

        <TextField
          required
          id="password"
          label="パスワード"
          type="password"
          autoComplete="current-password"
        />

        <Stack spacing={2} direction="row">
            <Button variant="contained" href='map'>ログイン</Button>
        </Stack>

    </Box>
  );
}
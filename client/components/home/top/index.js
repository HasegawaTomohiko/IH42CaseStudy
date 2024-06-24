import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from "./top.module.scss";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" >ログイン</Button>
      <Button variant="contained" >新規登録</Button>
    </Stack>
  );
}
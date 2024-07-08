import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "@/components/layout/header";
import styles from "./top.module.scss";
import Link from "next/link";

console.log(styles);

export default function HomeTop() {
  return (
    <div className={styles.container}>
      <Stack spacing={2} direction="row" className={styles.stack}>
        <div className={styles.buttonWrapper}>
          <div className={styles.textAboveButton}>既に新規登録がお済みの方</div>
          <Link href="/login" passHref>
            <Button className={styles.someButtonClass}>ログイン</Button>
          </Link>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.textAboveButton}>新規で登録される方</div>
          <Link href="/register" passHref>
            <Button className={styles.someButtonClass}>新規登録</Button>
          </Link>
        </div>
      </Stack>
    </div>
  );
}
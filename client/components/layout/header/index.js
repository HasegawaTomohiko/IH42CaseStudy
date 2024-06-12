import { AppBar, Box } from "@mui/material";
import styles from "./header.module.scss";
import HeaderIcon from "./headerIcon";
import { MenuBook } from "@mui/icons-material";

export default function Header(){
  return(
    <Box>
      <AppBar position="fixed" className={styles.Header}>
        <MenuBook />
      </AppBar>
    </Box>
    
  )
}
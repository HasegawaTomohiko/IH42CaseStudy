import Home from "@/components/home";
import Header from "@/components/layout/header";
import { AppBar } from "@mui/material";
import Link from "next/link";


export default function index() {
  return (
    <main>
      <Header menutitle="index" />
      <Home />
    </main>
  )
}

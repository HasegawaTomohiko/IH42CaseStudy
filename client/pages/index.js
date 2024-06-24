import Home from "@/components/home";
import Link from "next/link";

import Header from "@/components/layout/header";
import BasicButtons from"@/components/home/top";


export default function index() {
  return (
    <>
          <Header menutitle="index" />
         <Home />
         </>
  )
}

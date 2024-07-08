import Home from "@/components/home";
import Link from "next/link";
import HomeTop from "@/components/home/top";
import Header from "@/components/layout/header";


export default function HomePage() {
  return (
    <div>
      <Header menutitle="index" />
      <HomeTop />
    </div>
  );
}

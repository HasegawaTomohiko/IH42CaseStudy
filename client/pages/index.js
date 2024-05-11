import Home from "@/components/home";
import Link from "next/link";

export default function index() {
  return (
    <main>
      <Home />
      <Link href="/test">レスポンス確認用(要削除)</Link>
    </main>
  )
}

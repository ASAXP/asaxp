import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <main className="">
      <Link href="/story">story page link</Link>
      <Button type="primary">antdButton</Button>
    </main>
  );
}

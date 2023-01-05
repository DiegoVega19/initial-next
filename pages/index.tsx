import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainLayout name="hello">
        <Link href="/about"> Go About</Link>
      </MainLayout>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
    <MainLayout name="hello">
      <div>
     <Link href='/'> Go Home</Link>
      </div>
      </MainLayout>
    </>
  );
}

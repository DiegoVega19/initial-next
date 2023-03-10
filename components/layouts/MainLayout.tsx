import Head from "next/head";
import React, { FC } from "react";
import styles from "../layouts/MainLayout.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
  children: JSX.Element;
}
export const MainLayout: FC<Props> = ({ children, name }) => {
  return (
    <>
      <Head>
        <title>Home Diego</title>

        <meta name="description" content="Generated by  next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

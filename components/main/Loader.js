import React from "react";
import styles from "./Loader.module.css";
import Head from "next/head";
import { FaSpinner } from "react-icons/fa";
const Loader = () => {
  return (
    <>
      <Head>
        <title>لطفا شکیبا باشید ...</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.loaderContainer}`}>
        <FaSpinner size={25} className={`${styles.loaderSpin}`} />
      </div>
    </>
  );
};

export default Loader;

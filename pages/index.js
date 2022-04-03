import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import Search from "../components/Search";

export async function getStaticProps(context) {
  const res = await axios.get(
    "https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv"
  );
  const data = res.data.split("\n");
  const dataLabels = data.shift().split(",");

  const uniArray = [];
  for (let i = 0; i < data.length; i++) {
    const items = data[i].split(",");
    let uniObj = {};
    for (let j = 0; j < items.length; j++) {
      uniObj[dataLabels[j]] = items[j];
    }
    uniArray.push(uniObj);
  }
  return { props: { uniArray } };
}

export default function Home({ uniArray }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>YourUni</title>
        <meta name="description" content="YourUni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logo}>YourUni</div>
          <div className={styles.links}>
            <a>Product</a>
            <a>Download</a>
            <a>Pricing</a>
          </div>
        </div>
        <section className={styles.hero_section}>
          <div className={styles.hero_copy}>
            <h1 className={styles.title}>
              Find the university that's right for you.
            </h1>
            <p className={styles.description}>
              Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem.
              Voluptas atque autem totam.
            </p>
          </div>
          <div className={styles.hero_image_wrapper}>
            <img src={"/Hero.png"} className={styles.hero_image} />
          </div>
        </section>
        <Search data={uniArray} />
      </main>
    </div>
  );
}

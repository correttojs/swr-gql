import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSwrGql } from "@packages/swr-gql/useSwrGql";
import { ContinentsDocument, ContinentsQuery } from "../client/codegen";
import { gqlRequest } from "@packages/swr-gql/gqlRequest";

const Home: NextPage<ContinentsQuery> = (props) => {
  console.log(`REACT ${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`)
  const { data } = useSwrGql(
    ContinentsDocument,
    {},
    { url: `${process.env.NEXT_PUBLIC_VERCEL_URL||""}/api/graphql`, fallbackData: props }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs SWR Gql codegen Example</title>
        <meta name="description" content="Nextjs SWR Gql codegen Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Nextjs SWR Gql codegen Example
        </h1>

        {data && data.continents &&
          data.continents.map((continent) => (
            <div key={continent?.code}>{continent?.name} - {continent?.code}</div>
          ))}
      </main>

    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => { 
  console.log(`${process.env.VERCEL_URL}/api/graphql`)
  const data = await gqlRequest(
    ContinentsDocument,
    {},
    `${process.env.VERCEL_URL}/api/graphql`,
  );
 
  return {
    props: data,
  };
};

export default Home;

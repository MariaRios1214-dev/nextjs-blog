import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';
import Layout from "../../components/layout";
import AlertComponent from "../../components/Alert/Alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Firs post</title>
        {/* Agregando comandos de terceros */}
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      <AlertComponent children='Mafe'type="success"/>
      <AlertComponent children='Failed process'type="error"/>
    </Layout>);
}
import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';

export default function FirstPost() {
  return <>
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
  </>
}
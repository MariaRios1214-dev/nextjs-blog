import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';
import Layout from "../../components/layout";
import Alert from "../../components/alert/alert";

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1055`)
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default function FirstPost({data}) {
  console.log('dataMeli', data)
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
      <Alert children='Mafe'type="success"/>
      <Alert children='Failed process'type="error"/>
    </Layout>);
}
import fetch from 'cross-fetch'

import Link from "next/link";
import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from '../icon.png'

export default () => (
  <main>
    <Head>
      <meta charSet="utf-8"/>
      <title>Serverless Prettier</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      <link rel="icon" href={icon}/>
      <link rel="apple-touch-icon" href={icon}/>
    </Head>
    <Header />
    <section>
      <Link href="/example">
        <a>API request example</a>
      </Link>
      <Link href="/editor">
        <a>Editor</a>
      </Link>
    </section>
    <Footer />
  </main>
);
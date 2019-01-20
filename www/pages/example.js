import fetch from 'cross-fetch'
import * as React from "react";
import Head from 'next/head'
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from '../icon.png'

export default class ExamplePage extends React.Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Head>
          <meta charset="utf-8"/>
          <title>API example</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <link rel="icon" href={icon}/>
          <link rel="apple-touch-icon" href={icon}/>
        </Head>
        <Header />
        <section>
          POST /api
          <pre>
            {`{"code": "console.log( 0 )", "config": {"semi": false}}`}
          </pre>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
          <strong>{this.props.isServer ? "server" : "client"} side</strong>
        </section>
        <Footer/>
      </main>
    );
  }
}
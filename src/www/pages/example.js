import fetch from 'cross-fetch'
import * as React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class ExamplePage extends React.Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
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
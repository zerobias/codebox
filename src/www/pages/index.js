import fetch from 'cross-fetch'

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/example">
        <a>API request  example</a>
      </Link>
    </section>
    <Footer/>
  </main>
);
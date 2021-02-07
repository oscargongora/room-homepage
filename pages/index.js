import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Room Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing></Landing>
    </div>
  );
}

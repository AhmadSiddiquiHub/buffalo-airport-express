import Head from "next/head";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Van Winkle - Car Rental</title>
        <meta name="description" content="Best car rental service" />
      </Head>

      <Hero />
    </>
  );
}

import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>NOVA RIDE - Car Rental</title>
        <meta name="description" content="Best car rental service" />
      </Head>

      <Header />
      <Hero />
      <Footer />
      {/* <Services />
      <Fleet />
      <BookingForm /> */}
    </>
  );
}

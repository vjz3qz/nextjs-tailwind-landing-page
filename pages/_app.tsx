import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";
import Head from 'next/head';
import useDetectColorScheme from '../utils/useDetectColorScheme';

function MyApp({ Component, pageProps }: AppProps) {
  // useDetectColorScheme(); // Add this line

  return (
    <>
    <Head>
        <link rel="icon" href="/images/favicon_io_dark/favicon.ico" id="favicon" />
    </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

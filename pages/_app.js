import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../components/Navbar.js";


function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script type="text/javascript" src="scripts/d3.v3.js"></script>
          <script type="text/javascript" src="scripts/nv.d3.js"></script>
          <script type="text/javascript" src="scripts/data.js"></script>
          <script type="text/javascript" src="scripts/functions.js"></script>
        </Head>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </>
    );
}

export default MyApp;

import "../styles/globals.css";
import { Layout } from "../components";
import { DataProvider } from "../Context";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </ChakraProvider>
  );
}

export default MyApp;

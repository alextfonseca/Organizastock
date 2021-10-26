import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { ToastContainer } from "react-toastify"; // Importamos o Toastify

import "react-toastify/dist/ReactToastify.css"; // O estilo do Toastify

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { ToastContainer } from "react-toastify"; // Importamos o Toastify

import "react-toastify/dist/ReactToastify.css"; // O estilo do Toastify

// react query
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ToastContainer autoClose={3000} />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
export default MyApp;

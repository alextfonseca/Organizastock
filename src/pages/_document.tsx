import Document, { Head, Html, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="Organzastock é um sistema de organização de estoques de empresas pequenas, médias e grandes, onde é possivel monitorar todo seu estoque em um painel simples e prático"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

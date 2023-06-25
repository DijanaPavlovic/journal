import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  return = (): JSX.Element => (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default AppDocument;

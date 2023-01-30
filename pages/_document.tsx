import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-green-300 dark:scrollbar-thumb-stone-500 dark:scrollbar-track-stone-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full bg-gradient-to-r from-green to-blue-400 dark:from-stone-700 dark:to-stone-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

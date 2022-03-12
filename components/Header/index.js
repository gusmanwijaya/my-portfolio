import Head from "next/head";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title} - Gusman Wijaya`s Portfolio</title>
      <meta name="description" content="Gusman Wijaya's website portfolio" />
    </Head>
  );
}

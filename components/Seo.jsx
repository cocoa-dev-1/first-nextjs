import Head from "next/head";

export default function Seo({ title }) {
  const name = `${title} | Next Movies`;
  return (
    <Head>
      <title>{name}</title>
    </Head>
  );
}

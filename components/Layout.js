import Head from "next/head";

export default function Layouts(props) {
  return (
    <div className={`!font-primary relative ${props.className}`}>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </div>
  );
}

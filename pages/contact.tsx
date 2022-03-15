import Head from 'next/head';
import Form from '../components/Form';

export default function ContactPage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Bebop Launcher</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Form />
    </div>
  );
}
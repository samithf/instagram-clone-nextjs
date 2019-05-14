import Wrapper from './Wrapper';
import Nav from '../components/Nav';
import Head from 'next/head';

const Main = props => (
  <Wrapper>
    <Head>
      <title>Hello</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,500"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="../static/styles/reset.css" />
    </Head>
    <style jsx global>{`
      body {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <header>
      <Nav />
    </header>
    <main>{props.children}</main>
  </Wrapper>
);

export default Main;

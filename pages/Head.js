import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="We have been succesfull in placing more than 1800+ students  in India and Middle East Asia.London college is a globally reputed  educational institution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon (1).ico" />
      </Head>
    </>
  );
};

export default PageHead;

import Head from 'next/head'
export default function Index() {
  return (
    <div>
      <Head>
        <title>Gracias</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="emoji">💖</p>
      <p className="date">29 / 01 / 20</p>
      <style jsx global>{`
        html {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        body {
          margin: 0;
          padding: 1rem 2rem;
          background: black;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        p {
          margin: 0;
          font-size: 75px;
          text-align center;
          max-width: 100%;
        }

        .date {
          border: 1px solid white;
          padding 0.5rem 1rem;
        }

        .emoji {
          position: absolute;
          font-size: 25px;
          padding: 0;
          top: 45.5%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          margin: auto;
        }

        @media (max-width: 400px) {
          .date {
            font-size: 40px;
          }

          .emoji {
            font-size: 20px;
            top: 47.5%;
          }
        }
      `}</style>
    </div>
  )
}

import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Hey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="eliza">Eliza,</p>
      <p className="question">¿Quieres ser mi novia?</p>
      <div className="links">
        <Link href="/yes">
          <a>Sí</a>
        </Link>
      </div>
      <style jsx global>{`
        html {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        body {
          margin: 0;
          padding: 1rem 2rem;

          background: #a8c0ff; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #a8c0ff, #3f2b96);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .eliza, .question {
          margin: 0;
          font-size: 75px;
          text-align left;
          max-width: 100%;
        }

        .question {
          font-size: 80px;
        }

        .links {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4rem;
        }

        .links a {
          font-size: 30px;
          color: white;
          text-decoration: none;
          position: relative;
          border: 1px solid white;
          width: 100px;
          text-align: center;
          padding: 0.5rem 1rem;
        }

        .links a::after {
          position: absolute;
          height: 7px;
          opacity: 0.7;
          width: 100%;
          bottom: 0;
          left: 0;
          right: 0;
          content: '';
          background-color: black;
          z-index: -1;
        }

        @media (max-width: 400px) {
          .date {
            font-size: 40px;
          }

          .eliza {
            font-size: 45px;
          }

          .question {
            font-size: 50px;
          }

          .links a {
            font-size: 20px;
            color: white;
            text-decoration: none;
            position: relative;
            border: 1px solid white;
            width: 100px;
            text-align: center;
            padding: 0.5rem 1rem;
          }
        }

      `}</style>
    </div>
  )
}

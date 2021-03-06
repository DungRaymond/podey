import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pode Corn</title>
        <meta name="description" content="Pode corn for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ninemetal.substack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read my letters on Substack
        </a>
      </footer>
    </div>
  )
}

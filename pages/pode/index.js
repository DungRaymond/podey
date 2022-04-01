import Head from "next/head";
import box from "../../styles/Pode.module.sass"

export default function HomeBox () {
  return (
    <div className={box.home}>
      <Head>
        <title>Pode</title>
        <meta property="og:title" content="Pode newsletter" key="title"></meta>
      </Head>

      
    </div>
  )
}
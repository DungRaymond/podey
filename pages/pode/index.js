import Head from "next/head";
import box from "../../styles/Pode.module.sass"
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'tjbdvyoebbkqjs',
  host: 'ec2-174-129-16-183.compute-1.amazonaws.com',
  database: 'd7mobpe7ggtv7h',
  password: 'a268ed92c0ef67c6f9ac6cc83c99f476543dd18a706eab5ea726d593aaca752a',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  }
})

function getLatestPostWithOffset(offset) {
  pool.query('SELECT * FROM \"Posts\" OFFSET ' + offset, (err, res) => {
    if(err) {
      console.log(err);
      return { data: 'failed'}
    } else {
      return res.rows[0]
    }
  })
}


export default function HomeBox (data) {
  return (
    <div className={box.home}>
      <Head>
        <title>Pode</title>
        <meta property="og:title" content="Pode newsletter" key="title"></meta>
      </Head>

      
    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://.../data`)
  const data = await res.json()

  return {
    props: {data},

  }
}
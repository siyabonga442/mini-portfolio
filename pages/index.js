import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Siya | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      
    </div>
  )
}
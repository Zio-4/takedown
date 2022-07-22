import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href='/notes'>
        <a>
          Link
        </a>
      </Link>
    </div>
  )
}

export default Page

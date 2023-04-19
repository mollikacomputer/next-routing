import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
 
      <h2 className="text-3xl">Home page</h2>
      <Link href='/blog' > 
      Blog
      </Link>
    </main>
  )
}

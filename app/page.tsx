import { Header, Hero } from '../components/index';
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto'>
      {/* Navbar */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Posts */}
      
    </main>
  )
}


export const getServerSideProps = async () => {
  const query = 
}
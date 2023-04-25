import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductList from '@/components/ProductList/ProductList'
import CenteredHeader from '@/components/CenteredHeader/CenteredHeader'
import { useState } from 'react'
import Cart from '@/components/Cart/Cart'
import MyEcommerceApp from '@/components/MyEcommerceApp/MyEcommerceApp'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

const mockData = [
  {
    id: 1,
    name: 'Product 1',
    price: 100.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 50.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 75.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 125.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 80.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 60.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 90.00,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 70.00,
    image: 'https://via.placeholder.com/150',
  },
];
export default function Home() {
  const [cart, setCart] = useState([]);



  return (
    <>
      <Head>
        <title>$ Online Business</title>
        <meta name="description" content="$ Online Business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      



>

      <MyEcommerceApp/>



          </>
  )
}

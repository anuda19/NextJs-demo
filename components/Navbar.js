import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='menu_bar'>
        <ul className='menu_items'>
      <Image src='https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=600' height='50' width='150' alt="logo"></Image>
          <div className='menu_list'>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link  href="/demo/services">
            <li>Services</li> 
          </Link>
          <Link  href="/demo/books">
            <li>Books</li>
          </Link>
          <Link  href="/demo/about">
            <li>About</li>
          </Link>
          </div>
        </ul>
      </nav>  
  )
}

export default Navbar
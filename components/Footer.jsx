import React from 'react'
import Link from 'next/link';
import {AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 JBL Headphone All rights reserved</p>
      <p className='icons'>
          <Link href='#'><AiFillInstagram /></Link>
          <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
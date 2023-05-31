import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'


export default function index(){
  return (
    <>
      <Head>
        <title>Welcome to </title>
      </Head>
      <div className='text-center'>
      <Image src="/unnamed.png" className="rounded" alt="unnamed" width={200} height={200} />
      </div>
      
      <div className="text-center">
        <button type="button" class="btn btn-outline-info">Info</button>
      </div>
    </>
  )
}
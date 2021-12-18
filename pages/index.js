import {useState, useEffect} from 'react'
import Head from 'next/head'
import Main from '../src/component/Main/Main'
import Side from '../src/component/Side/Side'
import Musik from '../src/component/Musik';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row overflow-auto">
      <Head>
        <title>Undangan</title>
      </Head>
      <Main/>
      <Side/>
      <Musik/>
    </div>
  )
};
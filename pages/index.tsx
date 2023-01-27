import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar"
export default function Home() {

  return (
    <div>
        
      <Head>
        <title>eCommerce</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<div className="flex justify-center align-center">
<Navbar></Navbar>
</div>
 

 




            
          
        
 
    </div>
  );
}
"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';


export default function Home() {
  const[data, setData]= useState(null)

  const fetchPosts= async()=>{
    const response = await fetch('/api');
    const result = await response.json();
    if(response.ok){
      console.log("success");
      setData(result)
    };
  }
  useEffect(() => {
    fetchPosts();
  }, []);



  return (
    <main>
    {data && (data as any[]).map((post:any)=>(
      <div key={post._id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ) 
    )}
    {!data && <p>Loading posts...</p>} {/* Display loading message */}
    </main>
  );
}
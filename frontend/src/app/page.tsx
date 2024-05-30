'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import Trending from '@/app/components/Trending'
export default async function Home() {
  const [email, setEmail]= useState("")
  return (
    <main className="w-full">
    <Trending />
    </main>
  );
}
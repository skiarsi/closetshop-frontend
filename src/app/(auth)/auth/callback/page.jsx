'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(()=>{
    const token = searchParams.get('token');
    const name = searchParams.get('name');

    if(token){
      localStorage.setItem('token', token);
      document.cookie = `token=${token}; path=/;`;

      router.push('/');
    }else{
      router.push('/login');
    }
  },[searchParams]);

  return (
    <div className="p-4">Logging in with Google...</div>
  )
}

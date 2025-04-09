'use server';

import { cookies } from "next/headers";


// login user use credentials
export async function doLoginCredential(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  
  if(!response.ok){
    return {
      error: true,
      message: data.message,
    }
  }
  
  return data;
}

//logout user
export async function logoutUser(){
  const token = (await cookies()).get('token')?.value;

  if(!token) return {success: false, message: 'no token found'};

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  (await cookies()).delete('token');

  return {success: true}
}
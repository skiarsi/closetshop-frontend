'use server';

export async function doLoginCredential(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  
  const response = await fetch('http://localhost:8000/api/login', {
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
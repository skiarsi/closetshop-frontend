export const getUser = async () => {
  const token = localStorage.getItem('token');

  if(!token) return null;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    headers:{
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  if(!response.ok) return null;
  
  return await response.json();
}
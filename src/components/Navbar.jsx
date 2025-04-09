import { logoutUser } from '@/actions/actions';
import { useUser } from '@/lib/useUser';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Navbar({className}) {
  const user = useUser();
  const route = useRouter();
  return (
    <div className={`${className} bg-amber-700  flex flex-row w-full`}>
      <div className='flex flex-row w-9/12 mx-auto bg-amber-950 py-2 px-4'>
        {user ? (
          <p className='text-white'>
            {user.name}
            <button
              className='bg-red-500 text-white px-2  rounded-sm py-1 ml-4'
              onClick={async () => {
                const result = await logoutUser();
                if (result.success) {
                  localStorage.removeItem('token');
                  route.push('/login');
                }
              }}
            >
              Logout
            </button>
          </p>
        ) : ""}
      </div>
    </div>
  )
}

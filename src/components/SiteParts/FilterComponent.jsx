import Link from 'next/link'
import React from 'react'

export default function FilterComponent() {
  return (
    <div>
      <h1 className='font-bold text-lg block mb-5'>Categouries</h1>
      <div className='flex flex-col ps-5'>
        <Link href={`/categouties/men`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Men</Link>
        <Link href={`/categouties/women`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Women</Link>
        <Link href={`/categouties/kids`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Kids</Link>
        <Link href={`/categouties/babies`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Babies</Link>
      </div>

      <h1 className='font-bold text-lg block mt-10 mb-4'>Products</h1>
      <div className='flex flex-col ps-5'>
        <Link href={`/shop/t-shirts`} className='block py-2 px-0 hover:text-amber-700 text-lg'>T-Shirts</Link>
        <Link href={`/shop/hoodies-sweatshirts`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Hoodies & Sweatshirts</Link>
        <Link href={`/shop/caps`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Caps & Hats</Link>
        <Link href={`/shop/polo-shirts`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Polo Shirts</Link>
        <Link href={`/shop/tank-tops`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Tank Top</Link>
        <Link href={`/shop/long-sleeved-shirts`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Long Sleeved Shirts</Link>
        <Link href={`/shop/pants`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Pants</Link>
        <Link href={`/shop/sportswear`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Sportswear</Link>
        <Link href={`/shop/dresses`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Dresses</Link>
        <Link href={`/shop/work-uniform`} className='block py-2 px-0 hover:text-amber-700 text-lg'>Work Uniform</Link>
      </div>
    </div>
  )
}

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  
  const {pathname} = request.nextUrl;

  const isProtectedUrls = pathname.startsWith('/dashboard') ||
                          pathname.startsWith('/dashboard/')||
                          pathname.startsWith('/checkout');

  if(isProtectedUrls && !token){
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // جلوگیری از ورود کاربر غیرلاگین به صفحات محافظت‌شده
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if((pathname === '/login' || pathname ==='/register') && token){
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname === '/londoncollege-mumbai') {
    url.hostname = 'mumbai.londoncollege.in';
    return NextResponse.redirect(url);
  }

  if (url.pathname === '/londoncollege-kochi') {
    url.hostname = 'kochi.londoncollege.in';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

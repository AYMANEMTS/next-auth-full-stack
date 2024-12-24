import { NextResponse } from 'next/server';


export function middleware(request) {
    const { pathname } = request.nextUrl;
    if (pathname === '/api/login') {
        if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
            const contentLength = request.headers.get("content-length");
            if (!contentLength || contentLength === "0") {
                return NextResponse.json({ error: "No content length provided" }, { status: 400 });
            }
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path',
};

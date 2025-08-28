import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function middleware(request: NextRequest) {
	const supabase = await createClient()
	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
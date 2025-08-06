import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
		error: '/auth/error',
  },
	callbacks: {
		async session({ session, token } ) {
			session.user.id = token.sub;
			return session
		},
	},
}
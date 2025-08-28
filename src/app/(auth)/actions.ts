'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

	const username = formData.get('username') as string
	const email = formData.get('email') as string
	const password = formData.get('password') as string
	const confirmPassword = formData.get('confirmPassword') as string

  if (!username || !email || !password || !confirmPassword) {
    return redirect('/signup?error=All fields are required')
  }

	if (password !== confirmPassword) {
    return redirect('/signup?error=Passwords do not match')
  }

	try {
		const { data, error: signUpError } = await supabase.auth.signUp({
    	email,
    	password,
    	options: {
      	data: { username },
    	},
		})

		if (signUpError) throw signUpError

		const user = data.user
		if (user) {
			const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

    	const { error: profileError } = await supabase
      	.from('users')
      	.insert([
        	{
          	id: user.id,
        		username,
          	email,
						account_type: 'Free',
						created_at: new Date().toISOString(),
						expires_at: expiresAt,
        	},
      	])

    	if (profileError) throw profileError
  	}

		revalidatePath('/', 'layout')
  	return redirect('/dashboard')

	} catch (error) {
		return redirect('/signup?error=' + (error as Error).message)
	}
}

export async function login(formData: FormData) {
  const supabase = await createClient()
	
	const email = formData.get('email') as string
  const password = formData.get('password') as string

	if (!email || !password) {
    return redirect('/login?error=Email and password are required')
  }

	try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    revalidatePath('/', 'layout')
    return redirect('/dashboard')

  } catch (error) {
    return redirect('/login?error=' + (error as Error).message)
  }
}

export async function logout() {
	const supabase = await createClient()

	try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    revalidatePath('/', 'layout')
    return redirect('/')

  } catch (error) {
    return redirect('/?error=' + (error as Error).message)
  }
}
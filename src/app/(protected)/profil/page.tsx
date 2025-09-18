import AccountForm from '@/components/AccountForm'
import { createClient } from '@/utils/supabase/server'

export default async function Account() {
  const supabase = await createClient()
	const {
    data: { user },
  } = await supabase.auth.getUser()

	const { data: profiles } = await supabase
			.from('profiles')
			.select();

  return (
		<div>
			<AccountForm user={user} />
			<pre>{JSON.stringify(profiles, null, 2)}</pre>
		</div>	
	) 
}
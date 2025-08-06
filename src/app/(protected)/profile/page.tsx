'use client'

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession()

	if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Silakan login dulu</p>;
	
  return (
    <div>
      {session ? (
        <>
          <p>Logged in as: {session.user?.email}</p>
          <p>Name: {session.user?.name}</p>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

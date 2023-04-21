import { signIn, useSession } from "next-auth/react";

export default function Auth() {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn("google")}>Zaloguj</button>
      </div>
    );
  }
}

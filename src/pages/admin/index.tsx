import { signIn, useSession } from "next-auth/react";
import Dashboard from "./dashboard";

export default function Auth() {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn("google")}>Zaloguj</button>
      </div>
    );
  }

  return <Dashboard />;
}

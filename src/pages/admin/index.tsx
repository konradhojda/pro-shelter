import { signIn, useSession } from "next-auth/react";
import Dashboard from "../../components/Admin";

export default function Auth() {
  const { data: session, status } = useSession();

  if (!session && status !== "loading") {
    return (
      <div>
        <button onClick={() => signIn("google")}>Zaloguj</button>
      </div>
    );
  }

  return <Dashboard />;
}

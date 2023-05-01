import { signIn, useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import { GetServerSidePropsContext } from "next";

export default function Auth({ result }: any) {
  const { data: session, status } = useSession();
  console.log(result);
  if (!session) {
    return (
      <div>
        <button onClick={() => signIn("google")}>Zaloguj</button>
      </div>
    );
  }

  return <Dashboard />;
}

export async function getServerSideProps() {
  const url = `http://localhost:5001/api/login`;
  const res = await fetch(url);
  const result = await res.json();

  // Pass data to the page via props
  return { props: { result } };
}

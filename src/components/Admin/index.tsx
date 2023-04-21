import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { data } from "../../data/adminRouting";
import CircleStack from "../Icons/circleStack";

export default function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <div id="adminPanel" className="flex flex-col container">
      <p className="text-white">{session?.user?.email}</p>
      <ul className="flex justify-end gap-4">
        {data.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href} key={item.href} className="flex">
                <CircleStack />
                <p>{item.name}</p>
              </Link>
            </li>
          );
        })}
        <li>
          <button onClick={() => signOut()}>Wyloguj</button>
        </li>
      </ul>
    </div>
  );
}

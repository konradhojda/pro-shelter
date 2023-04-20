import { useSession } from "next-auth/react";
import Link from "next/link";
import { data } from "../../data/adminRouting";
import CircleStack from "../Icons/circleStack";

export default function Dashboard() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div className="admin flex flex-col bg-black min-h-screen">
      <p className="text-white">{session?.user?.email}</p>

      <div className="flex flex-col">
        {data.map((item) => {
          return (
            <Link href={item.href} key={item.href}>
              <CircleStack />
              <p className="text-white">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

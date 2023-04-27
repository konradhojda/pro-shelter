import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
import { HeaderLinkProps } from "../../../data/navData";
import { hasRequiredRank } from "../../../libs/hasRequiredRank";
import Logo from "../Logo/Logo";

interface Props {
  data: HeaderLinkProps[];
}

export default function Navigation({ data }: Props) {
  const { data: user, status } = useSession();
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex gap-3">
          {data.map((item) => {
            return (
              <Fragment key={item.href}>
                {hasRequiredRank(
                  item.requiredRank,
                  user ? "admin" : "user"
                ) && (
                  <li key={item.name}>
                    <Link href={item.href} className="text-black">
                      {item.name}
                    </Link>
                  </li>
                )}
              </Fragment>
            );
          })}
          {user && (
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

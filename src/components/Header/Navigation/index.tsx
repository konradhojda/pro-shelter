import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
import { HeaderLinkProps, Ranks } from "../../../data/navData";
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
        <Logo />
        <ul className="flex gap-3">
          {data.map((item) => {
            console.log(item.requiredRank, "ADMIN" === Ranks.ADMIN);
            return (
              <Fragment key="">
                {hasRequiredRank(item.requiredRank, data && "ADMIN") && (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                )}
              </Fragment>
            );
          })}
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

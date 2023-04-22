import Link from "next/link";
import { HeaderLinkProps } from "../../../data/navData";

interface Props {
  data: HeaderLinkProps[];
}
export default function Navigation({ data }: Props) {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <img
          src="/dog-silhouette-logo.png"
          alt="kitten"
          className="max-h-[50px]"
        />
        <ul className="flex gap-2">
          {data.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

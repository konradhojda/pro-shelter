import Link from "next/link";
import { data } from "../../data/navData";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        {data.map((item) => {
          return (
            <Link href={item.href} key={item.href}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

import Link from "next/link";
import * as S from "./NavigationItems.style";

interface Items {
  name: string;
  href: string;
}

const items: Items[] = [
  {
    name: "Strona Główna",
    href: "/",
  },
  {
    name: "O nas",
    href: "/o-nas",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
  {
    name: "Rejestracja",
    href: "/rejestracja",
  },
];

export const NavigationItems = () => {
  return (
      <S.Ul>
        {items.map((item) => (
            <S.Li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </S.Li>
        ))}
      </S.Ul>
  );
};

export default NavigationItems;

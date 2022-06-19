import { useRouter } from "next/router";
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
    href: "/about",
  },
  {
    name: "Kontakt",
    href: "/contact",
  },
  {
    name: "Rejestracja",
    href: "/register",
  },
];

export const NavigationItems = () => {
  const { asPath } = useRouter();
  return (
    <S.Ul>
      {items.map((item) => (
        <S.Li key={item.name} className={asPath === item.href ? "active" : ""}>
          <S.NavigationLink href={item.href}>{item.name}</S.NavigationLink>
        </S.Li>
      ))}
    </S.Ul>
  );
};

export default NavigationItems;

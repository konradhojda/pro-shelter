import Navigation from "./Navigation";
interface Props {
  isVisible?: boolean;
}

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Mission", href: "/mission" },
];

export const Header = ({ ...rest }: Props) => {
  return (
    <header className="fixed top-0 w-full z-10 bg-white h-[50px]">
      <Navigation />
    </header>
  );
};

export default Header;

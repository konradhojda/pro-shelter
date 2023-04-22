import { HeaderLinkProps } from "../../data/navData";
import Navigation from "./Navigation";
interface Props {
  isVisible?: boolean;
  data: HeaderLinkProps[];
}

export const Header = ({ data }: Props) => {
  console.log(data);
  return (
    <header className="fixed top-0 w-full z-10 bg-white h-[50px]">
      <Navigation data={data} />
    </header>
  );
};

export default Header;

import { HeaderLinkProps } from "../../data/navData";
import Navigation from "./Navigation";
interface Props {
  isVisible?: boolean;
  data: HeaderLinkProps[];
}

export const Header = ({ data }: Props) => {
  console.log(data);
  return (
    <header className="sticky top-0 w-full z-10 bg-white">
      <Navigation data={data} />
    </header>
  );
};

export default Header;

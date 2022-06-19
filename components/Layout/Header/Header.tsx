import Container from "../../Container/Container";
import Flex from "../../Flex/Flex";
import Logo from "../Logo/Logo";
import NavigationItems from "./Navigation/NavigationItems";

export const Header = () => {
    return (
        <header>
            <Container>
                <Flex justifyContent="space-between" alignItems="center">
                    <Logo/>
                    <NavigationItems/>
                </Flex>
            </Container>
        </header>
    );
};

export default Header;

import Link from "next/link";
import {Fragment} from "react";
import * as S from "./Logo.style";

export const Logo = () => (
    <Fragment>
        <Link href="/">
            <S.Img src="/logo.svg"/>
        </Link>
    </Fragment>
);

export default Logo;

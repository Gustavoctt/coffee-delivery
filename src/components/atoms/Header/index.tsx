import LogoCoffee from "../../../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import * as S from "./styles";
import Small from "../Typography/Small";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <S.ContainerHeader>
      <Link to={"/"}>
        <img src={LogoCoffee} alt="" />
      </Link>

      <S.HeaderButtons>
        <S.LocaleButton>
          <MapPin size={22} weight="fill" />
          <Small color="#4B2995">Orleans, SC</Small>
        </S.LocaleButton>
        <Link to={"/checkout"}>
          <S.ShoppingButton>
            <ShoppingCart size={22} weight="fill" />
          </S.ShoppingButton>
        </Link>
      </S.HeaderButtons>
    </S.ContainerHeader>
  );
}

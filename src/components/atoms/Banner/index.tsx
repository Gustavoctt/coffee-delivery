import * as S from "./styles";
import BannerImage from "../../../assets/bannerImage.png";
import TitleXL from "../Typography/TitleXL";
import Medium from "../Typography/Medium";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Banner() {
  return (
    <S.ContainerBanner>
      <S.ContentLeft>
        <TitleXL color="#272221">
          Encontre o café perfeito para qualquer hora do dia
        </TitleXL>
        <Medium color="#403937">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Medium>

        <S.ListItems>
          <S.Item color="#C47F17">
            <span>
              <ShoppingCart size={16} weight="fill" color="#FFF" />
            </span>
            <Medium color="#574F4D">Compra simples e segura</Medium>
          </S.Item>
          <S.Item color="#574F4D">
            <span>
              <Package size={16} weight="fill" color="#FFF" />
            </span>
            <Medium color="#574F4D">Entrega rápida e rastreada</Medium>
          </S.Item>
          <S.Item color="#DBAC2C">
            <span>
              <Timer size={16} weight="fill" color="#FFF" />
            </span>
            <Medium color="#574F4D">Embalagem mantém o café intacto</Medium>
          </S.Item>
          <S.Item color="#8047F8">
            <span>
              <Coffee size={16} weight="fill" color="#FFF" />
            </span>
            <Medium color="#574F4D">O café chega fresquinho até você</Medium>
          </S.Item>
        </S.ListItems>
      </S.ContentLeft>
      <S.ContentRight>
        <img src={BannerImage} alt="" />
      </S.ContentRight>
    </S.ContainerBanner>
  );
}

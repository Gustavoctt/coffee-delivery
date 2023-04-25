import TitleL from "../Typography/TitleL";

import CoffeeExpresso from "../../../assets/coffeeExpresso.png";

import * as S from "./styles";
import TitleS from "../Typography/TitleS";
import Small from "../Typography/Small";
import TitleM from "../Typography/TitleM";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "@phosphor-icons/react";

export function CoffeeList() {
  return (
    <S.CointainerCoffeeList>
      <S.Title>
        <TitleL color="#403937">Nossos cafés</TitleL>
      </S.Title>

      <S.ContentListCoffee>
        <S.CoffeeCard>
          <img src={CoffeeExpresso} />

          <S.CoffeeInfo>
            <S.Tag>Tradicional</S.Tag>
            <TitleS color="#403937">Café Expresso</TitleS>
            <Small color="#8D8686">
              O tradicional café feito com água quente e grãos moídos
            </Small>
            <S.CoffeeFooter>
              <S.Price>
                <Small color="#403937">R$</Small>
                <TitleM color="#403937">9,90</TitleM>
              </S.Price>
              <QuantityInput />
              <S.ShoppingButton>
                <ShoppingCart size={22} weight="fill" />
              </S.ShoppingButton>
            </S.CoffeeFooter>
          </S.CoffeeInfo>
        </S.CoffeeCard>
      </S.ContentListCoffee>
    </S.CointainerCoffeeList>
  );
}

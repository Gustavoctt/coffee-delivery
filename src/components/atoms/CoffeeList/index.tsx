import TitleL from "../Typography/TitleL";

import CoffeeExpresso from "../../../assets/coffeeExpresso.png";

import * as S from "./styles";
import TitleS from "../Typography/TitleS";
import Small from "../Typography/Small";
import TitleM from "../Typography/TitleM";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { coffeesList } from "../../../mocks/coffee";

export function CoffeeList() {
  const [coffees, setCoffees] = useState<any>([]);
  useEffect(() => {
    setCoffees(coffeesList);
  }, []);

  console.log(coffees);
  return (
    <S.CointainerCoffeeList>
      <S.Title>
        <TitleL color="#403937">Nossos cafés</TitleL>
      </S.Title>

      <S.ContentListCoffee>
        {coffees.map((coffee: any) => (
          <S.CoffeeCard key={coffee.id}>
            <img src={coffee.image} />
            <S.CoffeeInfo>
              <S.TagHeader>
                {coffee.tag.map((tag: string) => (
                  <S.Tag>{tag}</S.Tag>
                ))}
              </S.TagHeader>
              <TitleS color="#403937">{coffee.name}</TitleS>
              <Small color="#8D8686">{coffee.description}</Small>
              <S.CoffeeFooter>
                <S.Price>
                  <Small color="#403937">R$</Small>
                  <TitleM color="#403937">{coffee.price}</TitleM>
                </S.Price>
                <QuantityInput />
                <S.ShoppingButton>
                  <ShoppingCart size={22} weight="fill" />
                </S.ShoppingButton>
              </S.CoffeeFooter>
            </S.CoffeeInfo>
          </S.CoffeeCard>
        ))}
      </S.ContentListCoffee>
    </S.CointainerCoffeeList>
  );
}

import * as S from "./styles";
import TitleS from "../Typography/TitleS";
import Small from "../Typography/Small";
import TitleM from "../Typography/TitleM";
import TitleL from "../Typography/TitleL";
import { QuantityInput } from "../QuantityInput";
import { CoffeProps } from "../../../types/coffe";
import { coffeesList } from "../../../mocks/coffee";
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { CoffeCartContext } from "../../../context/CoffeCartContext";
import { CoffeeCard } from "../CoffeeCard";

export function CoffeeList() {
  const [coffees, setCoffees] = useState<CoffeProps[]>([]);

  useEffect(() => {
    setCoffees(coffeesList);
  }, []);

  return (
    <S.CointainerCoffeeList>
      <S.Title>
        <TitleL color="#403937">Nossos cafés</TitleL>
      </S.Title>

      <S.ContentListCoffee>
        {coffees.map((coffee) => (
          <CoffeeCard coffeeData={coffee} key={coffee.id} />
        ))}
      </S.ContentListCoffee>
    </S.CointainerCoffeeList>
  );
}

import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeProps } from "../../../types/coffe";
import { QuantityInput } from "../QuantityInput";
import Small from "../Typography/Small";
import TitleM from "../Typography/TitleM";
import TitleS from "../Typography/TitleS";
import * as S from "./styles";
import { useContext, useState } from "react";
import { CoffeCartContext } from "../../../context/CoffeCartContext";

interface CoffeeCardProps {
  coffeeData: CoffeProps;
}

export function CoffeeCard({ coffeeData }: CoffeeCardProps) {
  const { addCoffeesToCart } = useContext(CoffeCartContext);
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddCoffeeToCart(coffee: CoffeProps) {
    const addNewCoffee = { ...coffee, quantity };
    addCoffeesToCart(addNewCoffee);
  }
  return (
    <S.CoffeeCard>
      <img src={coffeeData.image} />
      <S.CoffeeInfo>
        <S.TagHeader>
          {coffeeData.tag.map((tag: string) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagHeader>
        <TitleS color="#403937">{coffeeData.name}</TitleS>
        <Small color="#8D8686">{coffeeData.description}</Small>
        <S.CoffeeFooter>
          <S.Price>
            <Small color="#403937">R$</Small>
            <TitleM color="#403937">{coffeeData.price}</TitleM>
          </S.Price>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <S.ShoppingButton onClick={() => handleAddCoffeeToCart(coffeeData)}>
            <ShoppingCart size={22} weight="fill" />
          </S.ShoppingButton>
        </S.CoffeeFooter>
      </S.CoffeeInfo>
    </S.CoffeeCard>
  );
}

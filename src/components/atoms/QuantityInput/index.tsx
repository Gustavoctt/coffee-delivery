import { Minus, Plus } from "@phosphor-icons/react";
import * as S from "./styles";
import { useState } from "react";

export function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  return (
    <S.Container>
      <S.IconAction onClick={handleDecrease} disabled={quantity <= 1}>
        <Minus size={16} weight="bold" />
      </S.IconAction>
      <input type="number" readOnly value={quantity} />
      <S.IconAction onClick={handleIncrease}>
        <Plus size={16} weight="bold" />
      </S.IconAction>
    </S.Container>
  );
}

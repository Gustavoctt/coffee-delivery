import { Minus, Plus } from "@phosphor-icons/react";
import * as S from "./styles";
import Medium from "../Typography/Medium";

interface QuantityInputProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function QuantityInput({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityInputProps) {
  return (
    <S.Container>
      <S.IconAction onClick={onDecrease} disabled={quantity <= 1} type="button">
        <Minus size={16} weight="bold" />
      </S.IconAction>
      <Medium color="#272221">{quantity}</Medium>
      <S.IconAction onClick={onIncrease} type="button">
        <Plus size={16} weight="bold" />
      </S.IconAction>
    </S.Container>
  );
}

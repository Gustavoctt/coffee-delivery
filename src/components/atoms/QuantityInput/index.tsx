import { Minus, Plus } from "@phosphor-icons/react";
import * as S from "./styles";

export function QuantityInput() {
  return (
    <S.Container>
      <S.IconAction>
        <Minus size={16} weight="bold" />
      </S.IconAction>
      <input type="number" readOnly value={1} />
      <S.IconAction>
        <Plus size={16} weight="bold" />
      </S.IconAction>
    </S.Container>
  );
}

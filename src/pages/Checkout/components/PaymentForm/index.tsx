import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import * as S from "./styles";

export function PaymentForm() {
  return (
    <S.ContentPayment>
      <S.ButtonPayment>
        <CreditCard size={16} color="#8047F8" />
        Cartão de crédito
      </S.ButtonPayment>
      <S.ButtonPayment>
        <Bank size={16} color="#8047F8" />
        Cartão de débito
      </S.ButtonPayment>
      <S.ButtonPayment>
        <Money size={16} color="#8047F8" />
        Dinheiro
      </S.ButtonPayment>
    </S.ContentPayment>
  );
}

import * as S from "./styles";
import { useState } from "react";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";

export const paymentMethods = {
  credit: {
    id: "credit",
    label: "Cartão de crédito",
    icon: <CreditCard size={16} color="#8047F8" />,
  },
  debit: {
    id: "debit",
    label: "Cartão de débito",
    icon: <Bank size={16} color="#8047F8" />,
  },
  money: {
    id: "money",
    label: "Dinheiro",
    icon: <Money size={16} color="#8047F8" />,
  },
};

export function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("");

  function handleChangePaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod);
  }

  return (
    <S.ContentPayment>
      {Object.entries(paymentMethods).map(([key, { label, icon, id }]) => (
        <div key={key}>
          <input type="radio" name="payment" id={id} value={label} />
          <S.ButtonPayment
            onClick={() => handleChangePaymentMethod(id)}
            selected={paymentMethod === id}
          >
            <label htmlFor={id}>
              {icon}
              {label}
            </label>
          </S.ButtonPayment>
        </div>
      ))}
    </S.ContentPayment>
  );
}

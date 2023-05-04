import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import { Header } from "../../components/atoms/Header";
import * as S from "./styles";
import Small from "../../components/atoms/Typography/Small";
import Medium from "../../components/atoms/Typography/Medium";
import TitleXS from "../../components/atoms/Typography/TitleXS";
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";

import { QuantityInput } from "../../components/atoms/QuantityInput";
import TitleL from "../../components/atoms/Typography/TitleL";
import { useContext } from "react";
import { CoffeCartContext } from "../../context/CoffeCartContext";
import { formatMoney } from "../../utils/formatPrice";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} color="#8047F8" />,
  },
  debit: {
    label: "Cartão de debito",
    icon: <Bank size={16} color="#8047F8" />,
  },
  money: {
    label: "Cartão de debito",
    icon: <Money size={16} color="#8047F8" />,
  },
};

export function Checkout() {
  const {
    coffeesCart,
    removeCoffeeToCart,
    decreaseCoffeeQuantity,
    increaseCoffeeQuantity,
    orderPrice,
  } = useContext(CoffeCartContext);

  const deliveryPrice = 3.5;
  const totalPrice = orderPrice + deliveryPrice;

  return (
    <>
      <Header />
      <S.ContainerCheckout>
        <S.ContentOrder>
          <TitleXS color="#403937">Complete seu pedido</TitleXS>
          <S.Box>
            <S.TitleBox>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <Medium color="#403937">Endereço de entrega</Medium>
                <Small color="#403937">
                  Informe o endereço onde deseja receber seu pedido
                </Small>
              </div>
            </S.TitleBox>
            <AddressForm />
          </S.Box>
          <S.Box>
            <S.TitleBox>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <Medium color="#403937">Pagamento</Medium>
                <Small color="#403937">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Small>
              </div>
            </S.TitleBox>
            <PaymentForm />
          </S.Box>
        </S.ContentOrder>
        <S.ContentCheckoutOrder>
          <TitleXS color="#403937">Cafés selecionados</TitleXS>
          <S.BoxCheckoutOrder>
            {coffeesCart.length > 0 ? (
              <>
                {coffeesCart.map((coffee) => (
                  <>
                    <S.ItemOrder>
                      <S.ItemData>
                        <img src={coffee.image} alt="" />

                        <S.ItemActions>
                          <Medium color="#403937">{coffee.name}</Medium>
                          <footer>
                            <QuantityInput
                              quantity={coffee.quantity}
                              onDecrease={() =>
                                decreaseCoffeeQuantity(coffee.id)
                              }
                              onIncrease={() =>
                                increaseCoffeeQuantity(coffee.id)
                              }
                            />
                            <S.ButtonOrder
                              onClick={() => removeCoffeeToCart(coffee.id)}
                            >
                              <Trash size={16} color="#8047F8" />
                              <Small color="#403937">Remover</Small>
                            </S.ButtonOrder>
                          </footer>
                        </S.ItemActions>
                      </S.ItemData>
                      <S.ItemPrice>
                        <Medium color="#403937">{`R$ ${formatMoney(
                          coffee.price
                        )}`}</Medium>
                      </S.ItemPrice>
                    </S.ItemOrder>
                    <S.SeparatorLine />
                  </>
                ))}
                <S.CheckoutAmount>
                  <div>
                    <Small color="#403937">Total de itens</Small>
                    <Medium color="#403937">{`R$ ${formatMoney(
                      orderPrice
                    )}`}</Medium>
                  </div>
                  <div>
                    <Small color="#403937">Entrega</Small>
                    <Medium color="#403937">{`R$ ${formatMoney(
                      deliveryPrice
                    )}`}</Medium>
                  </div>
                  <div>
                    <TitleL color="#403937">Total</TitleL>
                    <TitleL color="#403937">{`R$ ${formatMoney(
                      totalPrice
                    )}`}</TitleL>
                  </div>
                </S.CheckoutAmount>

                <S.ButtonConfirm>
                  <Medium color="#ffffff">Confirmar pedido</Medium>
                </S.ButtonConfirm>
              </>
            ) : (
              <Medium color="#403937">Nenhum item selecionado</Medium>
            )}
          </S.BoxCheckoutOrder>
        </S.ContentCheckoutOrder>
      </S.ContainerCheckout>
    </>
  );
}

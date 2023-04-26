import { CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react";
import { Header } from "../../components/atoms/Header";
import * as S from "./styles";
import Small from "../../components/atoms/Typography/Small";
import Medium from "../../components/atoms/Typography/Medium";
import TitleXS from "../../components/atoms/Typography/TitleXS";
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";

import coffe from "../../assets/coffeeArabe.png";
import { QuantityInput } from "../../components/atoms/QuantityInput";
import TitleL from "../../components/atoms/Typography/TitleL";

export function Checkout() {
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
            <S.ItemOrder>
              <S.ItemData>
                <img src={coffe} alt="" />

                <S.ItemActions>
                  <Medium color="#403937">Expresso</Medium>
                  <footer>
                    <QuantityInput />
                    <S.ButtonOrder>
                      <Trash size={16} color="#8047F8" />
                      <Small color="#403937">Remover</Small>
                    </S.ButtonOrder>
                  </footer>
                </S.ItemActions>
              </S.ItemData>
              <S.ItemPrice>
                <Medium color="#403937"> R$ 9,90</Medium>
              </S.ItemPrice>
            </S.ItemOrder>
            <S.SeparatorLine />
            <S.ItemOrder>
              <S.ItemData>
                <img src={coffe} alt="" />

                <S.ItemActions>
                  <Medium color="#403937">Expresso</Medium>
                  <footer>
                    <QuantityInput />
                    <S.ButtonOrder>
                      <Trash size={16} color="#8047F8" />
                      <Small color="#403937">Remover</Small>
                    </S.ButtonOrder>
                  </footer>
                </S.ItemActions>
              </S.ItemData>
              <S.ItemPrice>
                <Medium color="#403937"> R$ 9,90</Medium>
              </S.ItemPrice>
            </S.ItemOrder>
            <S.SeparatorLine />
            <S.CheckoutAmount>
              <div>
                <Small color="#403937">Total de itens</Small>
                <Medium color="#403937">R$ 29,70</Medium>
              </div>
              <div>
                <Small color="#403937">Entrega</Small>
                <Medium color="#403937">R$ 3,50</Medium>
              </div>
              <div>
                <TitleL color="#403937">Total</TitleL>
                <TitleL color="#403937">R$ 30,00</TitleL>
              </div>
            </S.CheckoutAmount>

            <S.ButtonConfirm>
              <Medium color="#ffffff">Confirmar pedido</Medium>
            </S.ButtonConfirm>
          </S.BoxCheckoutOrder>
        </S.ContentCheckoutOrder>
      </S.ContainerCheckout>
    </>
  );
}

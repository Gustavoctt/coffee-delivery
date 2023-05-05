import * as zod from "zod";
import * as S from "./styles";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatMoney } from "../../utils/formatPrice";
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";
import { Header } from "../../components/atoms/Header";
import Small from "../../components/atoms/Typography/Small";
import TitleL from "../../components/atoms/Typography/TitleL";
import Medium from "../../components/atoms/Typography/Medium";
import TitleXS from "../../components/atoms/Typography/TitleXS";
import { QuantityInput } from "../../components/atoms/QuantityInput";
import { CoffeCartContext } from "../../context/CoffeCartContext";
import { CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const addressValidationFormSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethod: zod.string(),
});

export type addressFormData = zod.infer<typeof addressValidationFormSchema>;

export function Checkout() {
  const addressValidationForm = useForm<addressFormData>({
    resolver: zodResolver(addressValidationFormSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = addressValidationForm;

  const navigate = useNavigate();

  function handleFinishForm(data: addressFormData) {
    navigate("/success", {
      state: data,
    });

    console.log({
      userData: data,
      coffeeCart: coffeesCart,
      totalPrice,
    });
  }

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
    <FormProvider {...addressValidationForm}>
      <Header />
      <S.ContainerCheckout onSubmit={handleSubmit(handleFinishForm)}>
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
                  <div key={coffee.id}>
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
                  </div>
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

                <S.ButtonConfirm type="submit">
                  <Medium color="#ffffff">Confirmar pedido</Medium>
                </S.ButtonConfirm>
              </>
            ) : (
              <Medium color="#403937">Nenhum item selecionado</Medium>
            )}
          </S.BoxCheckoutOrder>
        </S.ContentCheckoutOrder>
      </S.ContainerCheckout>
    </FormProvider>
  );
}

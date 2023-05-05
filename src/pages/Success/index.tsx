import * as S from "./styles";
import { Header } from "../../components/atoms/Header";
import TitleL from "../../components/atoms/Typography/TitleL";
import Medium from "../../components/atoms/Typography/Medium";
import SuccessImage from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Small from "../../components/atoms/Typography/Small";

export function Success() {
  return (
    <>
      <Header />
      <S.SuccessContainer>
        <S.SuccessLeft>
          <TitleL color="#C47F17">Uhu! Pedido confirmado</TitleL>
          <Medium color="#403937">
            Agora é só aguardar que logo o café chegará até você
          </Medium>

          <S.BoxSuccess>
            <div>
              <span>
                <MapPin color="#FAFAFA" />
              </span>
              <Small color="#403937">
                Entrega em Rua João Daniel Martinelli, 102 - Farrapos - Porto
                Alegre, RS
              </Small>
            </div>
            <div>
              <span>
                <Timer color="#FAFAFA" />
              </span>
              <Small color="#403937">Previsão de entrega 20 min - 30 min</Small>
            </div>
            <div>
              <span>
                <CurrencyDollar color="#FAFAFA" />
              </span>
              <Small color="#403937">
                Pagamento na entrega Cartão de Crédito
              </Small>
            </div>
          </S.BoxSuccess>
        </S.SuccessLeft>

        <S.SuccessRight>
          <img src={SuccessImage} alt="" />
        </S.SuccessRight>
      </S.SuccessContainer>
    </>
  );
}

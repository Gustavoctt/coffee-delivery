import * as S from "./styles";

export function AddressForm() {
  return (
    <S.ContentForm>
      <div className="row">
        <S.Input placeholder="CEP" className="cep" />
      </div>
      <div className="row">
        <S.Input placeholder="Rua" />
      </div>
      <div className="row">
        <S.Input placeholder="Numero" className="number" type="number" />
        <S.Input placeholder="Complemento" />
      </div>
      <div className="row">
        <S.Input placeholder="Bairro" className="neighborhood" />
        <S.Input placeholder="Cidade" />
        <S.Input placeholder="UF" className="uf" />
      </div>
    </S.ContentForm>
  );
}

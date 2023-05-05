import { useFormContext } from "react-hook-form";
import * as S from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as ErrorsType;

  return (
    <S.ContentForm>
      <div className="row">
        <S.Input placeholder="CEP" className="cep" {...register("cep")} />
      </div>
      <div className="row">
        <S.Input placeholder="Rua" {...register("street")} />
      </div>
      <div className="row">
        <S.Input
          placeholder="Numero"
          className="number"
          type="number"
          {...register("number")}
        />
        <S.Input placeholder="Complemento" {...register("complement")} />
      </div>
      <div className="row">
        <S.Input
          placeholder="Bairro"
          className="neighborhood"
          {...register("district")}
        />
        <S.Input placeholder="Cidade" {...register("city")} />
        <S.Input placeholder="UF" className="uf" {...register("uf")} />
      </div>
    </S.ContentForm>
  );
}

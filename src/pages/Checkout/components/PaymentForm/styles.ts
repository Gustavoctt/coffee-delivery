import styled, { css } from "styled-components";

export const ContentPayment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-top: 2rem;

  input {
    display: none;
  }
`;

type IPaymentSelectedMethod = {
  selected: boolean;
};

export const ButtonPayment = styled.button<IPaymentSelectedMethod>`
  ${({ selected }) => css`
    display: block;
    background: ${selected ? "#EBE5F9" : "#e6e5e5"};
    padding: 1rem;
    border: ${selected ? "1px solid #8047F8" : "1px solid transparent"};
    border-radius: 6px;
    color: #574f4d;
    text-transform: uppercase;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;

    label {
      display: flex;
      gap: 0.75rem;
      cursor: pointer;
    }

    &:hover {
      background: ${!selected && "#d7d5d5"};
    }
  `}
`;

import styled from "styled-components";

export const ContainerCheckout = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f2f2;
  padding: 2.5rem;
  border-radius: 8px;
`;

export const TitleBox = styled.header`
  display: flex;
  gap: 1rem;
`;

export const ContentCheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxCheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f2f2;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
`;

export const ItemOrder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemData = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  footer {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ButtonOrder = styled.button`
  display: flex;
  background: #e6e5e5;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  color: #574f4d;
  text-transform: uppercase;
  gap: 4px;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background: #d7d5d5;
  }
`;

export const SeparatorLine = styled.div`
  border-top: 1px solid #e6e5e5;
  margin: 1.5rem 0;
`;

export const ItemPrice = styled.div``;

export const CheckoutAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonConfirm = styled.button`
  display: flex;
  flex-direction: row;
  background: #dbac2c;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: #c47f17;
  }
`;

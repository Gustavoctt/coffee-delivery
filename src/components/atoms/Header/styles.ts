import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocaleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  gap: 4px;
  background-color: #ebe5f9;
  color: #4b2995;
  border: none;
  border-radius: 6px;
`;

export const ShoppingButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  background: #f1e9c9;
  color: #c47f17;
`;

export const CartQuantitySpan = styled.span`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  top: calc(-1.25rem / 2.25);
  right: calc(-1.25rem / 2.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  outline: 3.5px solid #fafafa;
  background: #f1e9c9;
`;

import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
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

  background: #f1e9c9;
  color: #c47f17;
`;

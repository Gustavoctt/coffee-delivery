import styled from "styled-components";

export const ContentPayment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const ButtonPayment = styled.button`
  display: flex;
  background: #e6e5e5;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  color: #574f4d;
  text-transform: uppercase;
  gap: 0.75rem;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background: #d7d5d5;
  }
`;

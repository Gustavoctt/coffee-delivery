import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #e6e5e5;
  padding: 12px 8px;
  border-radius: 6px;
  gap: 2px;

  p {
    padding: 0 0.5rem;
  }
`;

export const IconAction = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: #8047f8;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

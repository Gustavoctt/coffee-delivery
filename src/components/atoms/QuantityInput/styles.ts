import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #e6e5e5;
  padding: 12px 8px;
  border-radius: 6px;
  height: 2.375rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: #272221;

    &:focus {
      outline: none;
    }
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

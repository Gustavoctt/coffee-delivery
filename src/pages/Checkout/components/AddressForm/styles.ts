import styled from "styled-components";

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    > input {
      flex: 1;
    }

    + .row {
      margin-top: 1rem;
    }

    .cep,
    .number,
    .neighborhood {
      max-width: 12.5rem;
    }

    .uf {
      max-width: 6rem;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  padding: 0.75rem;
  background: #ededed;
  border: none;
  border-radius: 4px;

  &:focus {
    outline-style: solid;
    outline-color: #c47f17;
  }
`;

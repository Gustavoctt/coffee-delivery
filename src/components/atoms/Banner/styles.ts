import styled from "styled-components";

export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.75rem 1rem;
  gap: 3.5rem;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 3rem;
`;

type ItemProps = {
  color: string;
};

export const Item = styled.div<ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  span {
    padding: 8px 10px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
  }
`;

export const ContentRight = styled.div`
  img {
    max-width: 476px;
  }
`;

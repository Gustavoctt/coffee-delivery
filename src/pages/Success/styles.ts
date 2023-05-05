import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  margin-top: 6rem;
  gap: 4rem;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const SuccessLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxSuccess = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border: 2px solid transparent;
  border-radius: 6px 36px 6px 36px;

  background: linear-gradient(to right, #fafafa, #fafafa),
    linear-gradient(to right, #dbac2c, #8047f8);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  gap: 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-color: #8047f8;
    }
  }
`;

export const SuccessRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 492px;
`;

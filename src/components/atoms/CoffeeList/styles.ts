import styled from "styled-components";

export const CointainerCoffeeList = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;

export const Title = styled.div``;

export const TagHeader = styled.header`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.p`
  font-size: 10px;
  color: #c47f17;
  text-transform: uppercase;
  line-height: 130%;
  font-family: "Roboto", sans-serif;
  background: #f1e9c9;
  padding: 4px 8px;
  border-radius: 8px;
`;

export const ContentListCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 2rem;
  margin-top: 3.5rem;
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f2f2;
  align-items: center;
  border-radius: 6px 36px 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 2rem;
  gap: 0.75rem;
  padding: 0 20px;
`;

export const CoffeeFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ShoppingButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;

  background: #4b2995;
  color: #fff;
`;

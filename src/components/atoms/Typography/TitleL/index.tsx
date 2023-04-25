import styled from "styled-components";

type LargeProps = {
  color: string;
};

const TitleL = styled.h2<LargeProps>`
  font-size: 32px;
  line-height: 130%;
  font-family: "Baloo 2", cursive;
  color: ${({ color }) => color};
`;

export default TitleL;

import styled from "styled-components";

type LargeProps = {
  color: string;
};

const TitleXS = styled.h5<LargeProps>`
  font-size: 18px;
  line-height: 130%;
  font-family: "Baloo 2", cursive;
  color: ${({ color }) => color};
`;

export default TitleXS;

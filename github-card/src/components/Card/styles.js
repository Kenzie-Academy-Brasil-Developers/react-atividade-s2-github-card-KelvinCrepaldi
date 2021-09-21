import styled from "styled-components";

export const CardContainer = styled.div`
  width: 500px;

  background-color: white;

  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  cursor: pointer;

  box-shadow: 0px 0px 10px black;
  :hover {
    box-shadow: 0px 0px 20px 0px #ab61fa inset, 0px 0px 4px 2px #ab61fa;
  }
`;

export const DivEsq = styled.div`
  width: 20%;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const DivDir = styled.div`
  width: 60%;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
    color: #3f078f;
  }
`;

import styled from "styled-components";

export const Bar = styled.div`
  input {
    width: 300px;
    height: 30px;
    border: 1px solid ${(props) => (props.barColor ? "red" : "#5540d6")};
    padding: 0px 0px 0px 10px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 0px 0px 2px ${(props) => (props.barColor ? "red" : "none")};
  }

  input:focus {
    outline: none;
    border: 1px solid ${(props) => (props.barColor ? "red" : "#ab61fa")};
    box-shadow: 0px 0px 2px ${(props) => (props.barColor ? "red" : "#ab61fa")};
  }

  button {
    width: 150px;
    height: 30px;
    border: none;
    padding: 0;
    background-color: #ab61fa;
    color: white;
    text-shadow: 1px 1px 5px black;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #a494eb;
  }
`;

export const UndefinedRepo = styled.p`
  color: red;
  text-shadow: 1px 1px 1px black;
  font-size: 15px;
`;

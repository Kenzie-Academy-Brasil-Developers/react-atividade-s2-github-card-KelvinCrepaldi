import { Bar, UndefinedRepo } from "./styles";
import { useState, useEffect } from "react";

const SearchBar = ({ setRepoName, repoVerify, setRepoVerify }) => {
  const [searchValue, setSearchValue] = useState("");
  const [barColor, setBarColor] = useState(true);

  const handlerSearch = () => {
    if (searchValue === "") {
      setRepoVerify(true);
    }
    setRepoName(searchValue);
  };

  useEffect(() => {
    color();
  }, [repoVerify]);

  const color = () => {
    setBarColor(!barColor);
  };

  return (
    <Bar barColor={barColor}>
      <input
        type="text"
        placeholder="Escreva o repositório"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <button onClick={() => handlerSearch()}>Buscar</button>
      {repoVerify && <UndefinedRepo>Repositorio não encontrado.</UndefinedRepo>}
    </Bar>
  );
};

export default SearchBar;

import GlobalStyle from "./globalStyles";
import { ContainerMain } from "./styles";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Repositories from "./components/Repositories";

function App() {
  const [repo, setRepo] = useState([]);
  const [repoName, setRepoName] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [repoVerify, setRepoVerify] = useState(false);

  useEffect(() => {
    if (repoName) {
      fetch(`https://api.github.com/repos/${repoName}`)
        .then((response) => response.json())
        .then((data) => setRepo(data));
    }
  }, [repoName]);

  useEffect(() => {
    if (repo.message === "Not Found") {
      setRepoVerify(true);
    } else {
      setRepoVerify(false);
    }
  }, [repo]);

  useEffect(() => {
    if (repo.id && repoVerify === false) {
      setRepoList([repo, ...repoList]);
    }
  }, [repo, repoVerify]);

  return (
    <div className="App">
      <ContainerMain>
        <GlobalStyle />
        <SearchBar
          setRepoName={setRepoName}
          repoName={repoName}
          repoVerify={repoVerify}
          setRepoVerify={setRepoVerify}
        />
        <Repositories repoList={repoList} />
      </ContainerMain>
    </div>
  );
}

export default App;

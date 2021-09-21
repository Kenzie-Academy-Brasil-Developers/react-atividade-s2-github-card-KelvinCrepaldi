import { Container } from "./styles";
import Card from "../Card";

const Repositories = ({ repoList }) => {
  return (
    <Container>
      {repoList.map((e) => (
        <Card repo={e} key={e.id} />
      ))}
    </Container>
  );
};

export default Repositories;

import { CardContainer, DivEsq, DivDir } from "./styles";

const Card = ({ repo }) => {
  return (
    <CardContainer onClick={() => window.open(`${repo.svn_url}`, "_blank")}>
      <DivEsq>
        <img src={`${repo.owner.avatar_url}`} />
      </DivEsq>
      <DivDir>
        <h1>{repo.full_name}</h1>
        <p>{repo.description}</p>
      </DivDir>
    </CardContainer>
  );
};

export default Card;

// React Router
import { Link } from "react-router-dom";

// Styles
import { Container, Content, Info } from "./styles";

// NotFound
export default function NotFound() {
  return (
    <Container>
      <Content>
        <Info>
          <p>A página que você está tentando acessar não existe.</p>
          <Link to="/">
            <button>voltar</button>
          </Link>
        </Info>
      </Content>
    </Container>
  );
}

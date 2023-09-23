import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Info>
          <p>A página que você está tentando acessar não existe.</p>
          <Link to="/">
            <button>
              <ArrowLeft size={16} id="arrowLeft" />
              voltar
            </button>
          </Link>
        </Styles.Info>
      </Styles.Content>
    </Styles.Container>
  );
}

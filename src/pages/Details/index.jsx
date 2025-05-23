import { Container, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header} from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details(){
  return(
    <Container>
      <Header/>

        <Section title="Links úteis">
        <Links>
          <li><a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a></li>
          <li><a href="https://github.com/devLarissaRodrigues" target="_blank">Github</a></li>
        </Links>
        </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>

      <Button title="Voltar"/>
    </Container>
  )
}


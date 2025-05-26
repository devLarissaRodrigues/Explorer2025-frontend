import { Container, Links, Content} from "./styles";
import { Button } from "../../components/Button";
import { Header} from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
      <ButtonText title="Excluir a nota" />

      <h1>Introdução ao React</h1>

      <p>React é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook (agora Meta), 
        amplamente utilizada para a construção de interfaces de usuário (UIs) interativas e de alto desempenho.
         Sua principal força reside na abordagem baseada em componentes, que permite dividir a UI em blocos independentes e reutilizáveis, facilitando o desenvolvimento e a manutenção. A eficiência do React é impulsionada pelo Virtual DOM, que otimiza as atualizações na tela, resultando em aplicações mais rápidas e fluidas, tornando-o uma escolha popular para o desenvolvimento web moderno.</p>

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
         </Content>
      </main>
    </Container>
  )
}


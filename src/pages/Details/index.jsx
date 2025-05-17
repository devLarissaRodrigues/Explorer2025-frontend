import { Container } from "./styles";
import { Button } from "../../components/Button";

export function Details(){
  return(
    <Container>
      <h1>Hello World</h1>
      <span>Larissa Rodrigues</span>
      <Button title="Login" loading={true}/>
      <Button title="Entrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}


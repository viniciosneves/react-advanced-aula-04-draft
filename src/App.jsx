import Container from './components/Container'
import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Fieldset from './components/Fieldset'
import Label from './components/Label'
import Input from './components/Input'
import ErrorText from './components/ErrorText'
import Button from './components/Button'
import Form from './components/Form'

function App() {

  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>
          Cadastro
        </Heading>
        <Form>
          <Fieldset>
            <Label>
              Nome
            </Label>
            <Input />
            <ErrorText>
              Nome é obrigatório
            </ErrorText>
          </Fieldset>
          <Fieldset>
            <Label>
              E-mail
            </Label>
            <Input />
          </Fieldset>
          <Fieldset>
            <Label>
              Senha
            </Label>
            <Input />
          </Fieldset>
          <Fieldset>
            <Label>
              Confirme sua senha
            </Label>
            <Input />
          </Fieldset>
          <Button>
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default App

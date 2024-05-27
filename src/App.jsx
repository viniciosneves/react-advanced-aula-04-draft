import Container from './components/Container'
import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Fieldset from './components/Fieldset'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'
import Form from './components/Form'
import { Formik } from 'formik'

function App() {

  const createUser = (values) => {
    console.log(values)
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>
          Cadastro
        </Heading>
        <Formik
          onSubmit={createUser}
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
        >
          <Form>
            <Fieldset>
              <Label>
                Nome
              </Label>
              <Input name="name"/>
            </Fieldset>
            <Fieldset>
              <Label>
                E-mail
              </Label>
              <Input name="email" type="email" />
            </Fieldset>
            <Fieldset>
              <Label>
                Senha
              </Label>
              <Input name="password" type="password"/>
            </Fieldset>
            <Fieldset>
              <Label>
                Confirme sua senha
              </Label>
              <Input name="confirmPassword" type="password"/>
            </Fieldset>
            <Button type='submit'>
              Enviar
            </Button>
          </Form>
        </Formik>
      </Container>
    </>
  )
}

export default App

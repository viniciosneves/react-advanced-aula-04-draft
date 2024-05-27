import Container from './components/Container'
import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Fieldset from './components/Fieldset'
import Label from './components/Label'
import Input from './components/Input'
import ErrorText from './components/ErrorText'
import Button from './components/Button'
import Form from './components/Form'
import { ErrorMessage, Formik } from 'formik'

const formInitialValue = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function App() {

  const onFormSubmit = (values) => {
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
          initialValues={formInitialValue}
          onSubmit={onFormSubmit}
        >
          <Form>
            <Fieldset>
              <Label>
                Nome
              </Label>
              <Input name="name" />
              <ErrorMessage name='name' component={ErrorText}>
                Nome é obrigatório
              </ErrorMessage>
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
              <Input name="password" type="password" />
            </Fieldset>
            <Fieldset>
              <Label>
                Confirme sua senha
              </Label>
              <Input name="confirmPassword" type="password" />
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

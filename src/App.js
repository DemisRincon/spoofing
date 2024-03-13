import React from 'react'
import { Advisement, Button, Container, Form, FormContainer, Image, Input, InputTitle, Link, Title, TitleAdvisement, Titleform } from './styled'
const App = () => {
  return (
    <Container>
      <Form>
        <Title>Bienvenido a</Title>
        <Image src='./download.png' />
        <FormContainer>
          <Titleform>
            Acceder a SesWeb.
          </Titleform>
          <InputTitle>
            Usuario:
          </InputTitle>
          <Input />
          <InputTitle>
            Contraseña:
          </InputTitle>
          <Input />
          <Button>Entrar</Button>
          <Link>¿Has olvidado tu contraseña?</Link>
          <Advisement>
            <TitleAdvisement>
              Acceder a SesWeb.
            </TitleAdvisement>

            Se les comunica que por la madrugada de este Domingo 17 de Marzo del 2024 de 04:00 a 06:00 Hrs (Tiempo de la Ciudad de México), se suspenderá temporalmente el acceso a la plataforma SesWeb debido a un mantenimiento programado en la infraestructura de servidores.

          </Advisement>
        </FormContainer>
      </Form>
    </Container>
  )
}

export default App
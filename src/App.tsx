import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import styled from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { Content } from './components/styles/Content.styled';
import { Label } from './components/styles/Label.styled';
import { FieldStyle } from './components/styles/FieldStyle.style';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  return (
    <div>
      <Title>Signup</Title>
      <Container>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <Content>
              <Label>
                <label htmlFor='firstName'>First Name</label>
              </Label>
              <FieldStyle>
                <Field id='firstName' name='firstName' placeholder='John' />
              </FieldStyle>
            </Content>
            <Content>
              <Label>
                <label htmlFor='lastName'>Last Name</label>
              </Label>
              <FieldStyle>
                <Field id='lastName' name='lastName' placeholder='Doe' />
              </FieldStyle>
            </Content>
            <Content>
              <Label>
                <label htmlFor='email'>Email</label>
              </Label>
              <FieldStyle>
                <Field
                  id='email'
                  name='email'
                  placeholder='john@acme.com'
                  type='email'
                />
              </FieldStyle>
            </Content>

            <button type='submit'>Submit</button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}

export default App;

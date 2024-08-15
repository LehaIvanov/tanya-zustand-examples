import { useEffect } from "react";
import { Container } from "./Container";
import { DisplayField } from "./DisplayField";
import { TextField } from "./TextField";
import { useStore } from "./hooks/useStore";

const Form = () => (
  <Container>
    <h1>Form</h1>
    <TextField name="first" />
    <TextField name="last" />
  </Container>
);

const Display = () => (
  <Container>
    <h1>Display</h1>
    <DisplayField name="first" />
    <DisplayField name="last" />
  </Container>
);

const Content = () => (
  <Container>
    <h1>Content</h1>
    <Form />
    <Display />
  </Container>
);

export const App = () => {
  useEffect(() => {
    const unsubscribe = useStore.subscribe(data => {
      console.log(`save data first = ${data.first}, last = ${data.last}`);
    });

    return unsubscribe;
  }, []);

  return (
    <Container>
      <h1>App</h1>
      <Content />
    </Container>
  );
};

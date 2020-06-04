import styled from 'styled-components';
import { render } from '@testing-library/react';

const Button = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;

const Container = styled.div`
    text-align: center;
    `
//Método Render

render(
    <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
    </Container>
    )

export default Button;
import styled from 'styled-components';
import { Div } from '../components/styled/shared';
import { Nav } from '../components/route/Nav';

const Title = styled.h1`
  color: green;
`;

const Index = () => (
  <Div>
    <Nav />
    <Title>Hello World, Next.js</Title>
  </Div>
);

export default Index;

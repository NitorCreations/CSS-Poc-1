import styled from 'styled-components';

export const Content = styled.div`
  flex-basis: auto; //This is an item inside a container
  display: flex; //But this is also a container for two items (label and input)
  justify-content: space-between; //But this is also a container for two items (label and input)
  background-color: #37718e;
  padding: 2rem;
  margin: 4rem 0;
  border-radius: 0.2rem;
`;

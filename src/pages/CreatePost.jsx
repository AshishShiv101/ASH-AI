import React from 'react'
import styled from 'styled-components'
import GeneratorImageForm from '../components/GeneratorImageForm';

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Wrapper = styled.div`
  flex:1;
  height: fit-content;
  max-width: 1400px;
  padding: 32px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const CreatePost = () => {
  return (
    <Container>
    <Wrapper>
      <GeneratorImageForm/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost

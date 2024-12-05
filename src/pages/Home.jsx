import React from 'react'
import styled from "styled-components"
import SearchBar from '../components/SearchBar';
const Container = styled.div`
 height: 100%;
 overflow-y: scroll;
 background: ${({theme}) => theme.bg};
 padding: 30px 30px;
 padding-bottom: 50px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 20px;
 @media (min-width: 768px) {
    padding: 6px 10px;
 }
`;

const HeadLine = styled.div`
    font-size: 34px;
    font-weight: 500;
    color: ${({theme}) => theme.text_primary};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 70px;

    @media (min-width: 600px) {
        font-size: 22px;
    }
`;

const Span = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};

`;

const Home = () => {
  return (
    <Container>
      <HeadLine>Explore popular posts in the community!</HeadLine>
      <Span>Generated with AI</Span>
      <SearchBar/>
    </Container>
  )
}

export default Home

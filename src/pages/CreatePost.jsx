import React, { useState } from 'react';
import styled from 'styled-components';
import GeneratorImageForm from '../components/GeneratorImageForm';
import GenerateImageCard from '../components/GenerateImageCard.jsx';

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px 50px;
  display: flex;
  justify-content: center;
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
  width: 100%;
  height: fit-content;
  gap: 8%;
  max-width: 1400px;
  padding: 32px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
 
const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  return (
    <Container>
      <Wrapper>
        <GeneratorImageForm
          post={post}
          setPost={setPost}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GenerateImageCard src={post.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;

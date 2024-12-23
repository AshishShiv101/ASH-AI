import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './button.js';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import TextInput from '../components/TextInput';
import { CreatePost,GenerateAIImage } from '../api/index.js';


const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px 15px;
    gap: 12%;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const GeneratorImageForm = ({
  post,
  setPost,
  setGenerateImageLoading,
  generateImageLoading,
  createPostLoading,
  setCreatePostLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    try {
      const res = await GenerateAIImage({ prompt: post.prompt });
      setPost({ ...post, photo: `${res?.photo}` });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setGenerateImageLoading(false);
    }
  };

  const createPostFun = async () => {
    setCreatePostLoading(true);
    await CreatePost(post)
      .then((res) => {
        setCreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
      });
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image Form</Title>
        <Desc>Write your prompt according to the image you want</Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name..."
          name="author"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image"
          name="imagePrompt"
          rows="8"
          textArea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
      </Body>
      <Actions>
        <Button
          text="Generate Image"
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          disabled={!post.prompt}
          onClick={generateImageFun}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          disabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => createPostFun()}
        />
      </Actions>
    </Form>
  );
};

export default GeneratorImageForm;

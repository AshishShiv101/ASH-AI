import React from 'react';
import styled from 'styled-components';
import Button from './button'
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import TextInput from '../components/TextInput';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GeneratorImageForm = () => {
    return (
        <Form>
            <Top>
                <Title>Generator Image Form</Title>
                <Desc>Write your prompt according to the image you want</Desc>
            </Top>
            <Body>
                <TextInput
                    label="Author"
                    placeholder="Enter your name.."
                    name="author"
                />
                <TextInput
                    label="Image Prompt"
                    placeholder="Write a detailed prompt about the image"
                    name="imagePrompt"
                    rows={8}
                    textArea
                />
            </Body>
            <Actions>
                <Button
                    text="Generate Image"
                    flex
                    leftIcon={<AutoAwesome />}
                />
                <Button
                    text="Post Image"
                    flex
                    type="secondary"
                    leftIcon={<CreateRounded />}
                />
            </Actions>
        </Form>
    );
};

export default GeneratorImageForm;

import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex-direction: column;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow}80; /* Assuming theme.arrow is a valid color */
  border-radius: 20px;
  margin-top: 60px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const GenerateImageCard = ({ src, loading }) => {
    
    return (
        <Container>
            {loading ? (
                <>
                    <CircularProgress style={{ color: "inherit", width: "24px", height: "24px" }} />
                    Generating Your Image . . .
                </>
            ) : (
                <>
                    {src ? <Image src={src} alt="Generated" /> : <>Write a prompt to generate an Image</>}
                </>
            )}
        </Container>
    );
};

export default GenerateImageCard;

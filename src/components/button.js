import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const StyledButton = styled.button.attrs(({ type }) => ({
    type: type === 'secondary' ? 'button' : 'submit',
}))`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;

  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  background: ${({ type, theme }) =>
        type === 'secondary' ? theme.primary : theme.secondary};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

const Button = ({
    text,
    isLoading,
    disabled,
    leftIcon,
    rightIcon,
    type = 'primary',
    onClick,
}) => (
    <StyledButton
        onClick={() => !disabled && !isLoading && onClick?.()}
        disabled={disabled}
        type={type}
    >
        {isLoading && (
            <CircularProgress
                style={{ width: '18px', height: '18px', color: 'inherit' }}
            />
        )}
        {leftIcon}
        {text}
        {isLoading && <> . . .</>}
        {rightIcon}
    </StyledButton>
);

export default Button;

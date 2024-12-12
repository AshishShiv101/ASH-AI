import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './components/button';
import { AddRounded, ExploreRounded } from '@mui/icons-material';

const Container = styled.div`
  position: fixed; /* Fix the navbar at the top */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it appears above other elements */
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/");

  return (
    <Container>
      {/* Navbar Title */}
      <div>ASH-AI</div>

      {/* Conditional Button Rendering */}
      {path[1] === 'posts' ? (
        <Button
          onClick={() => navigate("/")}
          text="Explore Posts"
          leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
          type="secondary"
        />
      ) : (
        <Button
          onClick={() => navigate("/posts")}
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
        />
      )}
    </Container>
  );
};

export default Navbar;

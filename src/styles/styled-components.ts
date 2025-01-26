import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";

// Add Logo styled component
export const LogoContainer = styled.div`
  margin-bottom: 2rem;
  width: 160px;
  height: 160px;
  position: relative;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const Container = styled.div`
  min-height: 100vh;
  background: #fff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #004d40;
  font-weight: 700;
  line-height: 1.2;

  span {
    color: #00bfa5;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
`;

//   background: linear-gradient(135deg, #00bfa5 0%, #ffffff 100%);
export const CountdownBox = styled.div`
  background: linear-gradient(to bottom, #032a2c, #00afa1);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 77, 64, 0.08);
  border: 1px solid rgba(0, 77, 64, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-width: 80px;
    border-radius: 12px;
  }
`;

export const Number = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.3rem;
  }
`;

export const Label = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const StyledLikeButton = styled(motion.button)`
  background: #00bfa5;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 191, 165, 0.2);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  span {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;

    span {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.7rem 1.3rem;

    span {
      font-size: 1rem;
    }
  }
`;

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";

// Add Logo styled component
export const LogoContainer = styled.div`
  margin-bottom: 2rem;
  width: 140px;
  height: 140px;
  position: relative;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const Container = styled.div`
  min-height: 100vh;
  min-height: 100dvh; /* For mobile browsers */
  background: #fff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-family: "Inter", sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: flex-start;
    padding-top: 4rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #004d40;
  font-weight: 700;
  line-height: 1.2;

  span {
    color: #00bfa5;
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

export const CountdownContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 500px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

//   background: linear-gradient(135deg, #00bfa5 0%, #ffffff 100%);
export const CountdownBox = styled.div`
  background: linear-gradient(to bottom, #032a2c, #00afa1);
  padding: 1.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 77, 64, 0.08);
  border: 1px solid rgba(0, 77, 64, 0.1);

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    border-radius: 10px;
  }
`;

export const Number = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.3rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Label = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const StyledLikeButton = styled(motion.button)`
  background: #00bfa5;
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 191, 165, 0.2);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  span {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.7rem 1.3rem;

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;

    span {
      font-size: 0.9rem;
    }
  }
`;

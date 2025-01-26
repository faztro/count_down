import { StyledTitle } from "@/styles/styled-components";

interface TitleProps {
  text: React.ReactNode;
}

export const Title = ({ text }: TitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

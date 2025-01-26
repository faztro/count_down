import {
  CountdownBox as StyledBox,
  Number,
  Label,
} from "@/styles/styled-components";

interface CountdownBoxProps {
  value: number;
  label: string;
}

export const CountdownBox = ({ value, label }: CountdownBoxProps) => {
  return (
    <StyledBox>
      <Number>{value}</Number>
      <Label>{label}</Label>
    </StyledBox>
  );
};

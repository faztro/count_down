"use client";

import dynamic from "next/dynamic";
import {
  Container,
  LogoContainer,
  StyledImage,
} from "@/styles/styled-components";
import { Title } from "@/components/ui/Title";
import { LikeButton } from "@/components/ui/LikeButton";

// Dynamically import CountdownSection with no SSR
const CountdownSection = dynamic(
  () =>
    import("@/components/CountdownSection").then((mod) => mod.CountdownSection),
  { ssr: false }
);

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <StyledImage
          src="/images/faztro.png"
          alt="Faztro Logo"
          fill
          priority
          sizes="(max-width: 768px) 150px, 180px"
        />
      </LogoContainer>
      <Title
        text={
          <>
            Faztro <span>Coming Soon</span>
            <br />
            at
          </>
        }
      />
      <CountdownSection />
      <LikeButton />
    </Container>
  );
}

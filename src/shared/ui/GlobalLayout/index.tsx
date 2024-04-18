import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";
import { Footer } from "@/components/main/Footer";
import { GlobalContainer } from "@/components/main/GlobalContainer";

interface GlobalLayoutProps {
  children?: ReactNode;
}
export const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <GlobalContainer>
      <Container>{children}</Container>
      <Footer />
    </GlobalContainer>
  );
};

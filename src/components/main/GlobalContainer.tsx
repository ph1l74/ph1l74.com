import { Container, Flex } from "@mantine/core";
import { FC, ReactNode } from "react";

type GlobalContainerProps = {
  children?: ReactNode;
};

export const GlobalContainer: FC<GlobalContainerProps> = ({ children }) => {
  return (
    <Container fluid p={0} m={0} h={"100vh"}>
      <Flex
        direction={"column"}
        wrap={"nowrap"}
        justify={"space-between"}
        style={{ height: "100%" }}
        w={"100%"}
      >
        {children}
      </Flex>
    </Container>
  );
};

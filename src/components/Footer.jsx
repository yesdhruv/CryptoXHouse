import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://miro.medium.com/fit/c/176/176/1*ARLdTVglvr4BAj8UY9zrnw.png";


const url = "https://www.linkedin.com/in/yesdhruv/";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We provide all cryptocurrency-related information, including performance data, 
            at no cost.
          
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <button onClick={() => window.open(url, '_blank')}>Meet Founder</button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

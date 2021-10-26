import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Flex, Box, Text, Button, HStack, Stack } from "@chakra-ui/react";

import Logo from "../../public/icons/logo.svg";
import BoxIcon from "../../public/icons/boxIcon.svg";

const Home: NextPage = () => {
  return (
    <>
      <title>Organizastock | Home</title>
      <Flex height="100vh" align="center" justify="center">
        <Flex
          flexDirection="column"
          justify="space-evenly"
          p="10"
          w="100%"
          h="100%"
        >
          <Image src={Logo} alt="Logo da empresa" width={150} />
          <Text as="h1" fontSize="46" fontWeight="bold">
            Seja bem vindo
          </Text>
          <Text as="p" fontSize="26">
            Organizastock é um sistema de organização do seu estoque, para você
            saber tudo que acontece no seu negócio
          </Text>

          <HStack spacing="4">
            <Button
              as="a"
              href="newProduct"
              colorScheme="blue"
              size="lg"
              fontSize="22"
              h="60px"
              _hover={{ bg: "blue.700" }}
            >
              Cadastrar produto
            </Button>
            <Button
              as="a"
              href="products"
              colorScheme="green"
              size="lg"
              fontSize="22"
              h="60px"
            >
              Ver estoque
            </Button>
          </HStack>
        </Flex>
        <Flex
          flexDirection="column"
          justify="space-evenly"
          p="10"
          h="100%"
          w="100%"
          bg="gray.700"
        >
          <Text as="h2" align="center" fontSize="36">
            Continue gerenciando seu estoque com a Organizastock
          </Text>
          <Image
            src={BoxIcon}
            alt="Ícone de uma caixa aberta"
            width={300}
            height={300}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

import NextLink from "next/link";
import { toast } from "react-toastify";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function handleDeleteIcon() {
  toast.success("Produto removido com sucesso!");
}
const products = () => {
  return (
    <Box as="main" h="100vh">
      <title>Organizastock | Produtos</title>
      <Box flex="1" h="100vh" p="8">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Produtos cadastrados
          </Heading>

          <NextLink href="/newProduct" passHref>
            <Button as="a" size="lg" colorScheme="blue">
              Criar novo produto
            </Button>
          </NextLink>
        </Flex>

        <>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Nome do produto</Th>
                <Th>Quantidade</Th>
                <Th>Valor do lote</Th>
                <Th>CNPJ do fabricante</Th>
                <Th>Valor unitário</Th>
                <Th>Data de validade do lote</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr textAlign="center">
                <Td>Molho de tomate</Td>
                <Td>400</Td>
                <Td>40.999</Td>
                <Td>1111111111111</Td>
                <Td>10.99</Td>
                <Td>26/10/2021</Td>
                <Td>
                  <Button as="button" colorScheme="yellow">
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button
                    as="button"
                    colorScheme="red"
                    onClick={handleDeleteIcon}
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>

              <Tr textAlign="center">
                <Td>Molho de tomate</Td>
                <Td>400</Td>
                <Td>40.999</Td>
                <Td>1111111111111</Td>
                <Td>10.99</Td>
                <Td>26/10/2021</Td>
                <Td>
                  <Button as="button" colorScheme="yellow">
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button
                    as="button"
                    colorScheme="red"
                    onClick={handleDeleteIcon}
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>

              <Tr textAlign="center">
                <Td>Molho de tomate</Td>
                <Td>400</Td>
                <Td>40.999</Td>
                <Td>1111111111111</Td>
                <Td>10.99</Td>
                <Td>26/10/2021</Td>
                <Td>
                  <Button as="button" colorScheme="yellow">
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button
                    as="button"
                    colorScheme="red"
                    onClick={handleDeleteIcon}
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </>
      </Box>
    </Box>
  );
};

export default products;

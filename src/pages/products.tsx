import NextLink from "next/link";

import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Spinner,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { ProductList } from "../components/ProductList";
import { GetServerSideProps } from "next";

interface productsProps {
  id: number;
  productName: string;
  cnpjManufacturer: string;
  amount: number;
  unitaryValue: number;
  lotValue: number;
  expirationDate: string;
  createdAt: string;
}

interface dataProps {
  data: [];
}

const products = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    async function getProducts() {
      const { data }: dataProps = await api.get("products");

      const dataProduct = data.map((item: productsProps) => {
        return {
          id: item.id,
          productName: item.productName,
          cnpjManufacturer: item.cnpjManufacturer,
          amount: item.amount,
          unitaryValue: item.unitaryValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }),
          lotValue: item.lotValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }),
          expirationDate: new Date(item.expirationDate).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            },
          ),
          createdAt: new Date(item.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        };
      });

      setProducts(dataProduct);
    }

    getProducts();
  }, []);

  if (products == undefined) {
    return (
      <Box as="main" h="100vh">
        <title>Organizastock | Produtos</title>
        <Box flex="1" h="100vh" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Produtos cadastrados em seu estoque
            </Heading>

            <NextLink href="/newProduct" passHref>
              <Button as="a" size="lg" colorScheme="blue">
                Adicionar novos produtos
              </Button>
            </NextLink>
          </Flex>

          <Flex width="100%" height="80%" align="center" justify="center">
            <Spinner />
          </Flex>
        </Box>
      </Box>
    );
  } else if (products == "") {
    return (
      <Box as="main" h="100vh">
        <title>Organizastock | Produtos</title>
        <Box flex="1" h="100vh" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Produtos cadastrados em seu estoque
            </Heading>

            <NextLink href="/newProduct" passHref>
              <Button as="a" size="lg" colorScheme="blue">
                Adicionar novos produtos
              </Button>
            </NextLink>
          </Flex>

          <Flex width="100%" height="80%" align="center" justify="center">
            <Text as="h1" fontSize="20">
              Parece que não há produtos no seu estoque 🧐
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box as="main" h="100vh">
        <title>Organizastock | Produtos</title>
        <Box flex="1" h="100vh" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Produtos cadastrados em seu estoque
            </Heading>

            <NextLink href="/newProduct" passHref>
              <Button as="a" size="lg" colorScheme="blue">
                Adicionar novos produtos
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
                {products.map((item: productsProps) => {
                  return (
                    <ProductList
                      key={item.id}
                      id={item.id}
                      amount={item.amount}
                      cnpjManufacturer={item.cnpjManufacturer}
                      expirationDate={item.expirationDate}
                      lotValue={item.lotValue}
                      productName={item.productName}
                      unitaryValue={item.unitaryValue}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </>
        </Box>
      </Box>
    );
  }
};

export default products;

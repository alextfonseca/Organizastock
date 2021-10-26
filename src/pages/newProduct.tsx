import {
  Box,
  Text,
  Flex,
  Heading,
  Grid,
  Button,
  HStack,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { toast } from "react-toastify";

import { useState } from "react";
import { api } from "../service/api";

import { FormProducts } from "../components/FormProducts";
// notificações
function alertRegisterNotification() {
  toast.success("Produto cadastrado com sucesso!");
}

function alertCancelNotification() {
  toast.error("Cancelado com sucesso!");
}

function alertServerError() {
  toast.error("Erro interno no servidor!");
}

const newProducts = () => {
  const [productName, setProductName] = useState("");
  let [cnpjManufacturer, setCnpjManufacturer] = useState("");
  const [amount, setAmount] = useState(0);
  const [unitaryValue, setUnitaryValue] = useState("");
  const [lotValue, setLotValue] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  async function handleSubmitProduct(event: any) {
    const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;
    const cnpjs = [
      "00.000.000/0000-00",
      "00000000000000",
      "00-000-000-0000-00",
      "00.000.000/000000",
      "00.000.000.000000",
      "00.000.000.0000.00",
    ];

    if (
      cnpjManufacturer.replace("-", "").replace(".", "").replace("/", "")
        .length < 14
    ) {
      toast.error("O CNPJ digitado é inválido!");
    }
    const product = {
      NomeProduto: productName,
      CNPJFabricante: cnpjManufacturer,
      Quantidade: Number(amount),
      ValorUnitario: Number(unitaryValue),
      ValorLote: Number(lotValue),
      DataValidade: expirationDate,
    };

    // try {
    //   const response = await api.post("/add", product);
    //   alertRegisterNotification();
    // } catch (error) {
    //   alertServerError();
    //   event.preventDefault();
    // }

    event.preventDefault();
  }

  return (
    <Box as="main" p="10">
      <title>Organizastock | adicione um produto</title>
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="bold" colorScheme="gray">
          Adicione um novo produto a seu estoque
        </Heading>

        <NextLink href="/products" passHref>
          <Button as="a" size="lg" colorScheme="green">
            Ver produtos cadastrados
          </Button>
        </NextLink>
      </Flex>

      <Grid
        mt="8"
        templateColumns="repeat(2, 1fr)"
        gap={8}
        as="form"
        onSubmit={handleSubmitProduct}
      >
        <FormProducts
          label="Digite o nome do produto"
          placeholder="Molho de tomate"
          type="text"
          id="productName"
          isRequired
          onChange={(e) => setProductName(e.target.value)}
        />

        <FormProducts
          label="CNPJ do fabricante"
          placeholder="11111-111/11-1"
          type="text"
          id="cnpjManufacturer"
          isRequired
          onChange={(e) => setCnpjManufacturer(e.target.value)}
        />

        <FormProducts
          label="Quantidade"
          placeholder="400"
          type="number"
          id="amount"
          isRequired
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <FormProducts
          label="Valor unitário"
          placeholder="10.99"
          type="text"
          id="unitaryValue"
          isRequired
          onChange={(e) => setUnitaryValue(e.target.value)}
        />

        <FormProducts
          label="Valor do lote"
          placeholder="40.000"
          type="text"
          id="lotValue"
          isRequired
          onChange={(e) => setLotValue(e.target.value)}
        />

        <FormProducts
          label="Data de validade do lote"
          type="date"
          id="expirationDate"
          onChange={(e) => setExpirationDate(e.target.value)}
        />

        <HStack spacing="8" mt="8">
          <Button
            size="lg"
            fontSize="xl"
            colorScheme="blue"
            p="8"
            as="button"
            type="submit"
          >
            Cadastrar
          </Button>

          <Button
            size="lg"
            fontSize="xl"
            as="a"
            href="/"
            p="8"
            colorScheme="red"
          >
            Cancelar
          </Button>
        </HStack>
      </Grid>
    </Box>
  );
};

export default newProducts;

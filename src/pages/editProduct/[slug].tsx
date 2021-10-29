import { toast } from "react-toastify";

import { Box, Flex, Heading, Button, Grid, HStack } from "@chakra-ui/react";
import { FormProducts } from "../../components/FormProducts";
import { useState } from "react";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";

interface ProductListProps {
  product: {
    id: number;
    productName: string;
    cnpjManufacturer: string;
    amount: string;
    unitaryValue: string;
    lotValue: string;
    expirationDate: string;
  };
}

function alertRegisterNotification() {
  toast.success("Produto editado com sucesso!");
}

function alertServerError() {
  toast.error("Erro interno no servidor!");
}

const editProduct = ({ product }: ProductListProps) => {
  const router = useRouter();

  const [productName, setProductName] = useState(product.productName);
  let [cnpjManufacturer, setCnpjManufacturer] = useState(
    product.cnpjManufacturer,
  );
  const [amount, setAmount] = useState(product.amount);
  const [unitaryValue, setUnitaryValue] = useState(product.unitaryValue);
  const [lotValue, setLotValue] = useState(product.lotValue);
  const [expirationDate, setExpirationDate] = useState(product.expirationDate);

  async function handleEditProduct(event: any) {
    const dataProduct = {
      NomeProduto: productName,
      CNPJFabricante: cnpjManufacturer,
      Quantidade: Number(amount),
      ValorUnitario: Number(unitaryValue),
      ValorLote: Number(lotValue),
      DataValidade: expirationDate.split("/").reverse().join("-"),
    };

    try {
      const productUpdated = await api.put(
        `products/edit/${product.id}`,
        dataProduct,
      );
      alertRegisterNotification();

      router.push("/products");
    } catch (error) {
      alertServerError();
    }

    event.preventDefault();
  }

  return (
    <Box as="main" p="10">
      <title>Organizastock | editar produto</title>
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="bold" colorScheme="gray">
          Edite as informações do produto
        </Heading>
      </Flex>

      <Grid mt="8" templateColumns="repeat(2, 1fr)" gap={8} as="form">
        <FormProducts
          label="Nome do produto"
          type="text"
          id="productName"
          isRequired
          value={productName}
          color="whiteAlpha.900"
          onChange={(e) => setProductName(e.target.value)}
        />

        <FormProducts
          label="CNPJ do fabricante"
          type="text"
          id="cnpjManufacturer"
          isRequired
          value={cnpjManufacturer}
          onChange={(e) => setCnpjManufacturer(e.target.value)}
        />

        <FormProducts
          label="Quantidade"
          type="number"
          id="amount"
          isRequired
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <FormProducts
          label="Valor unitário"
          type="text"
          id="unitaryValue"
          isRequired
          value={unitaryValue}
          onChange={(e) => setUnitaryValue(e.target.value)}
        />

        <FormProducts
          label="Valor do lote"
          type="text"
          id="lotValue"
          isRequired
          value={lotValue}
          onChange={(e) => setLotValue(e.target.value)}
        />

        <FormProducts
          label="Data de validade do lote"
          type="text"
          id="expirationDate"
          isRequired
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />

        <HStack spacing="8" mt="8">
          <Button
            size="lg"
            fontSize="xl"
            colorScheme="green"
            p="8"
            as="button"
            onClick={handleEditProduct}
          >
            Confirmar
          </Button>

          <Button
            size="lg"
            fontSize="xl"
            as="a"
            href="/products"
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

export default editProduct;

interface ProductListProps {
  data: {
    id: number;
    productName: string;
    cnpjManufacturer: string;
    amount: string;
    unitaryValue: string;
    lotValue: string;
    expirationDate: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug }: any = params;

  const { data }: ProductListProps = await api.get(`products/${slug}?`);

  const product = {
    id: data.id,
    productName: data.productName,
    cnpjManufacturer: data.cnpjManufacturer,
    amount: data.amount,
    unitaryValue: data.unitaryValue,
    lotValue: data.lotValue,
    expirationDate: new Date(data.expirationDate).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }),
  };

  return {
    props: { product },
  };
};

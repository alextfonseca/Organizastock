import { Tr, Td, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { toast } from "react-toastify";
import { api } from "../services/api";

interface ProductListProps {
  id: number;
  productName: string;
  cnpjManufacturer: string;
  amount: number;
  unitaryValue: number;
  lotValue: number;
  expirationDate: string;
}

export const ProductList = ({
  id,
  productName,
  cnpjManufacturer,
  amount,
  unitaryValue,
  lotValue,
  expirationDate,
}: ProductListProps) => {
  async function handleDeleteProduct() {
    toast.success("Produto removido com sucesso!");

    const response = await api.delete(`products/delete/${id}`);

    window.location.reload();
  }

  return (
    <Tr textAlign="center">
      <Td>{productName}</Td>
      <Td>{amount}</Td>
      <Td>{lotValue}</Td>
      <Td>{cnpjManufacturer}</Td>
      <Td>{unitaryValue}</Td>
      <Td>{expirationDate}</Td>
      <Td>
        <Button as="a" href={`/editProduct/${id}`} colorScheme="yellow">
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button as="button" colorScheme="red" onClick={handleDeleteProduct}>
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};

import { Tr, Td, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { toast } from "react-toastify";

interface ProductListProps {
  productName: string;
  cnpjManufacturer: string;
  amount: number;
  unitaryValue: number;
  lotValue: number;
  expirationDate: string;
}

export const ProductList = ({
  productName,
  cnpjManufacturer,
  amount,
  unitaryValue,
  lotValue,
  expirationDate,
}: ProductListProps) => {
  function handleDeleteIcon() {
    toast.success("Produto removido com sucesso!");
  }

  return (
    <Tr textAlign="center">
      <Td>{productName}</Td>
      <Td>{amount}</Td>
      <Td>{unitaryValue}</Td>
      <Td>{cnpjManufacturer}</Td>
      <Td>{lotValue}</Td>
      <Td>{expirationDate}</Td>
      <Td>
        <Button as="button" colorScheme="yellow">
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button as="button" colorScheme="red" onClick={handleDeleteIcon}>
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};

import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface FormProductsProps extends InputProps {
  label: string;
  placeholder?: string;
  type: string;
  id: string;
  isRequired?: boolean;
}

export const FormProducts = ({
  label,
  placeholder,
  type,
  id,
  isRequired,
  ...rest
}: FormProductsProps) => {
  if (isRequired) {
    return (
      <FormControl isRequired>
        <FormLabel id={id} fontSize="24">
          {label}
        </FormLabel>
        <Input
          type={type}
          name={id}
          placeholder={placeholder}
          bg="whiteAlpha.500"
          fontSize="20"
          p="6"
          _placeholder={{ color: "gray.300" }}
          {...rest}
        />
      </FormControl>
    );
  } else {
    return (
      <FormControl>
        <FormLabel id={id} fontSize="24">
          {label}
        </FormLabel>
        <Input
          type={type}
          name={id}
          placeholder={placeholder}
          bg="whiteAlpha.500"
          fontSize="20"
          p="6"
          _placeholder={{ color: "gray.300" }}
          {...rest}
        />
      </FormControl>
    );
  }
};

// import { Link } from "next/link";
import { Box, Badge, Image, Link } from "@chakra-ui/react";
export const Product = ({ product }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={product.image}
        alt={product.description}
        width="200px"
        height="200px"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </Box>

        <Box>
          {product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.category}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

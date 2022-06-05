import * as React from "react";
import { Flex, Select, Avatar, Box, GridItem, Text } from "@chakra-ui/react";

const TopNavbar = () => {
  return (
    <Flex justifyContent="space-between">
      <GridItem h="20">
        <Flex>
          <Text pr="20px">Today</Text>
          <Text color="#3FCED8" fontWeight="bolder">
            Week
          </Text>
        </Flex>
      </GridItem>
      <Flex>
        {/* <GridItem w='100%'> */}
        <Box mr="5" boxSize="35px" bg="#3FCED8" borderRadius="50%">
          <Text p="2" color="white" align="center">
            <sup>o</sup>C
          </Text>
        </Box>
        {/* </GridItem>   */}

        {/* <GridItem w='50%'> */}
        <Box boxSize="35px" mr="5" bg="gray.300" borderRadius="50%">
          <Text p="2" align="center">
            <sup>o</sup>F
          </Text>
        </Box>
        {/* </GridItem>  */}

        {/* <GridItem w='150%' h='12' mt="-2" ml="-20" bg="white"> */}
        <Box w="150%" h="39px" bg="white" p="1" borderRadius="6px">
          <Flex justify="space-between">
            <Avatar size="sm" />
            <Select placeholder="Diagonal Tech " border="none">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Box>
      </Flex>
      {/* </GridItem> */}
    </Flex>
  );
};
export default TopNavbar;

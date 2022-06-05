import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Input, Text, Icon, Image } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import cloudy from "./assets/cloudy.svg";

import * as React from "react";
import { TIMEOUT } from "dns";

const LeftSideBar = ({ temp }: any) => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  const timeArr =
    time.split(":")[0] + ":" + time.split(":")[1] + " " + time.split(" ")[1];

  let day = date.getDay();
  let dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Grid p="8" width="20%" flexDirection="column">
      <Flex justify="space-between" flexDirection="column">
        <Box position="relative">
          <Input
            background="gray.100"
            opacity="0.5"
            p="0 0 0 40px"
            placeholder="Basic usage"
          />

          <SearchIcon
            // m="-60px 60px 0 -0px"
            color="black"
            fontWeight="bold"
            position="absolute"
            right={2}
            top={3}
          />
          <Image src={cloudy} w="100%" />
          <Box>
            <Text color="#259AA2" fontSize="35px" fontWeight="bold">
              {temp.toFixed()}
              <sup>o</sup>C
            </Text>
            <Text color="black" fontWeight="bold" fontSize="20px" p="5px 0 0 0">
              {dayArr[day]},{" "}
              <Text as="span" color="gray">
                {timeArr}
              </Text>
            </Text>
          </Box>
        </Box>

        <Box boxSize="100px 100px" mt="150px">
          <Text color="gray">Mostly Cloudy</Text>
          <Text color="gray">Rain - 30%</Text>
        </Box>
        <Box p="10" border="3px" borderStyle="dashed" borderColor="gray.400">
          <Text
            color="black"
            fontWeight="bold"
            fontSize="20px"
            wordBreak="break-word"
          >
            <Icon as={IoLocation} /> Kathmandu, Nepal
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};

export default LeftSideBar;

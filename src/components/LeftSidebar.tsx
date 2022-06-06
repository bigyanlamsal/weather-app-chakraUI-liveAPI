import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Input, Text, Icon, Image } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import cloudy from "./assets/cloudy.svg";
import { useState } from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

import * as React from "react";
import axios from "axios";

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

  const [data, setData] = useState({
    name: "",
    main: {
      temp: "",
    },
  });

  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7b31ccd4c0b391c82419ea24f7e45ca9`;
  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <Grid p="8" width="20%" flexDirection="column">
      <Flex justify="space-between" flexDirection="column">
        <Box position="relative">
          <Input
            background="gray.100"
            opacity="0.5"
            p="0 0 0 20px"
            placeholder="Basic usage"
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
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
              {data.main.temp}
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
            <Icon as={IoLocation} /> {data.name}
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};

export default LeftSideBar;

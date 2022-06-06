import React, { useState, useEffect } from "react";
import cloudy from "./assets/cloudy.svg";
import temperature from "./assets/temprature.svg";
import rainny from "./assets/rainny.svg";
import cloudy_rainny from "./assets/cloudy_rainy.svg";
import sunny from "./assets/sunny.svg";
import sunrise from "./assets/sunrise.svg";
import sunset from "./assets/sunset.svg";
import { IoLocation } from "react-icons/io5";
import moment from "moment";
import {
  Image,
  Grid,
  Stack,
  Text,
  Box,
  GridItem,
  Icon,
  Flex,
} from "@chakra-ui/react";
import LeftSideBar from "./LeftSidebar";
import Cards from "./Cards";
import TopNavbar from "./topNavbar";
import Highlight from "./Highlight";

const Chakra = () => {
  const [data, setData] = useState({
    longitude: "",
    elevation: "",
    hourly: {
      temperature_2m: [],
    },
  });
  const [data2, setData2] = useState({
    weather: [
      {
        main: "",
      },
    ],
    main: {
      temp: 0,
      humidity: 0,
    },
    visibility: "",
    sys: {
      sunrise: "",
      sunset: "",
    },
    wind: {
      speed: "",
    },
  });
  let sunriseTime: any = data2.sys.sunrise;
  let sunsetTime: any = data2.sys.sunset;
  let timeDifference: any = -sunriseTime + sunsetTime;
  let visibility: any = data2.visibility;

  let date = new Date();
  const dateToday = date.toISOString().split("T")[0];

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.7058&longitude=85.31&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=7b31ccd4c0b391c82419ea24f7e45ca9"
    )
      .then((response) => response.json())
      .then((res2) => {
        setData2(res2);
      });
  }, []);

  const getHumidStatus = (data: any) => {
    switch (true) {
      case data >= 61:
        return "bad quality";
      case data < 61:
        return "good quality";
      default:
        return "default";
    }
  };

  const getStatusColor = (data: any) => {
    switch (true) {
      case data >= 61:
        return "red";
      case data < 61:
        return "blue";
      default:
        return "skyblue";
    }
  };

  return (
    <Stack direction="row">
      <LeftSideBar temp={data2.main.temp} />
      <Grid width="80%" bg="gray.100" overflow="scroll">
        <Stack direction="column" p="8">
          <TopNavbar />
          //Weekly weather update UI part
          <Grid templateColumns="repeat(7, 1fr)" gap={6}>
            <Cards
              image={cloudy}
              temp={data.hourly.temperature_2m[1]}
              day={"Mon"}
              selected
            />
            <Cards
              image={sunny}
              temp={data.hourly.temperature_2m[2]}
              day={"Tue"}
            />
            <Cards
              image={rainny}
              temp={data.hourly.temperature_2m[3]}
              day={"Wed"}
            />
            <Cards
              image={cloudy}
              temp={data.hourly.temperature_2m[4]}
              day={"Thurs"}
            />
            <Cards
              image={rainny}
              temp={data.hourly.temperature_2m[5]}
              day={"Fri"}
            />
            <Cards
              image={sunny}
              temp={data.hourly.temperature_2m[6]}
              day={"Sat"}
            />
            <Cards
              image={cloudy}
              temp={data.hourly.temperature_2m[0]}
              day={"Sun"}
            />
          </Grid>
          <Text
            color="gray"
            fontSize={26}
            p="20px 0 20px 0"
            fontWeight="bold"
            align="left"
          >
            Today Highlight
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            <GridItem
              p="6"
              h="60"
              borderRadius={10}
              boxShadow="2xl"
              background="white"
            >
              <Flex direction="column">
                <Text
                  fontWeight="bold"
                  fontSize="15px"
                  align="left"
                  color="gray"
                >
                  Sunrise and Sunset
                </Text>
                <Image boxSize="60px" src={cloudy_rainny} />
                <Text
                  mt="-12"
                  ml="20"
                  fontSize="16px"
                  letterSpacing="0.5px"
                  textAlign="right"
                >
                  {moment(sunriseTime * 1000).format("HH:mm a")}
                  <br />
                  <Text as="span" fontSize="14px" color="gray">
                    {moment(timeDifference * 1000).format("HH:mm ")}
                  </Text>
                </Text>
                <Image boxSize="60px" src={sunset} />
                <Text
                  mt="-12"
                  ml="20"
                  fontSize="16px"
                  letterSpacing="0.5px"
                  textAlign={"right"}
                >
                  {moment(sunsetTime * 1000).format("HH:mm a")}
                  <br />
                  <Text as="span" fontSize="14px" color="gray">
                    -1m 36s
                  </Text>
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              p="6"
              //   w="80%"
              h="60"
              bg="white"
              borderRadius={10}
              boxShadow="2xl"
              background="white"
            >
              <Flex justify="space-between">
                <Box>
                  <Text fontWeight="bold" align="left" color="gray">
                    Temperature
                  </Text>

                  <Text
                    fontWeight="bold"
                    mt="7"
                    fontSize="30px"
                    textAlign="left"
                  >
                    {data2.main.temp}
                    <sup>o</sup>
                    <Text as="span" color="gray" fontSize="16px">
                      c
                    </Text>
                  </Text>
                  <Flex>
                    <Box>
                      <Icon as={IoLocation} w={6} h={7} mt="6" />{" "}
                    </Box>
                    <Box>
                      <Text
                        color="gray"
                        mt="6"
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        Kathmandu, Nepal
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Image mt="10" ml="" boxSize="100px" src={temperature} />
                </Box>
              </Flex>
            </GridItem>

            <GridItem
              p="6"
              h="60"
              bg="white"
              borderRadius={10}
              boxShadow="2xl"
              textAlign="left"
            >
              <Text fontWeight="bold" color="gray">
                Wind Status
              </Text>
              <Text fontWeight="bold" mt="6" fontSize="30px">
                {data2.wind.speed}{" "}
                <Text as="span" color="gray" fontSize="16px">
                  m/s
                </Text>
              </Text>
              <Text color="gray" mt="10">
                Status :
              </Text>
            </GridItem>

            <GridItem
              p="6"
              h="60"
              borderRadius={10}
              boxShadow="2xl"
              background="white"
            >
              <Highlight
                title={"Humidity"}
                dataStatus={data2.main.humidity}
                status={getHumidStatus(data2.main.humidity)}
                sliderThumbColor={"blue.400"}
                sliderFillerTrackColor={"blue.300"}
                unit={" %"}
                statusColor={getStatusColor(data2.main.humidity)}
              />
            </GridItem>
            <GridItem
              p="6"
              //   w="80%"
              h="60"
              borderRadius={10}
              boxShadow="2xl"
              background="white"
            >
              <Highlight
                title={"Visibility"}
                dataStatus={visibility / 1000}
                status={"Average"}
                sliderThumbColor={"orange"}
                sliderFillerTrackColor={"orange.100"}
                unit={" KM/H"}
              />
            </GridItem>
            <GridItem
              p="6"
              h="60"
              borderRadius={10}
              boxShadow="2xl"
              background="white"
            >
              <Highlight
                title={"Air Quality"}
                status={"Bad Quality"}
                sliderThumbColor={"red"}
                sliderFillerTrackColor={"red.100"}
                dataStatus={"50"}
              />
            </GridItem>
          </Grid>
        </Stack>
      </Grid>
    </Stack>
  );
};
export default Chakra;

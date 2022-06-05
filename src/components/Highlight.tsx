import * as React from "react";
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Image,
  Box,
  Slide,
  SliderFilledTrack,
  Slider,
  SliderThumb,
  SliderTrack,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

const Highlight = ({
  title,
  status,
  sliderTrackColor,
  sliderFillerTrackColor,
  sliderThumbColor,
  dataStatus,
  unit,
  statusColor = "skyblue",
}: any) => {
  const [sliderValue, setSliderValue]: any = useState(50);

  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100%" gap={6}>
      <Flex direction="column" justify="space-between">
        <Text fontWeight="bold" align="left" color="gray">
          {title}
        </Text>
        <Text fontWeight="bold" fontSize="30px" textAlign="left">
          {dataStatus}
          <Text as="span" color="gray" fontSize="16px">
            {unit}
          </Text>
        </Text>
        <Text color="gray" textAlign="left">
          Status :{" "}
          <Text as="span" color={statusColor}>
            {status}
          </Text>
        </Text>
      </Flex>
      <Box textAlign="right" h="100%" paddingTop="10px" paddingBottom="10px">
        <Slider
          onChange={(val) => setSliderValue(val)}
          aria-label="slider-ex-3"
          value={dataStatus}
          defaultValue={50}
          orientation="vertical"
          minH="32"
        >
          <SliderTrack width="24px" bg={sliderTrackColor} borderRadius="10px">
            <SliderFilledTrack bg={sliderFillerTrackColor} />
          </SliderTrack>
          <SliderThumb
            width="22px"
            height="22px"
            borderRadius="50%"
            bg={sliderThumbColor}
          />
        </Slider>
      </Box>
    </Grid>
  );
};
export default Highlight;

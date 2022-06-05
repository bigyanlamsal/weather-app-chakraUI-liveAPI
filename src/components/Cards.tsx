import { Box, GridItem,Text,Image,Flex } from '@chakra-ui/react';
import * as React from 'react';


const Cards=({day,image,temp,selected}:any)=>{
    return(
        <GridItem  p="6" w='100%'  h='60' bg={selected?"#3FCED8":'white'} borderRadius={10} justifyContent="left" alignContent="center">
                <Flex direction="column" justify="">
                    <Box>
                        <Text align="center" color={selected?"white":'black'} fontWeight="bold">{day}</Text>
                        <Image  boxSize='120px' src={image} align="center"/>
                        <Text align="center" color={selected?"white":'black'} fontWeight="bold">{temp}<sup>o</sup>C</Text>
                    </Box>
                </Flex>
                            
        </GridItem> 
    )
}

export default Cards;
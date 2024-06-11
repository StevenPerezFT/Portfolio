import Image from "next/image";
import { Grid, GridItem, Flex, Text, Center, Box, Spacer } from '@chakra-ui/react'


export default function MeComponent() {
    return (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }} gap={6} h='200px'>
            <GridItem w='100%' h='100' pr='10'>
                <Center>
                    <Flex w="100" bg='green.500' px='50' py='30'>
                        <Box w='470px' p='5'>
                            <Center>
                                <Text fontSize='2xl'>Skills</Text>
                            </Center>
                            <Grid templateColumns={{ base: 'repeat(4, 1fr)', xl: 'repeat(8, 1fr)' }} alignItems={"center"} gap={2}>
                                <GridItem >
                                    <Image src='/next.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700 hover:scale-110" />
                                </GridItem>
                                <GridItem>
                                    <Image src='/nest.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700  hover:scale-110" />
                                </GridItem>
                                <GridItem>
                                    <Image src='/javascript-js.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700  hover:scale-110" />
                                </GridItem>
                                <GridItem>
                                    <Image src='/typescript-icon.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700 hover:scale-110" />
                                </GridItem>
                                <GridItem>
                                    <Image src='/tailwind.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700  hover:scale-110" />
                                </GridItem>
                                <GridItem>
                                    <Image src='/node-js.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700  hover:scale-110" />
                                </GridItem>
                                <GridItem>
                                    <Image src='/postgresql.svg' alt="nestjs icon" width="100" height="100" className="transition-all duration-700  hover:scale-110" />
                                </GridItem>
                            </Grid>
                        </Box>
                    </Flex>
                </Center>
                <center>
                    <Text fontSize='4xl'>Full stack web developer junior</Text>
                </center>
            </GridItem>
            <GridItem w='100%' h='100' >
            </GridItem>
        </Grid>
    )
}
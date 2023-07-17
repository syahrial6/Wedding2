import { Button, Modal, ModalOverlay, ModalContent, ModalBody, } from "@chakra-ui/react";
import { useState } from "react";
import { Box, Text, Center } from '@chakra-ui/react'


function Modals(props) {
    const [open, setOpen] = useState(true)


    const handleClose = () => {
        props.fungsi()
        setOpen(false);
    };

    return (
        <>
            <Modal isOpen={open} size={"xl"} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Box
                            bgImage="url('/src/image/bg.jpg')"
                            bgPosition="center"
                            bgSize={"cover"}
                        >
                            <Center>

                                <Box py={"80"} color={"white"}>

                                    <Text
                                        textAlign={"center"}
                                        fontSize={"3xl"}
                                    >Undangan Pernikahan</Text>

                                    <Text textAlign={"center"}
                                        fontWeight={"bold"} fontFamily="Rouge Script, cursive"
                                        fontSize={"7xl"}>Nanda & Dian</Text>

                                    <Center>
                                    <Button
                                    _hover={{ bg: 'white',color:"orange.600" }}
                                    bgColor={"orange.600"} color="white" mr={3} onClick={handleClose}>
                                        Buka Undangan
                                    </Button>
                                    </Center>
                                </Box>

                            </Center>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Modals;

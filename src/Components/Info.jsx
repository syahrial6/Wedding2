import { Box, Text, Center, Image } from '@chakra-ui/react'
import AnimatedComponent from "./Animasi";
import cowok from "../image/cowok.png"
import cewek from "../image/cewek.png"
import bismillah from "../image/bismillah.png"
function Info({kontenRef,namalk,namapr,namaayahlk,namaibulk,namaayahpr,namaibupr}) {
  return (
    <Box ref={kontenRef} py={"14"}>
          <Center>
            <AnimatedComponent animationConfig={() => ({
              from: {
                opacity: 0,
                y: 100,
              },
              to: {
                opacity: 1,
                y: 0,
              },
              rootMargin: '-30% 0%',
            })}>
              <Image width="250px"
                height="auto"
                src={bismillah}
                pb={"6"}></Image>
            </AnimatedComponent>
          </Center>
          <AnimatedComponent animationConfig={() => ({
            from: {
              opacity: 0,
              y: 100,
            },
            to: {
              opacity: 1,
              y: 0,
            },
            rootMargin: '-30% 0%',
            config: { duration: 1100 },
          })}>
            <Box textAlign={"center"} fontSize={"xl"}>
              <Text >Assalamualaikum Warahmatullahi Wabarakatuh.</Text>
              <Text >Dengan memohon rahmat dan ridha Allah swt,</Text>
              <Text >kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari pada acara pernikahan kami</Text>
            </Box>
          </AnimatedComponent>

          <AnimatedComponent animationConfig={() => ({
            from: {
              opacity: 0,
              y: 100,
            },
            to: {
              opacity: 1,
              y: 0,
            },
            rootMargin: '-30% 0%',
            config: { duration: 1100 },
          })}>
            <Box py={"14"} textAlign={"center"} >
              <Center>
                <AnimatedComponent animationConfig={() => ({
                  from: {
                    opacity: 0,
                    y: 100,
                  },
                  to: {
                    opacity: 1,
                    y: 0,
                  },
                  rootMargin: '-30% 0%',
                  config: { duration: 1100 },
                })}>
                  <Box width={"200px"} height={"200px"} borderRadius={"50%"} bgColor={"#b0d1b1"} overflow={"hidden"}>
                    <Image src={cowok} margin={"auto"} width={"60%"} ></Image>
                  </Box>
                </AnimatedComponent>
              </Center>
              <Text fontSize={"5xl"} fontFamily="Rouge Script, cursive" color={"#d4b94e"}>{namalk}</Text>
              <Text fontSize={"xl"}>Anak Pertama Bapak {namaayahlk} dan Ibu {namaibulk}</Text>
              <Text fontSize={"8xl"} fontFamily="Rouge Script, cursive" color={"#d4b94e"}>&</Text>
              <Center>
                <AnimatedComponent animationConfig={() => ({
                  from: {
                    opacity: 0,
                    y: 100,
                  },
                  to: {
                    opacity: 1,
                    y: 0,
                  },
                  rootMargin: '-30% 0%',
                  config: { duration: 1100 },
                })}>
                  <Box width={"200px"} height={"200px"} borderRadius={"50%"} bgColor={"#b0d1b1"} overflow={"hidden"}>
                    <Image src={cewek} margin={"auto"} width={"60%"} ></Image>
                  </Box>
                </AnimatedComponent>
              </Center>
              <Text fontSize={"5xl"} fontFamily="Rouge Script, cursive" color={"#d4b94e"}>{namapr}</Text>
              <Text fontSize={"xl"}>Anak Pertama {namaayahpr} dan Ibu {namaibupr}</Text>
            </Box>
          </AnimatedComponent>
        </Box>
  )
}

export default Info

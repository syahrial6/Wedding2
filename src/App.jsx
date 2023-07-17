import { Box, Text, Center, Image, Grid } from '@chakra-ui/react'
import '@fontsource/rouge-script';
import { animated, useSpring, useInView } from '@react-spring/web'
import { useEffect, useRef } from 'react';
import Modals from './Modal';


function App() {

  const audioRef = useRef();

  const playAudio = () => {
    console.log("berhasil")
    audioRef.current.play();
  };


  const [ref1, ataskebawah] = useInView(
    () => ({
      from: { y: -100, opacity: 0 },
      to: { y: 0, opacity: 1 },
      config: { duration: 1300 },
    }),
    {
      rootMargin: '-10% 0%',
    }
  )

  const [ref2, bawahkeatas] = useInView(
    () => ({
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1 },
      config: { duration: 1300 },
    }),
    {
      rootMargin: '-10% 0%',
    }
  )

  const [ref3, fade] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 2000 },
    }),
    {
      rootMargin: '-10% 0%',
    }
  )

  const ataskebawah2 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 1300 },
  });

  const bawahkeatas2 = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 1300 },
  });
  const fade2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });



  useEffect(() => {

  }, [])

  return (
    <>
      <audio src="/src/music/sound.mp3" ref={audioRef} />
      <Modals fungsi={playAudio} />
      <Box
        bgImage="url('/src/image/bg.jpg')"
        bgPosition="center"
        bgSize={"cover"}
      >
        <Center>

          <Box py={"80"} color={"white"}>
            <animated.div style={ataskebawah2}>
              <Text
                textAlign={"center"}
                fontSize={"3xl"}
              >Undangan Pernikahan</Text>
            </animated.div>
            <animated.div style={fade2}>
              <Text textAlign={"center"}
                fontWeight={"bold"} fontFamily="Rouge Script, cursive"
                fontSize={"7xl"}>Nanda & Dian</Text>
            </animated.div>
            <animated.div style={bawahkeatas2}>
              <Text textAlign={"center"} fontSize={"xl"}>Minggu 5 Januari 2023</Text>
              <Text textAlign={"center"} fontSize={"xl"}>Jam</Text>
              <Text textAlign={"center"} fontSize={"xl"}>12.00 - 18.00 WIB</Text>
              <Text pt={"14"} textAlign={"center"} fontSize={"xl"}>Pontianak Convention Center</Text>
              <Text textAlign={"center"} fontSize={"xl"}>Jalan Sultan Syarif Abdurrahman</Text>
            </animated.div>
          </Box>

        </Center>
      </Box>
      <Box>
        <Box py={"14"}>
          <Center>
            <animated.div style={ataskebawah}>
              <Image ref={ref1} width="250px"
                height="auto"
                src='/src/image/bismillah.png'
                pb={"6"}></Image>
            </animated.div>
          </Center>
          <animated.div style={ataskebawah}>
            <Box textAlign={"center"} fontSize={"xl"} ref={ref1}>
              <Text >Assalamualaikum Warahmatullahi Wabarakatuh.</Text>
              <Text >Dengan memohon rahmat dan ridha Allah swt,</Text>
              <Text >kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari pada acara pernikahan kami</Text>
            </Box>
          </animated.div>
          <animated.div style={bawahkeatas}>
            <Box py={"14"} textAlign={"center"} ref={ref2}>
              <Text fontSize={"6xl"} fontFamily="Rouge Script, cursive">Nanda Putra Wijaya</Text>
              <Text fontSize={"xl"}>Anak Pertama Bapak Wijaya dan Ibu Yuni</Text>
              <Text fontSize={"6xl"} fontFamily="Rouge Script, cursive">&</Text>
              <Text fontSize={"6xl"} fontFamily="Rouge Script, cursive">Dian Ayu Putri</Text>
              <Text fontSize={"xl"}>Anak Pertama Bapak Wibowo dan Ibu Ani</Text>
            </Box>
          </animated.div>
        </Box>
      </Box>
      <Box bgColor={"#f4e2e2"}>
        <Text py={"14"} textAlign={"center"} fontSize={"2xl"} fontWeight={"semibold"}>Waktu Pelaksanaan</Text>
        <Box>
          <Center>
          <animated.div style={fade}>
            <Grid ref={ref3} templateColumns='repeat(3, 1fr)' gap={26} fontSize={"2xl"}>
              
                <Box textAlign={"center"} px={"14"} >
                  <Text>Minggu</Text>
                  <Text fontSize={"4xl"} fontWeight={"bold"}>5</Text>
                  <Text>Januari 2023</Text>
                </Box>
                <Box textAlign={"center"}>
                  <Text>Akad</Text>
                  <Text>2 Januari 2023</Text>
                </Box>
                <Box textAlign={"center"}>
                  <Text>Resepsi</Text>
                  <Text>5 Januari 2023</Text>
                </Box>
             
            </Grid>
            </animated.div>
          </Center>
        </Box>
      </Box>
    </>
  )
}

export default App

import { Box, Text, Center, Image, Grid, Button, Link } from '@chakra-ui/react'
import '@fontsource/rouge-script';
import { animated, useSpring } from '@react-spring/web'
import { useRef } from 'react';
import Modals from './Modal';
import Countdown from 'react-countdown';
import AnimatedComponent from './Animasi';
import countdownRenderer from './CountDown';




function App() {

  const audioRef = useRef();


  // kode hitungan mundur
  const targetDate = new Date('July 29, 2023 12:00:00');
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const milliseconds = Math.max(timeDifference, 0);

  
  // batas kode hitungan mundur

  const playAudio = () => {
    console.log("berhasil")
    audioRef.current.play();
  };


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
              <Text textAlign={"center"} fontSize={"xl"}>Sabtu 29 Juli 2023</Text>
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
                src='/src/image/bismillah.png'
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
              <Text fontSize={"6xl"} fontFamily="Rouge Script, cursive">Nanda Putra Wijaya</Text>
              <Text fontSize={"xl"}>Anak Pertama Bapak Wijaya dan Ibu Yuni</Text>
              <Text fontSize={"6xl"} fontFamily="Rouge Script, cursive">&</Text>
              <Text fontSize={"6xl"} fontFamily="Rouge Script, cursive">Dian Ayu Putri</Text>
              <Text fontSize={"xl"}>Anak Pertama Bapak Wibowo dan Ibu Ani</Text>
            </Box>
          </AnimatedComponent>
        </Box>
      </Box>
      <AnimatedComponent  animationConfig={() => ({
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
      <Box bgColor={"#f4e2e2"}>
        <Text py={"14"} textAlign={"center"} fontSize={"2xl"} fontWeight={"semibold"}>Waktu Pelaksanaan</Text>
        <Box>
          <Center>

            <Grid templateColumns='repeat(2, 1fr)' gap={26} fontSize={"2xl"}>

              <Box textAlign={"center"} px={"14"} >
                <Text>Sabtu</Text>
                <Text fontSize={"4xl"} fontWeight={"bold"}>29</Text>
                <Text>Juli 2023</Text>
              </Box>
              <Box textAlign={"center"}>
                <Text>Resepsi</Text>
                <Text>12.00 - 18.00 WIB</Text>
              </Box>

            </Grid>

          </Center>
          <Center>
            <Box textAlign={"center"}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                <Countdown date={Date.now() + milliseconds} renderer={countdownRenderer} />
              </Text>
            </Box>
          </Center>


        </Box>
      </Box>
      </AnimatedComponent>
      <Box textAlign={"center"}>
        <Box py={"14"}>
          <Text fontSize={"3xl"} fontWeight={"semibold"}>LOKASI</Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>Pontianak Convention Center</Text>
        </Box>
        <Box width={"100%"}>
          <Center>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7752.470391595663!2d109.32790129324503!3d-0.03791217859314347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59aaa158addb%3A0x9916ae6426d80357!2sPontianak%20Convention%20Centre!5e0!3m2!1sid!2sid!4v1689660112312!5m2!1sid!2sid" width="600" height="450" style={{ border: '0', width: "70%" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Center>
        </Box>
        <Button my={"14"} color={"white"} bgColor={"orange.600"}><Link href='https://goo.gl/maps/A34ZddrR9BpzqQmQ8' target='_blank'>Google Maps</Link></Button>
      </Box>
      <Box bgColor={"#f4e2e2"} >
        <Text textAlign={"center"} py={"24"} fontSize={{ md: "xl", lg: "2xl" }}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami
          <br />
          apabila Bapak/Ibu/Saudara/Saudari berkenan hadir
          memberikan doa restu.
          <br />
          <br />
          Jika bisa hadir kami tunggu konfirmasinya,
          <br />
          Informasi: Di meja penerima tamu akan kami sediakan hand sanitizer dan pemeriksaan suhu tubuh.
          <br />
          <br />
          Jika tidak memungkinkan untuk hadir di pernikahan kami,tidak mengapa,
          <br />
          semoga bisa berjumpa di lain kesempatan
          <br />
          <br />
          Stay safe & jaga kesehatan ya :)
        </Text>
      </Box>
    </>
  )
}

export default App

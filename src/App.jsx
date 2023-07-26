import { Box, Text, Center, Image, Grid, Button, Link, FormControl, FormLabel, Input, RadioGroup, Radio, Badge, Card, Stack, Heading, CardFooter, CardBody, Divider } from '@chakra-ui/react'
import '@fontsource/rouge-script';
import { animated, useSpring } from '@react-spring/web'
import { useRef, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import AnimatedComponent from './Components/Animasi';
import countdownRenderer from './Components/CountDown';
import bunga2 from "/src/image/bunga2.png"
import bg from "/src/image/bg.jpg"
import bunga1 from "/src/image/bunga1.png"
import bingkai from "/src/image/bingkai.png"
import sound from "/src/music/sound2.mp3"
import { tambahdata, getData } from './Firebase/firebase';
import swal from 'sweetalert';
import Info from './Components/Info';


// perbaikan selanjutnya bagaimana ketika state diubah tidak langsung menjalanlankan fetch tapi menunggu tombol kirim dulu



function App() {

  const [isScrollEnabled, setScrollEnabled] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const audioRef = useRef();
  const kontenRef = useRef(null);
  const [nama, setNama] = useState("")
  const [ucapan, setUcapan] = useState("")
  const [kehadiran, setKehadiran] = useState("")
  const [data,setData]= useState([])
  const objek = {kehadiran,nama,ucapan}
  console.log(data)


  const info = {
    namalk : "Wahyu Ahmad",
    namapr : "Dian Winata Fitri",
    namaayahlk : "Gunawan Haryadi",
    namaibulk : "Dewi Ayu",
    namaayahpr : "Wijaya Hadi",
    namaibupr : "Jasmine",
  }

  useEffect(() => {
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, [isScrollEnabled]);




  const toggleScroll = () => {
    setScrollEnabled(!isScrollEnabled);
  };

  const handleScroll = () => {
    if (!isScrollEnabled) {
      // Menggulir ke atas jika scroll tidak diaktifkan
      window.scrollTo(0, 0);
    }
  };

  const scrollToKonten = () => {
    if (kontenRef.current) {
      kontenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  // countdown waktu
  const targetDate = new Date('July 29, 2023 12:00:00');
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const milliseconds = Math.max(timeDifference, 0);


  

  const playAudio = () => {
    console.log("berhasil")
    // audioRef.current.play();
    setButtonVisible(false)
  };


  const ataskebawah2 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 1300 },
  });

  const fade2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  // mengirim ucapan
  const kirim =  async(e) => {
    e.preventDefault();
    await tambahdata(objek)
    console.log("masuk")
    swal("Good job!", "You clicked the button!", "success");
    window.location.reload();
  }


   useEffect(()=>{
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      console.log(result);
    };
    fetchData();
   },[])
  



  return (
    <>
      <audio src={sound} ref={audioRef} />
      <Box pb={"96"}
        bgImage={bg}
        bgPosition="center"
        bgSize={"cover"}
      >
        <Image src={bunga2}
          transform="translate(100%, 0%)"
          width="50%" height="50%" objectFit="cover"></Image>

        <Center>
          <Image src={bunga1}
            transform="translate(-50%, 150%)"
            width="50%" height="50%" objectFit="cover"></Image>

          <Box pt={"72"} pb={"32"} color={"white"} position={"absolute"}>
            <animated.div style={ataskebawah2}>
              <Text
                textAlign={"center"}
                fontSize={"3xl"}
                fontWeight={"bold"}
                color={"#387d10"}
              >The Wedding Of</Text>
            </animated.div>
            <animated.div style={fade2}>
              <Box position="relative" pb="6">
                <Image src={bingkai} />
                <Text py={"10"}
                  color={"#d4b94e"}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                  fontWeight="bold"
                  fontFamily="Rouge Script, cursive"
                  fontSize="7xl"
                  zIndex="5"
                >
                  Nanda  Dian
                </Text>
                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                  fontWeight="bold"
                  fontFamily="Rouge Script, cursive"
                  fontSize="7xl"
                  zIndex="5"
                  color={"#d4b94e"}
                >
                  &
                </Text>
              </Box>
              <Center>
                {isButtonVisible && (
                  <Button
                    href="#konten"
                    onClick={() => { toggleScroll(); playAudio(); scrollToKonten(); }}
                    color={"white"}
                    bgColor={"#387d10"}
                    borderRadius={"full"}
                  >
                    {isScrollEnabled ? null : "Buka Undangan"}
                  </Button>
                )}
              </Center>
            </animated.div>
          </Box>
        </Center>

      </Box>
      <Box>
        <Info 
        kontenRef={kontenRef} 
        namapr={info.namapr} 
        namalk={info.namalk} 
        namaayahlk={info.namaayahlk} 
        namaibulk={info.namaibulk}
        namaayahpr={info.namaayahpr}
        namaibupr={info.namaibupr}/>
      </Box>
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
        <Box bgColor={"#b0d1b1"}>
          <Text py={"14"} textAlign={"center"} fontSize={"2xl"} fontWeight={"semibold"}>Waktu Pelaksanaan</Text>
          <Box>
            <Center>

              <Grid templaterow='repeat(1, 1fr)' gap={26} fontSize={"2xl"}>

                <Box textAlign={"center"} px={"14"} pb={"14"} >
                  <Text fontFamily="Rouge Script, cursive" fontWeight={"bold"} fontSize={"4xl"}>Akad Nikah</Text>
                  <Text fontSize={"2xl"}> Jumat 28 Juli 2023</Text>
                  <Text>08.00 - Selesai</Text>
                </Box>
                <Box textAlign={"center"}>
                  <Text fontFamily="Rouge Script, cursive" fontWeight={"bold"} fontSize={"4xl"}>Resepsi</Text>
                  <Text>Sabtu 29 Juli 2023</Text>
                  <Text>12.00 - 18.00 WIB</Text>
                </Box>

              </Grid>

            </Center>
            <Center>
              <Box textAlign={"center"}>
                <Text fontWeight={"bold"} fontSize={"2xl"} pb="14">
                  <Countdown date={Date.now() + milliseconds} renderer={countdownRenderer} />
                </Text>
              </Box>
            </Center>


          </Box>
        </Box>
      </AnimatedComponent>
      <Box textAlign={"center"}>
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
        </AnimatedComponent>
      </Box>
      <Box bgColor={"#b0d1b1"} >
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
          <Text textAlign={"center"} py={"24"} fontSize={{ sm: "xl", md: "2xl", lg: "2xl" }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
            <br />
            apabila Bapak/Ibu/Saudara/Saudari berkenan hadir
            memberikan doa restu.
            <br />
            <br />
            Jika bisa hadir kami tunggu konfirmasinya,
            <br />

            <br />
            Jika tidak memungkinkan untuk hadir di pernikahan kami,tidak mengapa,
            <br />
            semoga bisa berjumpa di lain kesempatan
            <br />
            <br />
            Stay safe & jaga kesehatan ya
          </Text>
        </AnimatedComponent>
      </Box>

      <Box py={"12"}>
        <Box textAlign={"center"}>
          <Text fontSize={"4xl"} fontWeight={"bold"}>RSVP</Text>
          <Text fontSize={"2xl"}>Berikan Ucapan</Text>
        </Box>
        <Center>
          <Box width={"90%"}>
            <form onSubmit={kirim}>
              <FormControl>
                <FormLabel>Nama</FormLabel>
                <Input onChange={(e) => setNama(e.target.value)} type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Ucapan</FormLabel>
                <Input onChange={(e) => setUcapan(e.target.value)} type='text' />
              </FormControl>
              <FormControl>
                <RadioGroup onChange={setKehadiran} size={"lg"}>
                  <Radio value='Saya Akan Hadir'>Saya Akan Hadir</Radio>
                  <Radio value='Saya Tidak Hadir'>Saya Tidak Bisa Hadir</Radio>
                </RadioGroup>
              </FormControl>
              <Button bgColor={"#b0d1b1"} mt={"12"} type='submit'>Kirim</Button>
            </form>
          </Box>
        </Center>
      </Box>
      <Box bgColor={"#b0d1b1"}>
        <Text py={"14"} fontSize={"2xl"} fontWeight={"extrabold"} textAlign={"center"}>Ucapan</Text>
        <Box>
          <Center>
            <Grid gap={6}>
              {data.map((data1, index) => (
                <Card key={index} maxW='sm'>
                  <CardBody>
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{data1.nama}</Heading>
                      <Text>
                        {data1.ucapan}
                      </Text>
                      <Badge colorScheme='green'>{data1.kehadiran}</Badge>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </Center>
        </Box>
      </Box>
      {/* {isNavbarDisabled ? null :
        <Flex
          as="nav"
          direction="row"
          justify="space-around"
          align="center"
          position="fixed"
          bottom="0"
          left="0"
          width="100%"
          height="60px"
          backgroundColor="#387d10"
          borderTopLeftRadius={"40"}
          borderTopRightRadius={"40"}
          color="#fff"
        >
          <Box as="button">
            <ImNewspaper />
          </Box>
          <Box as="button">
            <ImClock2 />
          </Box>
          <Box as="button">
            <ImLocation2 />
          </Box>
          <Box as="button">
            <ImPen />
          </Box>
        </Flex>
      } */}



    </>
  )
}

export default App

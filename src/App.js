import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Link,
  Stack,
  Center,
  Image,
  Tooltip,
  theme,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "./styles.css";
import { Logo } from './Logo';
import WorkRandom from './assets/holopunk480.gif'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid minChildWidth={['100%','100%','44%']} m={8} spacing={8} >
      <Box bg="#00FF48" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['1.4vh','2vh','3vh']} noOfLines={3}>
        Mendicant Bias</Heading>
        <Box width="100%" bg="#192817" mt={4} mb={6} height={[1,1,2]}/>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>on-chain multi-hyphenate:</Text>
        <Stack direction='column' h='auto' p={6} mb={4}>
          <Divider class='desc' orientation='vertical' borderColor={'pink'} />
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>product</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']} >designer</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']} >artist</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']} >ai/ml</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']} >extraordinaire</Text>
          </Stack>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']} mb={8}>currently building:</Text>
          <Stack direction={['column', 'column', 'column', 'column', 'row']} spacing={[4, 4, 4, 12]}>
          <Link
          class="punk"
          fontSize={['1vh','1.4vh','1.7vh']}
          href='https://ppuunnkk.com'
          isExternal
          >
          PUNK
          </Link>
          <Link
          class="meta"
          fontSize={['1vh','1.4vh','1.7vh']}
          href='https://mirror.xyz/metanorm.eth'
          isExternal
          >
          Metanorm
          </Link>
          <Link
          class="okpc"
          fontSize={['1vh','1.4vh','1.7vh']}
          href='https://oksh.app'
          isExternal
          >
          OKSH
          </Link>
          </Stack>
      </Box>
      <Box bg="#FF00F4" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['1vh','2vh','2.4vh']} noOfLines={3}>Experience</Heading>
        <Box width="100%" bg="#192817" mt={4} mb={6} height={[1,1,2]}/>
        <SimpleGrid rows={6} m={2} spacing={4}>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>Apple</Text>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>dΞf</Text>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>UC Berkeley Ext. UX/UI</Text>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>Metanorm</Text>
        </SimpleGrid>
      </Box>
      <Box bg="#FF7F00" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['1vh','2vh','2.4vh']} noOfLines={[2, 2, 2]}>About</Heading>
        <Box width="100%" bg="#192817" mt={4} mb={6} height={[1,1,2]}/>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>
          Hello web3.</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['1vh','1.4vh','1.7vh']}>
           For the first time in a long time, I can say that I'm very much alive and ready to change the world with you. I've been a multi-disciplinary contributor in product/machine learning at Apple since 2016, and now in 2022, web3 has charged my batteries for a new era. You can message me in the normal places; <Link href="https://www.twitter.com/michaelbelong" color="#0075FF">twitter</Link>/<Link href="mailto:salsas-gold-0x@icloud.com" color="#00FF48">email</Link>/<Tooltip label="michaelbelong#0001" placement='top' fontSize="lg" aria-label='A tooltip'>
             discord
           </Tooltip> or the <Link href="https://www.rainbow.me/metanorm.eth">chain</Link> if you're interested in connecting and learning more.</Text>
      </Box>
      <Box bg="#FFFF00" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['1vh','2vh','2.4vh']} noOfLines={3}>Random Work</Heading>
        <Box w="100%" bg="#192817" mt={4} h={[1,1,2]}/>
        <Center w="100%" h="90%">
          <Image src={WorkRandom} alt='Random Work crafted by Mendicant Bias' />
        </Center>
      </Box>

      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;

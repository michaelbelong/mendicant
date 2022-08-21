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
  SimpleGrid,
  extendTheme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "./styles.css";
import { Logo } from './Logo';
import WorkRandom from './assets/holopunk480.gif'
import WorkRandom1 from './assets/ppuunnkk.gif'
import { mode } from '@chakra-ui/theme-tools'

// import { RandomWork } from './randomwork'

const myTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    
  },
  colors: {
      green: '#00FF46',
      blue: '#0075FF',
      orange: '#FF7F00',
      yellow: '#FFFF00',
      chartreuse: '#B5FF00',
      pink: '#FF00C4',
      darkback: '#192817'
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('darkback', 'darkback')(props),
        backgroundImage: mode('linear-gradient(45deg, #0075FF 25%, transparent 25%), linear-gradient(-45deg, #0075FF 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0075FF 75%), linear-gradient(-45deg, transparent 75%, #0075FF 75%)','linear-gradient(45deg, #B5FF00 25%, transparent 25%), linear-gradient(-45deg, #B5FF00 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #B5FF00 75%), linear-gradient(-45deg, transparent 75%, #B5FF00 75%)'),
        backgroundSize: '16px 16px',
        backgroundPosition: '0 0, 0 8px, 8px 8px, -8px 0px'
      }
    })
  }
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid minChildWidth={['100%','100%','44%','44%']} m='32px' spacing='32px' >
      <Box bg="#00FF48" height="auto" p={16} >
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['8vw','6vw','3vw']} noOfLines={3}><Tooltip label="𝙱𝙴𝙶𝙶𝙰𝚁 𝙰𝙵𝚃𝙴𝚁 𝙺𝙽𝙾𝚆𝙻𝙴𝙳𝙶𝙴" placement='bottom-start' fontSize="2xl" aria-label='A tooltip'>
        Mendicant Bias</Tooltip></Heading>
        <Box width="100%" bg="#192817" mt={4} mb={6} height={[1,1,2]}/>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>on-chain multi-hyphenate:</Text>
        <Stack direction='column' h='auto' p={6} mb={4}>
          <Divider class='desc' orientation='vertical' borderColor={'pink'} />
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>product</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']} >designer</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']} >artist</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']} >ai/ml</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']} >extraordinaire</Text>
          </Stack>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']} mb={8}>currently building:</Text>
          <Stack direction={['column', 'column', 'column', 'column', 'row']} spacing={[3, 3, 3, 3, 8]}>
          <Link
          class="punk"
          fontSize={['6vw','3vw','1.7vw','1.7vw','1.2vw']}
          href='https://ppuunnkk.com'
          isExternal
          >
          PUNK
          </Link>
          <Link
          class="meta"
          fontSize={['6vw','3vw','1vw','1vw','0.75vw']}
          href='https://mirror.xyz/metanorm.eth'
          isExternal
          >
          Metanorm
          </Link>
          <Link
          class="okpc"
          fontSize={['6vw','3vw','1vw','1vw','0.75vw']}
          href='https://oksh.app'
          isExternal
          >
          OKSH
          </Link>
          </Stack>
      </Box>
      <Box bg="#FF00F4" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['8vw','6vw','3vw']} noOfLines={3}>Experience</Heading>
        <Box width="100%" bg="#192817" mt={4} mb={6} height={[1,1,2]}/>
        <SimpleGrid rows={6} m={2} spacing={4}>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>Apple</Text>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>dΞf</Text>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>UC Berkeley Ext. UX/UI</Text>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>Metanorm</Text>
        </SimpleGrid>
      </Box>
      <Box bg="#FF7F00" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['8vw','6vw','3vw']} noOfLines={[2, 2, 2]}>About</Heading>
        <Box width="100%" bg="#192817" mt={4} mb={6} height={[1,1,2]}/>
        <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>
          Hello web3.</Text>
          <Text fontFamily='NeueBitBold' color='#192817' fontSize={['4vw','3vw','1.7vw']}>
           For the first time in a long time, I can say that I'm very much alive and ready to change the world with you. I've been a multi-disciplinary contributor in product/machine learning at Apple since 2016, and now in 2022, web3 has charged my batteries for a new era. You can message me in the normal places; <Link href="https://www.twitter.com/michaelbelong" color="#0075FF">twitter</Link>/<Link href="mailto:salsas-gold-0x@icloud.com" color="#00FF48">email</Link>/<Tooltip label="michaelbelong#0001" placement='top' fontSize="lg" aria-label='A tooltip'>
             discord
           </Tooltip> or the <Link href="https://www.rainbow.me/metanorm.eth">chain</Link> if you're interested in connecting and learning more.</Text>
      </Box>
      <Box bg="#FFFF00" height="auto" p={16}>
        <Heading color="#192817" lineHeight={1.5} fontFamily='NeueBitBold' fontSize={['8vw','6vw','3vw']} noOfLines={3}>Random Work</Heading>
        <Box w="100%" bg="#192817" mt={4} h={[1,1,2]}/>
        <Center w="100%" h="90%">
          <Image src={WorkRandom1} alt='Random Work crafted by Mendicant Bias'/>
        </Center>
      </Box>

      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;

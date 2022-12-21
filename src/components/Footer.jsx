import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const avatarSrc = 'https://avatars.githubusercontent.com/u/49943287?v=4'

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.700'}
      color={'whiteAlpha.700'}
      minH={'4'}
      px={'16'}
      mt={'10'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>Crypto Market</Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            @All Rights Reserved
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src={avatarSrc} />
          <a href={'https://github.com/hrithiksaini99'} target={'blank'}>
            Follow Me
          </a>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer

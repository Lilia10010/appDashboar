import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react'
import NotificationNav from './NotificationNav'
import Profile from './Profile'
import SearchBox from './SearchBox'
import Logo from './Logo'
import { useSidebarDrawer } from '../../context/SidebarDraweContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header(){
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      {!isWideVersion && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}



      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  )

}

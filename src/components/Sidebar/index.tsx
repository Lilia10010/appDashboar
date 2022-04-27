import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SidebarDraweContext";
import SidebarNav from "./SidebarNav";

export function Sidebar(){
  const { isOpen, onClose } = useSidebarDrawer()

  const IsDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(IsDrawerSidebar){
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }


  return(
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}

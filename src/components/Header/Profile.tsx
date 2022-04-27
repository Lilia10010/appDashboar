import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return(
        <Flex align="center">
          {showProfileData && (
            <Box mr="4" textAlign="right">
              <Text>Lília Paula</Text>
              <Text color="gray.300" fontSize="small">liliaxtz2@gmail.com</Text>
            </Box>
          )}
          <Avatar size="md" name="Lília Paula" src="https://avatars.githubusercontent.com/u/25871372?s=64&v=4" />
        </Flex>
  )
}

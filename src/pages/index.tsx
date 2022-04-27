import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

/*  {...register('email')} */


/* const { errors} = formState */

/* dentro do componente
error={errors.email} */
type SignInFormData = {
  email: string;
  password: string;
}

 const signInFormSchema = yup.object().shape({
   email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
   password: yup.string().required ('Senha obrigatória'),
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    //vai aguardar a promessa resolver pra dar o console.log
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="Email"
            type="email"
            {...register('email')}
            error={formState.errors.email}
          />
          <Input
            name="password"
            label="Password"
            type="password"
             {...register('password')}
             error={formState.errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="4"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

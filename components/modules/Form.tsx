import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Input from 'components/base/Input'
import React from 'react'
import Divider, { HeightVariants } from 'components/base/Divider'

type FormInputs = {
  name: string
  contactNumber: string
  email: string
  message?: string
}

// previously used for contact form
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<FormInputs>()

  const value = watch('message')
  const resize = value ? 'vertical' : 'none'

  const onSubmitForm: SubmitHandler<FormInputs> = (data) => {
    // return onSubmit(data)
  }
  return (
    <VStack spacing="4">
      <Controller
        name="name"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <FormControl isInvalid={!!errors.name}>
            <Input
              placeholder="Name*"
              type="text"
              id="name"
              onChange={onChange}
              value={value}
            />
            <FormErrorMessage>This field is required</FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="contactNumber"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <FormControl isInvalid={!!errors.contactNumber}>
            <Input
              placeholder="Contact Number*"
              type="tel"
              id="contactNumber"
              onChange={onChange}
              value={value}
            />
            <FormErrorMessage>
              Please enter a valid phone number
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <FormControl isInvalid={!!errors.email}>
            <Input
              placeholder="Email Address*"
              type="email"
              id="email"
              onChange={onChange}
              value={value}
            />
            <FormErrorMessage>
              Please enter a valid email address
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Divider
        variant={{
          base: HeightVariants.default,
          md: HeightVariants.less,
        }}
      />

      <FormControl isInvalid={!!errors.message}>
        <Textarea
          {...register('message', { required: false })}
          bg={'transparent'}
          outline={0}
          boxShadow="none"
          px={0}
          borderColor="#898989"
          borderRadius={0}
          borderTop={0}
          borderX={0}
          _focus={{
            borderColor: '#898989',
            borderTopColor: 'transparent',
            outline: 'none',
            boxShadow: 'none',
            resize: 'vertical',
          }}
          _placeholder={{
            color: '#898989',
          }}
          fontWeight={300}
          fontSize={'12px'}
          lineHeight={'base'}
          placeholder="Your Message"
          id="message"
          minHeight="initial"
          overflow="hidden"
          value={value}
          resize={resize}
          onChange={(event) => {
            event.target.style.height = 'auto'
            event.target.style.height = `${event.target.scrollHeight}px`
          }}
        />
        <FormErrorMessage>This field is required</FormErrorMessage>
      </FormControl>

      <Flex
        pt={2}
        width={'100%'}
        flex={1}
        direction={'row'}
        justify={'space-between'}
      >
        <Button type="submit" variant={Variants.blackLine}>
          Submit Enquiry
        </Button>
        <Text>*Required Fields.</Text>
      </Flex>
    </VStack>
  )
}

export default Form

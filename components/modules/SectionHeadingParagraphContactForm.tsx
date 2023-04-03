import {
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

type SectionHeadingParagraphContactFormProps = {
  heading: string
  paragraph: string
  tnc: string
  onSubmit: (args: any) => void
}

/**
 * usage:
  <SectionHeadingParagraphContactForm
    heading={'We’re here to help'}
    paragraph={
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis orci viverra.'
    }
    tnc={
      'By submitting this form you are consenting to receive marketing communications from Thomas Archer in future, on the understanding that you have read and agree to our Privacy and Data Collection Statement and that you can opt-out at any time.'
    }
    onSubmit={(data) => console.log('submitData', data)}
  />
 */

const SectionHeadingParagraphContactForm: React.FC<
  SectionHeadingParagraphContactFormProps
> = ({ heading, paragraph, onSubmit, tnc }) => {
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
    return onSubmit(data)
  }

  return (
    // @ts-ignore: 2590
    <Flex
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1440px'}
      borderWidth={1}
    >
      <Flex direction={'column'} flex={1} px={2}>
        <Heading1>{heading}</Heading1>
        <Divider variant={HeightVariants.less} />
        <Text>{paragraph}</Text>
        <Divider
          variant={{
            base: HeightVariants.less,
            md: HeightVariants.none,
          }}
        />
      </Flex>

      <Flex direction={'column'} flex={1} px={2}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
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

          <Divider variant={HeightVariants.default} />
          <Text>{tnc}</Text>
        </form>
      </Flex>
    </Flex>
  )
}

export default SectionHeadingParagraphContactForm

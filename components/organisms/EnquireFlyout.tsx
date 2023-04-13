import React from 'react'
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FormControl,
  FormErrorMessage,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import Input from 'components/base/Input'
import Heading1 from 'components/base/Heading1'
import Text from 'components/base/Text'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import { Controller, useForm } from 'react-hook-form'
import { HeightVariants } from 'components/base/Divider'
import ButtonIcon from 'components/base/ButtonIcon'
import Close from 'components/icon/Close'
import Link from 'next/link'

type FormInputs = {
  name: string
  contactNumber: string
  email: string
  message?: string
}

const EnquireFlyout = ({
  isOpen,
  onClose,
  title,
  description,
  button,
  privacyAndPolicy,
  contact,
}) => {
  const {
    register,
    formState: { errors },
    control,
  } = useForm<FormInputs>()

  return (
    <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} size={'lg'}>
      <DrawerOverlay />
      <DrawerContent py={'33px'}>
        <Flex justifyContent={'right'} px={'36px'} mb={'47px'}>
          <ButtonIcon aria-label="close-button" onClick={onClose}>
            <Close />
          </ButtonIcon>
        </Flex>

        <Box px={'36px'}>
          <Box mb={'5vh'}>
            <Heading1 mb={'32px'}>{title}</Heading1>
            <Text mb={'24px'}>{description}</Text>
            <Link
              href={
                button?.useInternal
                  ? `/${button?.internalHref}`
                  : button?.externalHref
              }
              target={button?.isExternal ? '_blank' : ''}
            >
              <Button variant={ButtonVariants.black}>{button?.name}</Button>
            </Link>
            <Box mt={'24px'}>
              <Text fontSize={'14px'} fontWeight={700} mb={1}>
                Thomas Archer
              </Text>
              <Text mb={1}>
                {contact?.address?.streetName} {contact?.address?.suburb}{' '}
                {contact?.address?.postalCode}
              </Text>
              <Link
                href={`tel:${contact?.phone?.code}${contact?.phone?.number}`}
              >
                <Text textDecor={'underline'} mb={1}>
                  ({contact?.phone?.code}) {contact?.phone?.number}
                </Text>
              </Link>
              <Link href={`mailto:${contact?.email}`}>
                <Text textDecor={'underline'}>{contact?.email}</Text>
              </Link>
            </Box>
          </Box>

          <Flex direction={'column'} flex={1} px={2}>
            <form>
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
                      <FormErrorMessage>
                        This field is required
                      </FormErrorMessage>
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
                  alignItems={'center'}
                >
                  <Button type="submit" variant={ButtonVariants.blackLine}>
                    Submit Enquiry
                  </Button>
                  <Text fontSize={'12px'}>*Required Fields.</Text>
                </Flex>
              </VStack>

              <Box pt={HeightVariants.more} />
              <Text>
                By submitting this form you are consenting to receive marketing
                communications from Thomas Archer in future, on the
                understanding that you have read and agree to our{' '}
                <Link
                  href={
                    privacyAndPolicy?.useInternal
                      ? `/${privacyAndPolicy?.internalHref}`
                      : privacyAndPolicy?.externalHref
                  }
                  target={privacyAndPolicy?.isExternal ? '_blank' : ''}
                >
                  Privacy and
                </Link>
                Data Collection Statement and that you can opt-out at any time.
              </Text>
            </form>
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  )
}

export default EnquireFlyout

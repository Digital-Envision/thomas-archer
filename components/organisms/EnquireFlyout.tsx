import React, { useEffect } from 'react'
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react'
import Input from 'components/base/Input'
import Heading1 from 'components/base/Heading1'
import Text from 'components/base/Text'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import ButtonIcon from 'components/base/ButtonIcon'
import Close from 'components/icon/Close'
import Link from 'components/base/Link'
import NextLink from 'next/link'
import useHubspot from 'lib/hooks/useHubspot'

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
  const region = 'na1'
  const portalId = '8929845'
  const formId = 'bdf6ff06-20d1-43c8-94d0-605a164255f1'
  const target = '#hubspotForm'

  useHubspot({ isOpen, region, portalId, formId, target })

  return (
    <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} size={'lg'}>
      <DrawerOverlay />
      <DrawerContent py={'33px'} overflowY={'auto'}>
        <Flex justifyContent={'right'} px={'36px'} mb={'47px'}>
          <ButtonIcon aria-label="close-button" onClick={onClose}>
            <Close />
          </ButtonIcon>
        </Flex>

        <Box px={'36px'}>
          <Box mb={'5vh'}>
            <Heading1 mb={'32px'}>{title}</Heading1>
            <Text mb={'24px'}>{description}</Text>
            <Link link={button}>
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
              <NextLink
                href={`tel:${contact?.phone?.code}${contact?.phone?.number}`}
              >
                <Text textDecor={'underline'} mb={1}>
                  ({contact?.phone?.code}) {contact?.phone?.number}
                </Text>
              </NextLink>
              <NextLink href={`mailto:${contact?.email}`}>
                <Text textDecor={'underline'}>{contact?.email}</Text>
              </NextLink>
            </Box>
          </Box>

          <Flex direction={'column'} flex={1} px={2}>
            <Box id="hubspotForm"></Box>
            <Text mt={'53px'} fontSize={'xs'}>
              By submitting this form you are consenting to receive marketing
              communications from Thomas Archer in future, on the understanding
              that you have read and agree to our{' '}
              <Link link={privacyAndPolicy}>
                <Text as={'span'} fontSize={'xs'} textDecor={'underline'}>
                  Privacy and Data Collection Statement
                </Text>
              </Link>{' '}
              and that you can opt-out at any time.
            </Text>
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  )
}

export default EnquireFlyout

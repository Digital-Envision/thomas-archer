import React from 'react'
import {
  OptionBase,
  Props as ChakraReactSelectProps,
  Select,
} from 'chakra-react-select'

interface Options extends OptionBase {
  label: string
  value: string
}

interface DropdownProps extends ChakraReactSelectProps {
  id: string
  placeholder: string
  name: string
  options: Options[]
}

// testing purposes
export const dropdownOptions: Options[] = [
  { value: 'where', label: 'Where We Build' },
  { value: 'studio', label: 'Style Studio' },
  { value: 'interior', label: 'Interior' },
]

/**
 * Currently Not Being Used on Sprint 1
 */

const TraditionalDropdown = ({
  id,
  name,
  options,
  placeholder,
  ...props
}: DropdownProps) => {
  return (
    <Select
      id={id}
      name={name}
      options={options}
      placeholder={placeholder}
      closeMenuOnSelect={true}
      size="sm"
      {...props}
    />
  )
}

export default TraditionalDropdown

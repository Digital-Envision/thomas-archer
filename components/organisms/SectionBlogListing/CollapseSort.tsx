import { useRadio, useRadioGroup, Box } from '@chakra-ui/react'
import _ from 'lodash'
import Text from 'components/base/Text'

export const CollapseRadio: React.FC<any> = ({
  name,
  items,
  value,
  onValueChange,
  selectedItem,
  setSelectedItem,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'radio',
    value: value,
    onChange: onValueChange,
  })

  const group = getRootProps()

  return (
    <Box
      {...group}
      onClick={(e: any) => {
        const value = e.target.value
        if (!value) return
        const isAlreadySelected = e.target.value === selectedItem?.[name]

        if (isAlreadySelected) {
          setSelectedItem((prevState) => _.omit(prevState, name))
        }
      }}
    >
      {items.map((value) => {
        const radio = getRadioProps({ value })

        return (
          <Radio key={value} {...radio}>
            {_.capitalize(value)}
          </Radio>
        )
      })}
    </Box>
  )
}

const Radio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" p={0} m={0}>
      <input {...input} />
      <Box {...checkbox} cursor="pointer" p={0} m={0} pt={2}>
        <Text {...checkbox} _checked={{ fontWeight: 'bold' }}>
          {props.children}
        </Text>
      </Box>
    </Box>
  )
}

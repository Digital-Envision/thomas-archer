import { useRadio, useRadioGroup, Box } from '@chakra-ui/react'
import _ from 'lodash'
import Text from 'components/base/Text'
import { SectionGridGalleryInterface } from 'components/organisms/SectionGridGallery'

interface FilterProps {
  filterName: string // the name of the filter
  filterItems: SectionGridGalleryInterface['filters'][0]['filterItems'] // an array of filter items
  value: string // the currently selected filter item
  onValueChange: (newValue: string) => void // a function to be called when the selected filter item changes
  selectedFilters: any // selected filter items
  setSelectedFilters: (newFilters: any) => void // a function to be called when the selected filters change
}

export const Filter: React.FC<FilterProps> = ({
  filterName,
  filterItems,
  value,
  onValueChange,
  selectedFilters,
  setSelectedFilters,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'filter',
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
        const isAlreadySelected =
          e.target.value === selectedFilters?.[filterName]

        if (isAlreadySelected) {
          setSelectedFilters((prevState) => _.omit(prevState, filterName))
        }
      }}
    >
      {filterItems.map((value) => {
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

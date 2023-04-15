import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FilterIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 12h2m-2 0a2 2 0 0 0-4 0m4 0a2 2 0 0 1-4 0M6 6a2 2 0 1 0 4 0M6 6a2 2 0 1 1 4 0M6 6H4m6 0h10m-6 6H4m2 6a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4m6 0h10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.7}
    />
  </Svg>
)

export default FilterIcon
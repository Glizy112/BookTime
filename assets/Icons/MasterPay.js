import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const MasterPay = (props) => (
  <Svg
    width={66}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={66} height={59} rx={12} fill="#FFC24D" fillOpacity={0.19} />
    <Path d="M23 19a4 4 0 0 0-4 4v1h28v-1a4 4 0 0 0-4-4H23Z" fill="#FFC24D" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47 27H19v10a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V27Zm-24 5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4Z"
      fill="#FFC24D"
    />
  </Svg>
)

export default MasterPay

import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const CashIcon = (props) => (
  <Svg
    width={66}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={66} height={59} rx={12} fill="#4DD2BA" fillOpacity={0.19} />
    <Path d="M33 24a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="#4DD2BA" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20.5a2.5 2.5 0 0 1 2.5-2.5h23a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-23a2.5 2.5 0 0 1-2.5-2.5v-13Zm9 6.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm14-1a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1H42Zm-19 1a1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1H24a1 1 0 0 1-1-1V27Z"
      fill="#4DD2BA"
    />
    <Path
      d="M20 38a1 1 0 0 0 0 2c7.2 0 14.173.963 20.8 2.767 1.587.432 3.2-.744 3.2-2.427V39a1 1 0 0 0-1-1H20Z"
      fill="#4DD2BA"
    />
  </Svg>
)

export default CashIcon

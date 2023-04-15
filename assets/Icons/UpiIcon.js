import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const UpiIcon = (props) => (
  <Svg
    width={38}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.542}
      width={36.915}
      height={33}
      rx={6}
      fill="#6FB7FF"
      fillOpacity={0.19}
    />
    <Path
      d="m16.632 24.164 4.446-15.417a.5.5 0 0 1 .925-.09l3.973 7.756a.5.5 0 0 1-.108.598l-8.419 7.662c-.373.339-.956-.024-.817-.509Z"
      fill="#406FE7"
      fillOpacity={0.5}
    />
    <Path
      d="m12.218 23.49 4.446-15.418a.5.5 0 0 1 .925-.09l3.973 7.757a.5.5 0 0 1-.109.598l-8.418 7.661c-.373.34-.957-.024-.817-.508Z"
      fill="#406FE7"
      stroke="#406FE7"
    />
  </Svg>
)

export default UpiIcon

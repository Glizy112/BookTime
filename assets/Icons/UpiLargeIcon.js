import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const UpiLarge = (props) => (
  <Svg
    width={66}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={66} height={59} rx={12} fill="#6FB7FF" fillOpacity={0.19} />
    <Path
      d="m27.84 44.467 10.223-28.375a.5.5 0 0 1 .891-.1l9.136 14.274a.5.5 0 0 1-.127.674l-19.358 14.1a.5.5 0 0 1-.765-.573Z"
      fill="#406FE7"
      fillOpacity={0.5}
    />
    <Path
      d="m18.552 43.33 10.223-28.375a.5.5 0 0 1 .892-.1l9.135 14.275a.5.5 0 0 1-.127.674l-19.358 14.1a.5.5 0 0 1-.765-.573Z"
      fill="#406FE7"
      stroke="#406FE7"
    />
  </Svg>
)

export default UpiLarge

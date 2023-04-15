import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CashIconSmall = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill="#FFC24D"
      fillOpacity={0.75}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.25C1 2.56 1.56 2 2.25 2h11.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25H2.25A1.25 1.25 0 0 1 1 9.75v-6.5ZM5.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm7-.5a.5.5 0 0 0-.5.5v.005a.5.5 0 0 0 .5.5h.005a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5H12.5ZM3 6.5a.5.5 0 0 1 .5-.5h.005a.5.5 0 0 1 .5.5v.005a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5V6.5Z"
      fill="#FFC24D"
      fillOpacity={0.75}
    />
    <Path
      d="M1.5 12a.5.5 0 0 0 0 1c3.6 0 7.087.481 10.4 1.383.793.216 1.6-.372 1.6-1.213v-.67a.5.5 0 0 0-.5-.5H1.5Z"
      fill="#FFC24D"
      fillOpacity={0.75}
    />
  </Svg>
)

export default CashIconSmall
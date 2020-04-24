import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHome(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M1 9.4L13 1l12 8.4v13.2c0 .636-.281 1.247-.781 1.697-.5.45-1.178.703-1.886.703H3.667a2.825 2.825 0 01-1.886-.703c-.5-.45-.781-1.06-.781-1.697V9.4z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 25V13h8v12"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgHome;

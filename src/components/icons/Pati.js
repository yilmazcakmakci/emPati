import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgPati(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" {...props}>
      <G clipPath="url(#pati_svg__clip0)" fill="#fff">
        <Path d="M5.714 6.571c.79 0 1.429-1.15 1.429-2.571 0-1.42-.64-2.571-1.429-2.571S4.286 2.579 4.286 4c0 1.42.64 2.571 1.428 2.571zM4.062 14.466c.205.263.559.391 1.08.391a2.8 2.8 0 001.302-.4A3.3 3.3 0 018 14a3.3 3.3 0 011.556.457 2.8 2.8 0 001.301.4c.522 0 .876-.128 1.081-.39.3-.386.325-1.096.07-2.112-.546-2.186-3.023-4.07-4.008-4.07-.985 0-3.462 1.884-4.009 4.07-.254 1.016-.23 1.726.07 2.111z" />
        <Path d="M1.7 15.733c.009.15.133.267.283.267h12.034c.15 0 .275-.117.283-.267.086-1.661.523-3.151.947-4.592.387-1.316.753-2.56.753-3.712 0-2.162-.689-2.74-.985-2.886a3.068 3.068 0 00-1.55-.257.286.286 0 01-.314-.353c.25-.96.041-1.983-.566-2.769A2.962 2.962 0 0010.285 0C8.56 0 8.292 1.152 8.28 1.2a.286.286 0 01-.28.229h-.002A.286.286 0 017.72 1.2C7.71 1.152 7.44 0 5.714 0a2.962 2.962 0 00-2.3 1.162 3.203 3.203 0 00-.565 2.769.286.286 0 01-.315.352 2.457 2.457 0 00-.28-.013 2.914 2.914 0 00-1.27.271C.69 4.69 0 5.267 0 7.43 0 8.58.366 9.825.753 11.14c.424 1.441.862 2.93.947 4.592zM14.58 5.19c.88.388 1.115 1.725.532 3.045a3.375 3.375 0 01-1.136 1.43 1.746 1.746 0 01-.972.335c-.171 0-.341-.035-.498-.104a1.503 1.503 0 01-.822-1.239c-.071-.616.03-1.24.29-1.804.582-1.32 1.729-2.05 2.606-1.662zM10.286.857c1.121 0 2 1.38 2 3.143 0 1.762-.879 3.143-2 3.143-1.122 0-2-1.38-2-3.143 0-1.762.878-3.143 2-3.143zM8 7.714c1.295 0 3.963 2.105 4.563 4.502.303 1.213.246 2.063-.174 2.602-.317.405-.832.61-1.532.61a3.3 3.3 0 01-1.556-.457 2.8 2.8 0 00-1.301-.4 2.8 2.8 0 00-1.3.4 3.3 3.3 0 01-1.557.458c-.7 0-1.215-.206-1.532-.611-.42-.539-.477-1.39-.174-2.602C4.037 9.82 6.705 7.714 8 7.714zM5.714.857c1.122 0 2 1.38 2 3.143 0 1.762-.878 3.143-2 3.143-1.121 0-2-1.38-2-3.143 0-1.762.879-3.143 2-3.143zM1.42 5.191c.879-.387 2.024.343 2.606 1.662.26.563.361 1.187.29 1.804a1.503 1.503 0 01-.822 1.24 1.224 1.224 0 01-.498.103 1.746 1.746 0 01-.972-.334A3.375 3.375 0 01.89 8.236c-.582-1.32-.349-2.657.53-3.045z" />
        <Path d="M12.736 9.374a.962.962 0 00.919-.18c.414-.303.737-.714.934-1.189.437-.992.328-2.04-.239-2.29-.566-.25-1.415.376-1.853 1.368a2.8 2.8 0 00-.248 1.492.963.963 0 00.487.8zM2.345 9.195a.963.963 0 00.919.18.963.963 0 00.485-.8 2.8 2.8 0 00-.247-1.492c-.372-.844-1.043-1.424-1.583-1.424a.665.665 0 00-.269.055c-.567.25-.676 1.3-.239 2.291.197.475.52.886.934 1.19zM10.286 6.571c.789 0 1.428-1.15 1.428-2.571 0-1.42-.64-2.571-1.428-2.571-.79 0-1.429 1.15-1.429 2.571 0 1.42.64 2.571 1.429 2.571z" />
      </G>
      <Defs>
        <ClipPath id="pati_svg__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgPati;
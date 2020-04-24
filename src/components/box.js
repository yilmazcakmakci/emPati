import { View } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, flexbox, borderRadius, space, display } from 'styled-system'

const Box = styled(View)(compose(color,size,flexbox,borderRadius,space,display))

Box.defaultProps = {
    justifyContent : 'center',
    alignItems : 'center'
}

export default Box
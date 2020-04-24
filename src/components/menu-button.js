import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, flex, space, flexbox, layout, borderRadius } from 'styled-system'

const MenuButton = styled(TouchableOpacity)(compose(color,size,flexbox,space,layout))

MenuButton.defaultProps = {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
}

export default MenuButton
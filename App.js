import React from 'react';
import Context from './src/context'
import CustomNavigator from './src/components/navigator';
import { ThemeProvider } from 'styled-components'
import theme from './src/utils/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Context>
        <CustomNavigator />
      </Context>
    </ThemeProvider>
  )
}
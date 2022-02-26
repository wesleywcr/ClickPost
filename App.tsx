import { StatusBar } from 'expo-status-bar'
import AppStack from './src/routes/AppStack'
import AppLoading from 'expo-app-loading'
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts
} from '@expo-google-fonts/archivo'
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import { ThemeProvider } from 'styled-components/native'
import Theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={Theme}>
        <AppStack />
        <StatusBar style="light" />
      </ThemeProvider>
    )
  }
}

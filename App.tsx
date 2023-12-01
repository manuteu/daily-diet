import { StatusBar } from 'react-native';
import theme from 'src/theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import Loading from '@components/Loading';
import Home from '@components/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
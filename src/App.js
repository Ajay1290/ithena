import React, {useCallback, useEffect, useState} from 'react';
import {Platform, StatusBar} from 'react-native';
// import {useTheme} from 'react-native-paper';
import DashboardStack from './stacks/DashboardStack';
import useGlobalStyles from './styles';
import SplashScreen from './screens/SplashScreen';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import {CustomDarkTheme, CustomDefaultTheme} from './styles/theme';

export default function App() {
  // const theme = useTheme();
  const s = useGlobalStyles();
  // const theme = state.darkMode.theme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;
  const theme = CustomDarkTheme;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar
          barStyle={theme.colors.statusTheme}
          backgroundColor={theme.colors.statusColor}
        />
        {loading ? <SplashScreen /> : <DashboardStack />}
      </NavigationContainer>
    </PaperProvider>
  );
}

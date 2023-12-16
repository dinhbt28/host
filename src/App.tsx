import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Federated } from '@callstack/repack/client';
import { NavigationContainer } from '@react-navigation/native';

import { ErrorBoundary, SplashScreen } from '@/components';
import MainNavigator from '@/navigation/MainNavigator';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);

const App = () => {
  return (
    <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen />}>
        <AuthProvider>
          {(authData: { isSignout: boolean; isLoading: boolean }) => {
            if (authData.isLoading) {
              return <SplashScreen />;
            }

            console.log('isSignout', authData.isSignout);

            return (
              <NavigationContainer
                onReady={() => RNBootSplash.hide({ fade: true })}>
                <MainNavigator />
              </NavigationContainer>
            );
          }}
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};
export default App;
import { StackNavigator } from '@components';
import React from 'react';
import { store } from '@store';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@store/i18n/en.json';
import fr from '@store/i18n/fr.json';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useReloadToken } from '@components/shared';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        fr: {
            translation: fr,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
});

const queryClient = new QueryClient();

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '',
});
const App = () => {
    useReloadToken();
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <Provider store={store}>
                    <StackNavigator />
                </Provider>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
};

export default App;

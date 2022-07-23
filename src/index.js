import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import { AppProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';
import { StorageProvider } from './contexts/StorageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <StorageProvider>
                <AppProvider>
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                </AppProvider>
            </StorageProvider>
        </AuthProvider>
    </React.StrictMode>,
);

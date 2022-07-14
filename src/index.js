import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import { PostsProvider } from './contexts/PostsContext';
import { StorageProvider } from './contexts/StorageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <StorageProvider>
                <PostsProvider>
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                </PostsProvider>
            </StorageProvider>
        </AuthProvider>
    </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import { PostsProvider } from './contexts/PostsContext';
import { AuthProvider } from './contexts/AuthContext';
import { StorageProvider } from './contexts/StorageContext';
import { AppProvider } from './contexts/AppContext';
import { MessagesProvider } from './contexts/MessagesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <StorageProvider>
                <AppProvider>
                    <PostsProvider>
                        <MessagesProvider>
                            <GlobalStyles>
                                <App />
                            </GlobalStyles>
                        </MessagesProvider>
                    </PostsProvider>
                </AppProvider>
            </StorageProvider>
        </AuthProvider>
    </React.StrictMode>,
);

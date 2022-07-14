import { Fragment } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './config';
import { useAuth } from './contexts/AuthContext';
import DefaultLayout from './layouts/DefaultLayout';
import { privateRoutes, publicRoutes } from './routes';

function App() {
    const { currentUser } = useAuth();
    return (
        <Router>
            <Routes>
                {privateRoutes.map((route, index) => {
                    const Layout = route.headLess ? Fragment : DefaultLayout;
                    const Page = route.page;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                currentUser ? (
                                    <Layout>
                                        <Page />
                                    </Layout>
                                ) : (
                                    <Navigate to={routes.login} />
                                )
                            }
                        />
                    );
                })}

                {publicRoutes.map((route, index) => {
                    const Page = route.page;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;

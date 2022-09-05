/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from './pages/HomePage/Loadable';
import { useTranslation } from 'react-i18next';
import { MuiDialogs } from './components/Dialog';

export function App() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem('ACCESS_TO_MAFIA');
        if (!token) navigate('/login');
    }, []);
    return (
        <>
            <Helmet
                titleTemplate=" %s - bitpin "
                defaultTitle="bitpin"
                htmlAttributes={{ lang: i18n.language }}
            >
                <meta name="description" content="Mafya application" />
            </Helmet>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={6000}
                newestOnTop={false}
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                // transition={Zoom}
                // hideProgressBar
            />
            <MuiDialogs />
            <GlobalStyle />
        </>
    );
}

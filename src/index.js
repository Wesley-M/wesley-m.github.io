import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {ThemeProvider} from './contexts/ThemeContext'
import {ContentProvider} from './contexts/ContentContext'

ReactDOM.render(
    <ThemeProvider>
        <ContentProvider>
            <App />
        </ContentProvider>
    </ThemeProvider>
    , document.getElementById('root'));

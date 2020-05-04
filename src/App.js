import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import createStore from './store/store';

import Header from './pages/Header';
import Dashboard from './pages/Dashboard';


const store = createStore();

const theme = createMuiTheme({
    palette: {
        background: {
            paper: '#FFFFFF',
            default: '#F8F8F8'
        },
        text: {
            primary: '#000000',
            secondary: "rgba(0, 0, 0, 0.87)"
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    },
});

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <Dashboard />
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;

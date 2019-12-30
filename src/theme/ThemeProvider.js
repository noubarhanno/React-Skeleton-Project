import React from 'react';
import { ThemeProviderWrapper } from './ThemeProvider.style';
import { ThemeProvider as WealthfaceThemeProvider } from 'emotion-theming';
import theme from './config';

const ThemeProvider = ({children}) => {
    return (
        <ThemeProviderWrapper>
            <WealthfaceThemeProvider theme={theme}>{children}</WealthfaceThemeProvider>
        </ThemeProviderWrapper>
    );
};

export default ThemeProvider;
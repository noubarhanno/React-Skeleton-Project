import { injectGlobal } from 'emotion';
import styled from '@emotion/styled';
import theme from './config';
/* tslint:disable */

export const ThemeProviderWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  font-size: 16px;
  font-family: ${theme.fonts.sansSerif};
`;

injectGlobal`
`;
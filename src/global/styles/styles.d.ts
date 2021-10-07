import 'styled-components';
import { colors } from './theme';

declare module 'styled-components' {
    type themeType = typeof colors;

    export interface DefaultTheme extends themeType {}
}
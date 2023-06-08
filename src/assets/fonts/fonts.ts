import { createGlobalStyle } from 'styled-components';
import BebasNeue from './BebasNeue.ttf';
import SourceSansProRegular from './SourceSansProRegular.ttf';
import SourceSansProBold from './SourceSansProBold.ttf';
import SourceSansProItalic from './SourceSansProItalic.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'BebasNeue';
        src: local('BebasNeue'),
        url(${BebasNeue}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProItalic}) format('truetype');
        font-weight: 400;
        font-style: italic;
    }

    * {
        font-family: 'SourceSansPro', sans-serif;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'BebasNeue', sans-serif
    }
`;
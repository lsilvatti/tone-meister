import styled, { css } from 'styled-components';
import { IOctaveStyle } from './types';


const OctaveKey = styled.button<IOctaveStyle>`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 15px;
    user-select: none;
    cursor: pointer;

    ${(props) => props.$black ? 
        css`
        width: 54px;
        height: 120px;
        background:  #333;
        color:  #FFF;
        border: none;
        z-index: 2; 
        margin: 0 -27px;
        font-size:14px;

        &:active {
            box-shadow: inset 0px -6px 7px 0px rgba(255,255,255,0.32);
        }

        ` : 
        css`
        width:76px;
        height: 180px;
        background: #FFF;
        color:  #333;
        border: 1px solid #333;
        font-size:18px;
        &:active {
            box-shadow: inset 0px -6px 7px 0px rgba(0,0,0,0.32);
        }
        `}
`;


export default { ScaleKey: OctaveKey }
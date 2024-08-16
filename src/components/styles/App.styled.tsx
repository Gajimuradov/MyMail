import styled, {createGlobalStyle} from 'styled-components';
import '../../assets/fonts/stylesheet.css';

export const Page = styled.div`
  display: flex;
  align-items: center;
`

export const StyledApp = styled.div`
        width: 100vw;
        background-image: linear-gradient( 135deg, #F05F57 10%, #360940 100%);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    div{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0;
      
    }
`;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Yandex Sans Text, sans-serif;
  }
`;


import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import styled, {createGlobalStyle} from 'styled-components';
import { GlobalStyle, StyledApp, Page } from './components/styles/App.styled';
import { LogoIcon } from '@eisgs/icon';


export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <YaPochta>
        <LogoIcon size={50}></LogoIcon>
        
        </YaPochta>

      <StyledApp>
      <Page>
          <div>
            <Navbar/>
            <Main/>
          </div>
        </Page>
      </StyledApp>
    </>
  );
}

const YaPochta = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: #072833;
  margin: 20px;
  background-color: tr;
`
import React from 'react';
import Letters from './Letters';
import Bar from './Bar';
import { StyledMain } from './styles/Main.styled';

export default function Main(): JSX.Element{

    return( 
        <StyledMain>
            <div>
             <Bar/>
            </div>
            <Letters/>
        </StyledMain>
    )
}
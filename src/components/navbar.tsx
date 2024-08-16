import React from 'react';
import {    Refresh2Icon} from '@eisgs/icon'
import { emails } from "../data";
import {Downbutton, NavButtons, StyledNav, UpNavButtons, Writebutton} from './styles/Navbar.styled'

export default function Navbar():JSX.Element{

    return( 
        <StyledNav>
            <UpNavButtons>
                <Writebutton>Написать</Writebutton>
                <button><Refresh2Icon size={0} hoverable></Refresh2Icon></button>
            </UpNavButtons>
            <NavButtons>
                <Downbutton>Входящие<span>  {emails.length}</span></Downbutton>
                <Downbutton>Главное</Downbutton>
                <Downbutton>Рассылки</Downbutton>
                <Downbutton>Социальные сети</Downbutton>
                <Downbutton>С вложениями</Downbutton>
                <Downbutton>Мои папки</Downbutton>
            </NavButtons>
        </StyledNav>
    )
}


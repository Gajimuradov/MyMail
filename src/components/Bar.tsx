import React from 'react';
import { StyledBar } from './styles/Bar.styled';

export default function Bar(): JSX.Element{

    return( 
        <StyledBar>
            <ul>
                <input
                type='checkbox'/>
                <button>Переслать</button>
                <button>Удалить</button>
                <button>Это спам!</button>
                <button>Прочитано</button>
                <button>Отключить рассылки</button>
                <button>Напомнить позже</button>
                <button>Метка</button>
                <button>В папку</button>
                <button>Закрепить</button>
            </ul>
        </StyledBar>
    )
}



import styled from 'styled-components';

import { IoIosAdd } from 'react-icons/io';

interface TireStatusProps {
    activated: boolean;
}

export const Container = styled.div`

`;

export const Rubber = styled.div<TireStatusProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 131px;

    border-radius: 30px;
    border: 6px solid ${({ theme, activated }) =>  activated ? theme.primary : theme.gray_light};
    background: ${({ theme, activated }) => activated ? theme.primary_light : 'transparent'};
`;

export const Juice = styled.div`
    width: 7px;
    height: 38px;

    margin: -7px;

    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
    transform: rotate(60deg);
`;

export const IconAdd = styled(IoIosAdd)`
    font-size: 60px;
    color: ${({ theme }) => theme.secondary};
`;

export const RubberText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.secondary};
`;
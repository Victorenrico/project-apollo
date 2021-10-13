import styled from 'styled-components';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

interface ModalOpenProps {
    show: boolean;
}

export const Container = styled.div<ModalOpenProps>`
    display: ${({ show }) => show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: ${({ theme }) => theme.black};
`;

export const Content = styled.div`
    max-width: 814px;
    min-height: 543px;

    padding: 30px 30px;

    border-radius: 30px;
    background: ${({ theme }) => theme.background};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderColumn = styled.div`
    width: 33.3%;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
`;

export const ButtonExit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 38px;
    height: 40px;

    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.gray_light};
`;

export const IconExit = styled(MdOutlineKeyboardArrowLeft)`
    font-size: 22px;
`;
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin: 35px 0;
`;

export const Title = styled.div`
    font-size: 64px;
    color: ${ ({ theme }) => theme.primary };
    text-transform: uppercase;
`;

export const Credit = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: ${ ({ theme }) => theme.primary };
`;
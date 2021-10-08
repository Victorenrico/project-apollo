import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 20px;
    padding: 8px;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.white};
`;

export const TextLine = styled.p`
    margin: 0;
`;

export const TextName = styled.span`
    color: ${({ theme }) => theme.secondary};
`;

export const TextValue = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
`;
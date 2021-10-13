import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 166px;
    height: 250px;

    margin: 0 15px 80px 15px;
    padding-bottom: 5px;

    border-radius: 11px;
    background: ${({ theme }) => theme.white};
`;

export const Photo = styled.img`
    display: flex;
    align-self: center;

    width: 132px;
    margin-top: -70px;
`;

export const Content = styled.div`
    margin: 0 24px;

    li {
        list-style: none;
        color: ${({ theme }) => theme.secondary};

        span {
            font-weight: 700;
            color: ${({ theme }) => theme.primary};
        }
    }

    p {
        margin: 0;

        text-align: center;
        font-weight: 700;
        font-size: 14px;
        color: ${({ theme }) => theme.secondary};

        span {
            font-size: 30px;
            color: ${({ theme }) => theme.primary};
        }
    }
`;

export const Button = styled.button`
    height: 38px;

    margin: 0 10px;

    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
`;
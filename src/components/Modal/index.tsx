import { useState, useEffect, ReactChildren, ReactChild } from 'react';

import {
    Container,
    Content,
    Header,
    HeaderColumn,
    Title,
    ButtonExit,
    IconExit
} from './styles';

interface ModalProps {
    show: boolean;
    title: string;
    children?: ReactChildren | ReactChild;
}

export const Modal = ({ show, title, children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(show);

    const handleShow = () => setIsOpen(old => !old);

    return (
        <Container show={isOpen}>
            <Content>
                <Header>
                    <HeaderColumn>
                        <ButtonExit onClick={ handleShow }>
                            <IconExit/>
                        </ButtonExit>
                    </HeaderColumn>
                    <Title>{ title }</Title>
                    <HeaderColumn>

                    </HeaderColumn>
                </Header>

                { children }
            </Content>
        </Container>
    );
}
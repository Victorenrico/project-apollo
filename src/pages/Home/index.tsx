
import {
    Container,
    Header,
    Title,
    Credits,
    Content,
    Chassi
} from './styles';

import ChassiImg from '../../assets/Chassi.svg';

export const Home = () => {

    return (
        <Container>
            <Header>
                <Title>Project Apollo</Title>
                <Credits>Created by Victor Codonho @ 2021</Credits>
            </Header>

            <Content>
                <Chassi src={ChassiImg} width="100" />
            </Content>
        </Container>
    );
}
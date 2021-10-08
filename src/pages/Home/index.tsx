
import { Tire } from '../../components/Tire';
import { TireInfo } from '../../components/TireInfo';

import {
    Container,
    Tires,
    TireContent,
    Chassi
} from './styles';

import ChassiImg from '../../assets/Chassi.svg';

export const Home = () => {

    return (
        <Container>
            <Tires>
                <TireContent style={{ marginTop: -55, flexDirection: 'row-reverse' }}>
                    <Tire activated={false} />
                    <TireInfo />
                </TireContent>
                <TireContent style={{ marginBottom: -55, flexDirection: 'row-reverse' }}>
                    <Tire activated={true} />
                    <TireInfo />
                </TireContent>
            </Tires>
            <Chassi src={ChassiImg} width="130" />
            <Tires>
                <TireContent style={{ marginTop: -55 }}>
                    <Tire activated={true} />
                    <TireInfo />
                </TireContent>
                <TireContent style={{ marginBottom: -55 }}>
                    <Tire activated={false} />
                    <TireInfo />
                </TireContent>
            </Tires>
        </Container>
    );
}
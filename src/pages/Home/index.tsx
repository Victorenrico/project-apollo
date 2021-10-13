import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Tire } from '../../components/Tire';
import { TireInfo } from '../../components/TireInfo';
import { Modal } from '../../components/Modal';
import { CardTire } from '../../components/CardTire';

import {
    Container,
    Tires,
    TireContent,
    Chassi,
    CardTires
} from './styles';

import ChassiImg from '../../assets/Chassi.svg';

export const Home = () => {

    const tires = [
        {
            photo: 'tire.png',
            brand: 'Bridgestone',
            size: '265/60R18',
            rim: '18',
            price: '850,00'
        },
        {
            photo: 'tire.png',
            brand: 'Bridgestone',
            size: '265/60R18',
            rim: '18',
            price: '850,00'
        },
        {
            photo: 'tire.png',
            brand: 'Bridgestone',
            size: '265/60R18',
            rim: '18',
            price: '850,00'
        }
    ]

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
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
            </DndProvider>

            <Modal 
                show={true}
                title="Escolha um Pneu"
            >
                <CardTires>
                    <CardTire 
                        data={tires[0]}
                    />
                    <CardTire 
                        data={tires[0]}
                    />
                    <CardTire 
                        data={tires[0]}
                    />
                    <CardTire 
                        data={tires[0]}
                    />
                </CardTires>
            </Modal>
        </Container>
    );
}
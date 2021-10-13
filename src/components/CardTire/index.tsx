
import TireImg from '../../assets/tire.png';

import {
    Container,
    Photo,
    Content,
    Button
} from './styles';

interface Data {
    photo: string;
    brand: string;
    size: string;
    rim: string;
    price: string;
}

interface CardTireProps {
    data: Data;
}

export const CardTire = ({ data }: CardTireProps) => {

    return (
        <Container>
            <Photo src={TireImg} />
            <Content>
                <li>Marca: <span>{ data.brand }</span></li>
                <li>Medida: <span>{ data.size }</span></li>
                <li>Aro: <span>{ data.rim }</span></li>

                <p>
                    R$ {` `}
                    <span>{data.price}</span>
                </p>
            </Content>

            <Button>
                Selecionar
            </Button>
        </Container>
    );
}
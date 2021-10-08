
import {
    Container,
    TextLine,
    TextName,
    TextValue
} from './styles';

export const TireInfo = () => {

    return (
        <Container>
            <TextLine>
                <TextName>Marca:</TextName>
                <TextValue>Bridgestone</TextValue>
            </TextLine>
            <TextLine>
                <TextName>Aro:</TextName>
                <TextValue>18</TextValue>
            </TextLine>
            <TextLine>
                <TextName>Medida:</TextName>
                <TextValue>265/60R18</TextValue>
            </TextLine>
        </Container>
    );
}
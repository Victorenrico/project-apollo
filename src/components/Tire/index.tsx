
import {
    Container,
    Rubber,
    Juice,
    IconAdd,
    RubberText
} from './styles';

interface TireProps {
    activated: boolean;
    top?: number;
    bottom?: number;
}

export const Tire = ({ activated, top, bottom }: TireProps) => {

    const TireAdded = () => (
        <Rubber 
            activated={true}
            style={{
                marginTop: bottom ? bottom : 0,
                marginBottom: top ? top : 0
            }}
        >
            <Juice />
            <Juice />
            <Juice />
            <Juice />
            <Juice />
        </Rubber>
    );

    const TireAdd = () => (
        <Rubber 
            activated={false}
            style={{
                marginTop: bottom ? bottom : 0,
                marginBottom: top ? top : 0
            }}
        >
            <IconAdd />
            <RubberText>Add</RubberText>
        </Rubber>
    );

    return (
        <Container>
            {activated ? (
                <TireAdded />
            ) : (
                <TireAdd />
            )}
        </Container>
    );
}
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Content from './Content.jsx';

const CharCards = () => {
        return (
            <CardGroup>
                {Content.map((character, i) => (
                <Card className="bg-dark text-white cardStyle" style={{ width: '18rem', height: 'fit-content' }} key={i}>
                    <Card.Img variant="top" src={character.img} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                            {character.descriptor}
                        </Card.Text>
                        <a href={character.path} class="stretched-link"></a>
                    </Card.Body>
                </Card>
                ))
                }
            </CardGroup>
        )
    }

export default CharCards;
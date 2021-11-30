import { Card, Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
// import Content from './Content.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {selectContent, deleteContent} from './state/contentSlice';

const CharCards = () => {
    const dispatch = useDispatch();
    const Content = useSelector(selectContent);
    console.log(Content)

    const deleteHandler = (index) => {
        console.log(index)
        dispatch(deleteContent(index))
    }
    return (
        <CardGroup>
            {Content.map((character, i) => {
                if (i !== 0) {
                return (   
                <Card className="bg-dark text-white cardStyle" style={{ width: '18rem', height: 'fit-content' }} key={i}>
                    <Card.Img variant="top" src={character.img} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                            {character.descriptor}
                        </Card.Text>
                        <a href={character.path} class="stretched-link"></a>
                        <Button variant='warning'onClick={() => deleteHandler(index)}>Delete</Button>
                    </Card.Body>
                </Card>
            )}})
                }
        </CardGroup>
    )
}

export default CharCards;
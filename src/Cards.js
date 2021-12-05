import { Card, Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
// import Content from './Content.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {selectContent, deleteContent} from './state/contentSlice';
import { Link } from 'react-router-dom';

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
                           <Link to = {`/blog/${i}`}><Card.Img variant="top" src={Content[i].img}/></Link>
                            <Card.Body>
                                <Card.Title>{Content[i].name}</Card.Title>
                                <Card.Text>
                                    {Content[i].descriptor}
                                </Card.Text>
                                <Button variant='info' ><Link to = {`/blog/${i}`}>Learn More</Link></Button>
                                <Button variant='warning' onClick={() => deleteHandler(i)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            })
            }
        </CardGroup>
    )
}

export default CharCards;
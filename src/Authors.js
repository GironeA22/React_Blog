import Content from './Content';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const popoverBottom = ( i ) => {
    console.log(i)
    return (
        <>
            <Popover id="popover-positioned-bottom" title="Popover bottom">
                <strong>{Content[i].name}</strong>
            </Popover>
        </>
    )
};

const Authors = () => {
    return (
        <>
            {
                Content.map((character, i) => (
                    <OverlayTrigger trigger='click' placement="bottom" overlay={popoverBottom(i)}>
                        <Popover className='Popuptext' id="popover-positioned-bottom" title="Popover bottom" key={i}>
                            <img className='avatars' src={character.avatar} alt='' />
                            <p>{character.bio}</p>
                        </Popover>
                    </OverlayTrigger>
                )
                )
            }
        </>
    )
}

export default Authors


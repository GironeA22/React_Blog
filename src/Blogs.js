import {useSelector} from 'react-redux';
import {selectContent} from './state/contentSlice';
import { useParams } from 'react-router';

const Blogs = () => {
    const {index} = useParams();
    const content = useSelector(selectContent);
    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    return (
        <div>
            <img className='introImg' src={content[index].introImg} alt='' />
            <h4>{content[index].content}</h4>
            <div>Last updated {date}</div>
        </div>
    )
}

export default Blogs;
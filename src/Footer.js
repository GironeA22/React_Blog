import {useSelector} from 'react-redux';
import {selectContent} from './state/contentSlice';

const Footer = () => {
  const blog = useSelector(selectContent);
    return (
<footer class="footer py-3 bg-dark text-white">
  <div>
    <span>
    <a href='/'>Home</a>
    {blog.map((item, index) => {
      return (
      <a href={`/blog/${index}`}>{item.footerName} </a>
      )
    })}
    </span>
  </div>
</footer>
    )
}

export default Footer;
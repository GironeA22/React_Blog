const Blogs = (props) => {
    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    return (
        <div>
            <img className='introImg' src={props.content.introImg} alt='' />
            <h4>{props.content.content}</h4>
            <div>Last updated {date}</div>
        </div>
    )
}

export default Blogs;
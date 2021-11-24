const Blogs = (props) => {
    return(
        <div>
            <img src={props.content.introImg} alt=''/>
            <h4>{props.content.content}</h4>
        </div>
    )
}

export default Blogs;
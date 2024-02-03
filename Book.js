import "./Book.css"

const Book = (props) => {

    const clickHandle = () => {
        console.log(title)
    }

    const ShowMe = () => {
        alert('Sold Out')
    }

    const {img,title,author,price} = props
    return(
        <article className="book">
        <img onClick={(ShowMe)}src={img} alt=""/>
        <h1 onClick={(clickHandle)}>{title}</h1>
        <h3>{author}</h3>
        <p>{price}</p>
        </article>
    )
};



export default Book
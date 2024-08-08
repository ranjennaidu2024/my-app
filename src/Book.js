const Book = (props) => {
  const { img, title, author, number } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

//just to show you can use two approach , just add expor before const above , where need to follow same name
//if use export default then when import can put whatever name you wanted by specifying the path
export default Book

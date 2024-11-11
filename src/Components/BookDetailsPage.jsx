const BookDetails = ({bookdetail, setBookList }) => {
  
  const { title, author, available, coverimage, description } = bookdetail;
  const handleGoBack = () => {
    setBookList(true);
  }
  return (
    <>
      <img src={coverimage}
        width="350px"
        height="350px"
        alt={`cover of ${title}`}
      />
      <h2>{title}</h2>
      <h4>by {author}</h4>
      <p>{description}</p>
      <p>Availability:{available}</p>
      <button onClick={handleGoBack}>Go Back</button>
      
    </>
  )
}

export default BookDetails










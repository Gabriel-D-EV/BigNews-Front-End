export function Card({ news }) {
  return (
    <section>
      <h2>{news.title}</h2>
      <p>{news.text}</p>
      <img src={news.image} alt="Imagem do Texto" />
      <i className="bi bi-hand-thumbs-up"></i>
      <span>{news.likes}</span>
      <i className="bi bi-chat-left"></i>
      <span>{news.comments}</span>
    </section>
  );
}

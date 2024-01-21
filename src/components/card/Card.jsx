export function Card({ news }) {
  return (
    <section>
      <article>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="Imagem do Texto" />
      </article>

      <article>
        <i className="bi bi-hand-thumbs-up"></i>
        <span>{news.likes}</span>
        <i className="bi bi-chat-left"></i>
        <span>{news.comments}</span>
      </article>
    </section>
  );
}

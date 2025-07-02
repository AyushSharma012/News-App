function NewsItem({ title, description, src, url }) {
  const shortDesc = (description || "").length > 100
    ? description.slice(0, 100) + "..."
    : "No description available at the moment. Please check back later for more information and updates.";
    
  return (
    <div className="card bg-dark text-light d-inline-block mb-3 mx-3 my-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src} alt="" className="card-img-top" style={{ height: "200px", width: "100%" }} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {shortDesc}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;

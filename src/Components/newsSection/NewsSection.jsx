import "./newsSection.scss";

const NewsSection = ({ data }) => {
  return (
    <section data-aos="zoom-in-down" className="news">
      {data?.map((item) => (
        <div key={item.id} className="newItem">
          <div className="forImg">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="whoNew">{item.name}</div>
          <div className="newTitle">{item.title}</div>
          <div className="newText">{item.text}</div>
        </div>
      ))}
    </section>
  );
};

export default NewsSection;

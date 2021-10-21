import { Route, useHistory, Link, useParams } from "react-router-dom";
import "./Style.css";
const Cards = ({ name, img, id, index, genres, runtime, summary }) => {
  const param = useParams();
  const history = useHistory();
  // const Details = () => {
  //   history.push(`/Summary/${id}`);
  // };
  return (
    <div className="card">
      <div className="details">
        <img src={img} className="poster" />
        <p className="name mb-s">{name}</p>
        <p className="runtime mb-s">
          {runtime === null ? (runtime = "N/A") : (runtime = `${runtime} mins`)}
        </p>
        <p className="genre mb-s">{genres}</p>
        <button className="summary">
          <Link to={`/Summary/${id}`} className="link">
            {" "}
            More Details{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Cards;

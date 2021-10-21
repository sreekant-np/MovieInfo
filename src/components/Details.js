import { Link, Route } from "react-router-dom";
import { Register } from "./Register";
const Details = (props) => {
  const setImage = localStorage.setItem("img", props.img);
  const setName = localStorage.setItem("name", props.name);
  const setRuntime = localStorage.setItem("runtime", props.runtime);
  return (
    <div>
      <div className="container">
        <div>
          <img src={props.img} className="big-poster" />
        </div>
        <div className="m-details">
          <h1 className="m-name">{props.name}</h1>
          <p className="genre mb-s ft-size">{props.genres}</p>
          <p className="m-sum">{props.summary.replace(/(<([^>]+)>)/gi, "")}</p>
          <button className="btn-book-clr btn">
            <Link
              to={{
                pathname: `/register/${props.id}`,
                id: {
                  id: `${props.id}`,
                },
                name: {
                  name: `${props.name}`,
                },
                summary: {
                  summary: `${props.summary}`,
                },
                img: {
                  img: `${props.img}`,
                },
              }}
              className="link">
              Book Now
            </Link>
          </button>

          <a
            href={props.site}
            target="_blank"
            rel="noopener noreferrer"
            className="link">
            <button className="trailer btn btn-trail-clr">Visit Site</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Details;

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import Details from "./Details";

const Summary = () => {
  const Param = useParams();

  const [info, setInfo] = useState([]);
  useEffect(async () => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setInfo(res.data));
  }, []);
  document.title = "Summary";
  let detailsM = info.find((datas) => datas.show.id === parseInt(Param.id));
  if (info.length !== 0) {
    console.log(detailsM);
  }
  return (
    <div className="sum">
      {info.length !== 0 ? (
        <Details
          id={detailsM.show.id}
          name={detailsM.show.name}
          img={detailsM.show.image.original}
          name={detailsM.show.name}
          summary={detailsM.show.summary}
          genres={detailsM.show.genres[0]}
          site={detailsM.show.officialSite}
          runtime={detailsM.show.runtime}
        />
      ) : (
        <div>Empty data field</div>
      )}
    </div>
  );
};
export default Summary;

import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const MovieList = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
      setPosts(res.data);
    });
  }, []);
  console.log(post);

  return (
    <div className="MovieList">
      <h1 className="heading">
        Movie List <span>&#10549;</span>
      </h1>
      <div>
        {post.map((post, index) => (
          <Cards
            key={index}
            id={post.show.id}
            img={post.show.image.medium}
            imgOrg={post.show.image.orginal}
            name={post.show.name}
            runtime={post.show.runtime}
            genres={post.show.genres[0]}
            summary={post.show.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

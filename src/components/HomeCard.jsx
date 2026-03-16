import React from "react";

const HomeCard = ({ src, alt }) => {
  return (
    <img
      src={src}
      className="xl:aspect-[9/12] max-w-[300px] w-full"
      alt={alt}
    />
  );
};

export default HomeCard;

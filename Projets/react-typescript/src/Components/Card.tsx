import React from "react";


type CardProps = {
    title: string;
    content: string;
};
const Card = (props:CardProps) => {
    // console.log(props);
    
  return (
  <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
  );
};

export default Card;

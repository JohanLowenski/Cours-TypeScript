import React, { useState, useRef, useEffect } from "react";
import Card from "./Components/Card";

const App = () => {
  const [cardsData, setCardsData] = useState([{ title: "Picasso", content: "Peintre du 20ème siècle", id: 1 }, { title: "Matisse", content: "Peintre du 20ème siècle", id: 2 }, { title: "Monet", content: "Peintre du 19ème siècle", id: 3 }]);
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log(btnRef);
    const handleResize = (e:Event) => {
      console.log('Resized',e);
    }
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  }, []);
  return (
    <div className="App">
      {cardsData.map((item,index) => (
        <Card key={index}  title={item.title} content={item.content} />
      ))}

      {/* <Card title="La carte" content="Le contenu" /> */}
      <button ref={btnRef} >Submit</button>
    </div>
  );
};

export default App;

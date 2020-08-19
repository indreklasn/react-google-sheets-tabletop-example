import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1TK1Qj6kfA90KbmFAdnIOtKUttpJUhZoZuOPy925c6nQ",
      simpleSheet: true
    })
      .then((data) => {
        setData([...data]);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <ul>
      {data.map((item, i) => (
        <Fragment key={i}>
          <li>URL -- {item.URL}</li>
          <li>Email - {item.email}</li>
          <li>Token - {item.token}</li>
          <br />
        </Fragment>
      ))}
    </ul>
  );
}

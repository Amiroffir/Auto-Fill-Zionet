import "./App.css";
import { Signup } from "./comps/signup/signup";
import { useState } from "react";

function App() {
  const [js, setJs] = useState(
    "javascript:(function () {collection = document.getElementsByTagName('input');collection[0].value =" //{};})();
  );
  let jsRep = js;
  const getDetails = (myName, myEmail, myPhone) => {
    jsRep += '"' + myName + '"' + ";";
    jsRep += 'collection[0].style.backgroundColor = "lightgreen";';
    jsRep += "collection[1].value = ";
    jsRep += '"' + myEmail + '"' + ";";
    jsRep += 'collection[1].style.backgroundColor = "lightgreen";';
    jsRep += "collection[2].value = ";
    jsRep += '"' + myPhone + '"' + ";";
    jsRep += 'collection[2].style.backgroundColor = "lightgreen";';
    jsRep += 'collection[3].style.backgroundColor = "red";';
    jsRep += 'collection[4].value = "Haim/Elias";';
    jsRep += 'collection[4].style.backgroundColor = "lightgreen";';
    jsRep += "collection[5].checked = true;";
    jsRep += 'collection[7].style.backgroundColor = "red";';

    jsRep +=
      'collection[3].oninput = () => {collection[3].style.backgroundColor = "lightgreen";};';

    jsRep +=
      'collection[7].oninput = () => {collection[7].style.backgroundColor = "lightgreen";};';

    jsRep += "})();";
    setJs(jsRep);
  };

  return (
    <div className="app">
      <h1 className="title">Bookmark maker</h1>
      <h3 className="title3">Auto Fill ZioNet Form</h3>
      <Signup getDetails={getDetails} js={js} />
    </div>
  );
}

export default App;

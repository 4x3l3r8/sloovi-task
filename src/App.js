import "./App.css";
import Main from "./components/Main";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="row g-0 app-container">
      <div className=" col-md-2 col-sm-12">
        <SideNav />
      </div>
      <div className="col-10">
        <div className="container-fluid p-0">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;

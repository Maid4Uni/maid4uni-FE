import { Outlet } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header";


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
     
     
    </div>
  );
}

export default App;

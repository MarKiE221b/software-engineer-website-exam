import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Tables from "./pages/Tables";
import About from "./pages/About";
import Forms from "./pages/Forms";
import { collection } from "firebase/firestore";
import { database } from "./api/firebaseConfig";
import "./stylesheets/styles.css"

function App() {
  const databaseReference = collection(
    database,
    "firebase-firestore-softwareengineers collection"
  );

  return (
    <div>
      <header>
        <Navibar />
      </header>
      <main className="App d-flex flex-column min-vh-100">
        <Routes>
          <Route
            path="/"
            element={<Forms databaseReference={databaseReference} />}
          />
          <Route
            path="/Tables"
            element={<Tables databaseReference={databaseReference} />}
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <footer className="bg-light text-center w-100">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

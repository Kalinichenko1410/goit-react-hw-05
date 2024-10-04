import { Routes, Route  } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route path="/movies" element={<h1>MoviesPage</h1>} />
</Routes>

</div>
);
};
export default App;
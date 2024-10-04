import { Routes, Route  } from "react-router-dom";
import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<MoviesPage/>} />
      <Route path="*" element={<NotFound/>} />
</Routes>

</div>
);
};
export default App;
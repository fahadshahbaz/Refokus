import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full bg-zinc-900 text-white">
    <Navbar />
    <Work />
    <Stripes />
    <Products />
    </div>
  );
}

export default App;

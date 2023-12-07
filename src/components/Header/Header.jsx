import data from "../../data/data.json";
import Navbar from "../Navbar/Navbar";
import Heading from "./Heading";
import DarkModeBtn from "./DarkModeBtn";

export function Header() {
  return (
    <header className="flex flex-row h-12 fixed z-40 top-0 w-full bg-white text-sm dark:bg-gray-800 shadow shadow-gray-300 dark:shadow-none">
      <nav className="w-full px-3.5 flex flex-row items-center">
        <Heading heading={data.landing[0].heading} />
        <Navbar />
        <DarkModeBtn />
      </nav>
    </header>
  );
}

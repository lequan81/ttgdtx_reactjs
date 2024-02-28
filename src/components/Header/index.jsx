import Heading from "./Heading";
import DarkModeBtn from "./DarkModeBtn";
import Navbar from "@components/Navbar";

export default function Header() {
  return (
    <header className="flex flex-row h-10 xl:h-12 fixed z-20 top-0 w-full bg-white text-sm dark:bg-gray-800 shadow shadow-gray-300 dark:shadow-none">
      <nav className="relative w-full mx-auto sm:mx-0 sm:px-3 sm:flex sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-row w-full h-full items-center">
          <Heading />
          <Navbar />
          <DarkModeBtn />
        </div>
      </nav>
    </header>
  );
}

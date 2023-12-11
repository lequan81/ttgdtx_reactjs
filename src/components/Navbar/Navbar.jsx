import NavbarItem from "./NavbarItem";
import DropDownMenu from "./DropDownMenu";
import data from "../../data/data.json";
export default function Navbar() {
  return (
    <div className="container flex items-center justify-end h-full w-fit sm:w-full text-gray-700 dark:text-gray-300 order-3 sm:order-2">
      <div className="sm:hidden">
        <button
          type="button"
          className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      {data.menu.map((item) => {
        return item.isSubmenu ? (
          <DropDownMenu key={item.name} data={item} />
        ) : (
          <NavbarItem
            key={item.name}
            title={item.title}
            path={item.path}
            isSubmenu={false}
          />
        );
      })}
    </div>
  );
}

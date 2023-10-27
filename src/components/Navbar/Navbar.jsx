import NavbarItem from "./NavbarItem";
import DropDownMenu from "./DropDownMenu";
import data from "../../data/data.json";
export default function Navbar() {
  return (
    <div className="container border border-dashed border-green-400 flex items-center justify-end h-full w-full text-gray-600 dark:text-gray-300">
      {/* <a
        href="#"
        className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-[3px] border-blue-500 mx-1.5 sm:mx-6 font-medium text-base"
      >
        home
      </a> */}

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

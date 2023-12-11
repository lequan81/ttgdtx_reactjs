import DropDownButton from "./DropDownButton";
import NavbarItem from "./NavbarItem";

function DropDownMenu({ data }) {
  return (
    <div className="hs-dropdown text-base group [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] hidden sm:block">
      <DropDownButton title={data.title} path={data.path} />
      <div className="text-base hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:min-w-fit z-10 bg-white sm:shadow-md rounded-md px-1.5 py-1 dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700 before:absolute top-full border border-gray-300 before:-top-8 before:left-0 before:w-full before:h-8 hidden">
        {data.children.map((item) => {
          return (
            <NavbarItem
              key={item.id}
              title={item.title}
              path={`${data.path}${item.path}`}
              isSubmenu={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DropDownMenu;

function TeamItem({ name, onPosition, avatar, fallbackAvatar }) {
  return (
    <div className="flex">
      <img
        loading="lazy"
        className="object-cover sm:w-20 sm:h-20 w-16 h-16 mr-4 rounded-full shadow-md transition-shadow shadow-gray-400 dark:shadow-none"
        src={avatar || fallbackAvatar}
        alt={name}
      />

      <div className="flex flex-col justify-center">
        <p className="sm:text-lg text-base font-medium sm:font-bold">{name}</p>
        <p className="text-sm text-gray-800 dark:text-gray-400">{onPosition}</p>
      </div>
    </div>
  );
}

export default TeamItem;

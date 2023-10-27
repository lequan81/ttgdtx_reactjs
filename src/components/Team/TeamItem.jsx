function TeamItem({ name, job, coverUrl }) {
  return (
    <div className="flex">
      <img
        className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
        src={coverUrl}
        alt={job}
      />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-gray-800 dark:text-gray-400">{job}</p>
      </div>
    </div>
  );
}

export default TeamItem;

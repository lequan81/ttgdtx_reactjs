function HashtagItem({ title }) {
  return (
    <div
      data-nosnippet
      className="px-3 py-1 max-w-xs rounded-sm cursor-default dark:bg-blue-600 dark:text-white text-blue-600 bg-sky-100 sm:text-sm text-xs"
    >
      {title}
    </div>
  );
}

export default HashtagItem;

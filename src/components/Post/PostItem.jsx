function BlogItem() {
  return (
    <div className="overflow-hidden duration-300 bg-white dark:bg-gray-800 rounded shadow-md shadow-gray-400 dark:shadow-none">
      <img
        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="p-5">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-indigo-600 hover:text-indogo-700"
            aria-label="Category"
            title="traveling"
          >
            traveling
          </a>
          <span className="text-gray-600 dark:text-gray-400"> - </span>
          <span className="text-gray-600 dark:text-gray-400">28 Dec 2020</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Film It!"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-gray-900 dark:text-white"
        >
          Film It!
        </a>
        <p className="mb-2 text-gray-700 dark:text-gray-200">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-500 hover:text-blue-600"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default BlogItem;

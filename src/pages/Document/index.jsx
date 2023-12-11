import { useState, useEffect } from "react";
import { getDocument } from "../../services/getDocument";
import DocumentItem from "./DocumentItem";

export function Document() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDocument();
      setDocuments(data);
    })();
  }, []);

  return (
    <section className="flex flex-col h-full overflow-y-auto mt-12 mb-10 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl text-lg uppercase font-bold mb-2 mt-4 whitespace-pre-line sm:whitespace-normal">
          Văn bản tham khảo
        </h1>
      </div>
      <div className="shadow-md shadow-gray-700 dark:shadow-none rounded flex w-full h-full">
        <div className="px-6 py-2.5 mx-auto w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-4 sm:max-w-full">
            {documents.map((doc) => (
              <DocumentItem
                key={doc.id}
                title={doc.title}
                description={doc.description}
                fileName={doc.fileName}
                url={doc.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

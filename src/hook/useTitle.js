import { useEffect, useRef } from "react";

export default function useTitle(title) {
  const documentDefined = typeof document !== "undefined";
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;

    if (document.title !== title) document.title = title;
    let oldTitle = originalTitle.current;

    return () => {
      document.title = oldTitle;
    };
  }, [documentDefined, title]);
}

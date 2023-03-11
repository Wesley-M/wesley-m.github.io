import { useEffect, useState } from "react";

/**
 * Manages array in page format
 * */
export function useClientPagination(data = [], pageSize = 6) {
  /**
   * The content of the current page
   */
  const [pageContent, setPageContent] = useState([]);

  /**
   * The current page number
   */
  const [page, setPage] = useState(1);

  /**
   * The total number of pages
   */
  const totalOfPages = Math.ceil(data.length / pageSize);

  /**
   * Manages changes in page
   */
  const handlePageChange = (value) => {
    setPage(value);
  }

  /**
   * Calculating the start and end indexes of the current page
   */
  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);

    setPageContent(data.slice(startIndex, Math.max(endIndex, 1)));
  }, [page]);

  return {
    page,
    handlePageChange,
    pageContent,
    totalOfPages
  };
}
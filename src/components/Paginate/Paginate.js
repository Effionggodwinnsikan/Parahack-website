import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import BlogItem from "../BlogItem/BlogItem";

export default function Paginate(props) {
  const { bloglist } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems = bloglist.slice(itemOffset, endOffset);
    setPageCount = Math.ceil(bloglist.length / itemsPerPage);
  }, [itemOffset, itemsPerPage, bloglist]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % bloglist.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        {currentItems.map((blogs) => {
          return (
            <div>
              <BlogItem />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

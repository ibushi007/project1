import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";
const rawCards = require("../datas/card.json");

const PER_PAGE = 10;

function CardList({ query }) {
  const router = useRouter();
  const { page = "1", s = "" } = query;
  const [currentPageIdx, setCurrentPageIdx] = useState(parseInt(page));
  const [filterInput, setFilterInput] = useState(s);

  const filteredCards = getFilteredCards(rawCards, filterInput);

  const totalPages = Math.ceil(filteredCards.length / PER_PAGE);
  const pagerArray = new Array(totalPages).fill(null);

  const maxCardIdx = PER_PAGE * currentPageIdx;
  const minCardIdx = maxCardIdx - PER_PAGE;
  const visibleCards = filteredCards.slice(
    minCardIdx,
    maxCardIdx
  );

  const filterInputHandler = (e) => {
    setFilterInput(e.target.value);
    pagerHandler(1);
  };

  const pagerHandler = (pageIdx) => {
    setCurrentPageIdx(pageIdx);
    router.push(`/?page=${pageIdx}`);
  };

  return (
    <>
      <Header />
      <div>
        <div
          className="text-center mt-4"
        >
          <label>
            <span>Name: </span>
            <input
              type="text"
              onChange={filterInputHandler}
              value={filterInput}
            />
          </label>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="card my-4" style={{ width: "20rem" }}>
            <ul className="list-group list-group-flush">{visibleCards}</ul>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button
                  rel="previous"
                  className="page-link"
                  onClick={() => pagerHandler(currentPageIdx - 1)}
                  disabled={currentPageIdx <= 1}
                >
                  Previous
                </button>
              </li>

              {pagerArray.map((_, i) => {
                const _pagerIndex = i + 1;

                return (
                  <li key={_pagerIndex} className="page-item">
                    <button
                      className="page-link page-number"
                      onClick={() => pagerHandler(_pagerIndex)}
                      disabled={_pagerIndex == currentPageIdx}
                    >
                      {_pagerIndex}
                    </button>
                  </li>
                );
              })}

              <li className="page-item">
                <button
                  rel="next"
                  className="page-link"
                  onClick={() => pagerHandler(currentPageIdx + 1)}
                  disabled={currentPageIdx >= totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

const getFilteredCards = (cards, filterInput) => {
  return cards
    .filter((card) => {
      if (filterInput === "") return true;
      return card.name.includes(filterInput);
    })
    .map((card) => (
      <li key={card.id} className="cards list-group-item">
        <Link
          href={{
            pathname: `/${card.id}`,
          }}
        >
          <a className="name" data-test-id="element">
            {card.id} {card.name}
          </a>
        </Link>
      </li>
    ));
};


export async function getServerSideProps({ query }) {
  return {
      props: { query }
  }
}
export default CardList;

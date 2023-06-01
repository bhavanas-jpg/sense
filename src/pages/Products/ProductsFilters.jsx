import React, { useRef, useState } from "react";
import { useData } from "../../context/DataContext";
import { actionTypes, sortBy, filters } from "../../reducer/actionTypes";
import "./ProductsFilter.css";

const Filters = () => {
  const [filterContainer, setFilterContainer] = useState(true);
  const { state, dispatch } = useData();
  // const content = useRef(null);
  // const [height, setHeight] = useState("0px");

  const ratings = ["4", "3", "2", "1"];
  const maxValue = state.productsData.reduce(
    (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
    0
  );

  // const toggleFilter = () => {
  //   // setFilterContainer(!filterContainer);
  //   // setHeight(filterContainer ? "0px" : `${content.current.scrollHeight}px`);
  // };



  return (
    <main>
      <p className="filter-icon" onClick={()=>{
        // toggleFilter()
        setFilterContainer(prev => !prev)
      }}>
        Filters
        <i className="filter-icon fa fa-solid fa-filter"></i>
      </p>

      {/* {
      filterContainer && */}
      <div
        // ref={content}
        style={{ maxHeight:  filterContainer ? "0px" : "400px" }}
        className="accordion__content"
      >
        <div className="filter-container">
          <div>
            <button
              className="clear-all--btn"
              onClick={() => dispatch({ type: actionTypes.CLEAR_FILTER })}
            >
              Clear All
            </button>
          </div>
          <section className="filter-subcontainer">
            {/* category checkbox */}
            <div>
              <h4 className="mb-1">Categories</h4>
              {Object.keys(state.filters.categories).map((category) => (
                <div key={category} className="filter-input">
                  <label>
                    <input
                      type="checkbox"
                      name="category-checkbox"
                      checked={state.filters.categories[category]}
                      onChange={() =>
                        dispatch({
                          type: actionTypes.CHANGE_FILTER,
                          payload: {
                            filterType: filters.CATEGORIES,
                            filterValue: {
                              ...state.filters.categories,
                              [category]: !state.filters.categories[category],
                            },
                          },
                        })
                      }
                    />
                    {category}
                  </label>
                </div>
              ))}
            </div>
            {/* ratings radio */}
            <div>
              <h4>Ratings</h4>
              {ratings.map((rateValue) => (
                <div key={rateValue} className="filter-input">
                  <label>
                    <input
                      type="radio"
                      value={rateValue}
                      name="rating-radio"
                      checked={
                        state.filters.rating === rateValue ? true : false
                      }
                      onChange={() =>
                        dispatch({
                          type: actionTypes.CHANGE_FILTER,
                          payload: {
                            filterType: filters.RATING,
                            filterValue: rateValue,
                          },
                        })
                      }
                    />
                    {rateValue} stars {"&"} above
                  </label>
                </div>
              ))}
            </div>
            {/* sortBy radio */}
            <div>
              <h4>Sort By Price</h4>
              {Object.values(sortBy).map((sortValue) => (
                <div key={sortValue} className="filter-input">
                  <label>
                    <input
                      type="radio"
                      name="sort-radio"
                      value={sortValue}
                      checked={
                        state.filters.sortBy === sortValue ? true : false
                      }
                      onChange={() =>
                        dispatch({
                          type: actionTypes.CHANGE_FILTER,
                          payload: {
                            filterType: filters.SORT_BY,
                            filterValue: sortValue,
                          },
                        })
                      }
                    />
                    {sortValue}
                  </label>
                </div>
              ))}
            </div>
            {/* price ranger */}
            <div>
              <h4>Price Ranger</h4>
              <div className="filter-input">
                <label htmlFor="rangeInput" className="range-label">
                  <span>0</span>
                  <span>{Math.ceil(maxValue / 2)}</span>
                  <span className="mr-1">{maxValue}</span>
                </label>
              </div>
              <div>
                <input
                  type="range"
                  name="rangeInput"
                  value={state.filters.priceRange}
                  min="0"
                  max={maxValue}
                  onChange={(e) => {
                    dispatch({
                      type: actionTypes.CHANGE_FILTER,
                      payload: {
                        filterType: filters.PRICE_RANGE,
                        filterValue: e.target.value,
                      },
                    });
                  }}
                />
              </div>
            </div>
            {/* price ranger: end */}
          </section>
        </div>
      </div>
      {/* }  */}
    </main>
  );
};

export default Filters;

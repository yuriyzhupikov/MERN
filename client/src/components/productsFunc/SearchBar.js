import React from "react";

export const SearchBar = (props) => {

   const handlerFilterTextChange = (e) => {
       props.onFilterTextChange(e.target.value);
   }

    const handlerInStokedOnlyChange = (e) => {
        props.onInStockedOnly(e.target.checked);
    }

    return(
        <form>
            <input
                type="text"
                placeholder="Поиск..."
                value={props.filterText}
                onChange={handlerFilterTextChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={props.inStockOnly}
                    onChange={handlerInStokedOnlyChange}
                />
                <br />
                Only show products in stock
            </p>
        </form>
    )
}
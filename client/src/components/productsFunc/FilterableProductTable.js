import React, {useState} from "react";
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

export const FilterableProductTable = (props) => {
    const [filterText, setFilterText] = useState('');
    const [inStoked, setInStoked] = useState(false);

    const handlerFilterTextChange = (filterText) => {
        setFilterText(filterText);
    };

    const handlerInStokedOnly = (inStokedOnly) => {
        setInStoked(inStokedOnly);
    };

    return(
        <div>
            <SearchBar
                filterText={filterText}
                inStockedOnly={inStoked}
                onFilterTextChange={handlerFilterTextChange}
                onInStockedOnly={handlerInStokedOnly}
            />
            <ProductTable
                filterText={filterText}
                inStocked={inStoked}
                product={props.products}
            />
        </div>
    )
}
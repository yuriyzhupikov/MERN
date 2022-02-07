import React from "react";

export const ProductCategoryRow = (props) => {

    return(
        <tr>
            <th colSpan="2">
                {props.category}
            </th>
        </tr>
    )
}
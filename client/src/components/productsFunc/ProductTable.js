import React from "react";
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";

export const ProductTable = (props) => {
    let lastCategory = null;
    const rows = [];

    props.product.forEach((product) => {
        if (product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1) {
            return;
        }
        if (props.inStocked && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        lastCategory = product.category;

        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
    })

    return(
        <table>
            <thead>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

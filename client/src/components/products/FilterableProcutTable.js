import React from "react";

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handlerFilterTextChange = this.handlerFilterTextChange.bind(this);
        this.handlerInStockChange = this.handlerInStockChange.bind(this);
    }
    handlerFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handlerInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handlerFilterTextChange}
                    onInStockChange={this.handlerInStockChange}/>
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        )
    }
}
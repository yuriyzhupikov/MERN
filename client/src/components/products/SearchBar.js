import React from "react";

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.handlerFilterTextChange = this.handlerFilterTextChange.bind(this);
        this.handlerInStockChange = this.handlerInStockChange.bind(this);
    }
    handlerFilterTextChange(event) {
        this.props.onFilterTextChange(event.target.value);
    }

    handlerInStockChange(event) {
        this.props.onInStockChange(event.target.checked);
    }
    render () {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={this.handlerFilterTextChange}/>
                <p>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={this.handlerInStockChange}/>
                    <br />
                    Only show products in stock
                </p>
            </form>
        )
    }
}
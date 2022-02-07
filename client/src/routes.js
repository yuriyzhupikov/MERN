import React from "react";
import {Route, Routes} from "react-router-dom";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

import {FilterableProductTable} from "./components/productsFunc/FilterableProductTable";
import {PRODUCTS} from './components/products/dataProducts';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {

        return(
            <Routes>
                <Route path="/links" exacl element={<LinksPage/>}/>
                <Route path="/create" exacl element={<CreatePage/>} />
                <Route path="/detail/:id" element={<DetailPage/>} />
                <Route path="/products/" element={<FilterableProductTable products={PRODUCTS}/>} />
                <Route path="*" exacl element={<CreatePage/>} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" exacl element={<AuthPage/>}/>
            <Route path="*" exacl element={<AuthPage/>} />
        </Routes>
    )
}
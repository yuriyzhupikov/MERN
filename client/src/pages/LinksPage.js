import React, {useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/Auth.context";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/linksList";

export const LinksPage = () => {
    const {loading, request} = useHttp();
    const [links, setLinks] = useState([]);
    const {token} = useContext(AuthContext);

    const getLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setLinks(fetched);
        } catch (e) {}
    }, [token, request]);

    useEffect(() =>{
        getLinks();
    }, [getLinks]);

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            {!loading && links && <LinksList linkers={links} />}
        </div>
    );
}
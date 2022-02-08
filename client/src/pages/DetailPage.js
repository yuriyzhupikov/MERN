import React, {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../components/Loader";
import {LinkDescription} from "../components/LinkDescription";
import {AuthContext} from "../context/Auth.context";

export const DetailPage = () => {
    const token = useContext(AuthContext).token;
    const {request, loading} = useHttp();
    const [link, setLink] = useState(null);
    const linkId = useParams().id;

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setLink(fetched);
        } catch (e) {}
    },[token, linkId, request]);

    useEffect(() => {
        getLink();
    }, [getLink]);

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            {!loading && link && <LinkDescription linkId={link}/>}
        </div>
    );
}
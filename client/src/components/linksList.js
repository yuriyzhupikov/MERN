import React from "react";
import {Link} from "react-router-dom";

export const LinksList = (props) => {
    // if (!props.links.length) {
    //     return <p className={'center'}>
    //         Ссылок пока нет
    //     </p>
    // }
    console.log(props.linkers);
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Ссылка от</th>
                <th>Ссылка в</th>
            </tr>
            </thead>

            <tbody>
            {props.linkers.map((link, i) => {
                return (
                    <tr key={link._id}>
                        <td>{i + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Посмотреть</Link>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
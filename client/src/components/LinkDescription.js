export const LinkDescription = (props) => {
    return(
        <>
            <h2>Ссылка</h2>
            <p>Ссылка: <a href={props.linkId.to} target="_blank" rel="noopener noreferrer">{props.linkId.to}</a></p>
            <p>Откуда: <a href={props.linkId.from} target="_blank" rel="noopener noreferrer">{props.linkId.from}</a></p>
            <p>Количество кликов по ссылке: <strong>{props.linkId.clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(props.linkId.date).toLocaleDateString()}</strong></p>
        </>
    )
}
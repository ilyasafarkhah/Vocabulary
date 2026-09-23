function Filter (prop){

    return(
        <ul>
        <li>
        {prop.FilterOptions.map(level =>
            <button key={level} type="button" onClick={() => prop.setLevel(level)}>
                {level}
            </button>
        )}
        </li>
        </ul>
    )
}

export default Filter
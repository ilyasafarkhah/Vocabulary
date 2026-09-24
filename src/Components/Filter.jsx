function Filter (prop){

    return(
        <ul>
        {prop.FilterOptions.map(level =>
            <li key={level}>
                <button key={level} type="button" onClick={() => prop.setLevel(level)}>
                    {level}
                </button>
            </li>
        )}
        </ul>
    )
}

export default Filter
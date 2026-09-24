import "/src/CSS/Filter.css"

function Filter(prop) {

    return (

        <div className="level-filter">

            <span className="filter-label">
                Level
            </span>


            <div className="level-options">

                {
                    prop.FilterOptions.map(level => (

                        <button
                            key={level}
                            type="button"
                            className={
                                prop.selectedLevel === level
                                    ? "level-button selected"
                                    : "level-button"
                            }
                            onClick={() =>
                                prop.setLevel(level)
                            }
                        >
                            {level}
                        </button>

                    ))
                }

            </div>

        </div>
    )
}

export default Filter
import { useNavigate } from "react-router"
import "/src/CSS/Category.css"

function Category(prop) {

    const categories = [
        ...new Set(
            prop.wordList
                .map(word => word.category)
                .filter(Boolean)
        )
    ]

    const navigate = useNavigate()


    function openCategory(category) {

        prop.setCategoryfilter(category)

        navigate("/wordlist")
    }


    return (

        <section className="category-section">

            <div className="section-heading">

                <div>

                    <span className="section-kicker">
                        YOUR COLLECTION
                    </span>

                    <h2>
                        Browse by category
                    </h2>

                </div>


                <span className="category-count">
                    {categories.length} categories
                </span>

            </div>


            {
                categories.length === 0

                    ?

                    <div className="empty-category">

                        <span className="empty-icon">
                            +
                        </span>

                        <div>

                            <strong>
                                No categories yet
                            </strong>

                            <p>
                                Add your first word to
                                start building your collection.
                            </p>

                        </div>

                    </div>

                    :

                    <div className="category-grid">

                        {
                            categories.map(category => {

                                const count =
                                    prop.wordList.filter(
                                        item =>
                                            item.category
                                                .toLowerCase()
                                            ===
                                            category.toLowerCase()
                                    ).length


                                return (

                                    <button
                                        className="category-card"
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            openCategory(category)
                                        }
                                    >

                                        <span className="category-dot" />

                                        <span className="category-name">
                                            {category}
                                        </span>

                                        <span className="category-number">
                                            {count}
                                        </span>

                                        <span className="category-arrow">
                                            →
                                        </span>

                                    </button>
                                )
                            })
                        }

                    </div>
            }


            <button
                type="button"
                className="category-all"
                onClick={() => {

                    prop.setCategoryfilter("")

                    navigate("/wordlist")

                }}
            >
                View all words →
            </button>

        </section>
    )
}

export default Category
import { NavLink } from "react-router"
import Category from "./Category"
import openbook from "/src/Assets/openbook.svg"
import "/src/CSS/Home.css"

function Home(prop) {

    const wordCount = prop.wordList.length

    const categoryCount =
        new Set(
            prop.wordList
                .map(item => item.category)
                .filter(Boolean)
        ).size


    return (

        <section className="home-page">

            <div className="home-hero">

                <div className="hero-copy">

                    <span className="eyebrow">
                        PERSONAL VOCABULARY MANAGER
                    </span>

                    <h1>
                        Learn words.
                        <br />
                        <span>Remember more.</span>
                    </h1>

                    <p>
                        Save new vocabulary, organize it by
                        category and level, then review your
                        personal word bank whenever you need it.
                    </p>


                    <div className="home-actions">

                        <NavLink
                            className="primary-action"
                            to="/addword"
                            onClick={prop.resetWord}
                        >
                            + Add new word
                        </NavLink>


                        <NavLink
                            className="secondary-action"
                            to="/wordlist"
                            onClick={() =>
                                prop.setCategoryfilter("")
                            }
                        >
                            Browse word list
                        </NavLink>

                    </div>

                </div>


                <div className="home-stats">

                    <div className="stat-card">

                        <strong>
                            {wordCount}
                        </strong>

                        <span>
                            Words saved
                        </span>

                    </div>


                    <div className="stat-card">

                        <strong>
                            {categoryCount}
                        </strong>

                        <span>
                            Categories
                        </span>

                    </div>

                    <div className="stat-pic">
                        <img src={openbook} alt="openbook" />
                    </div>

                </div>

            </div>


            <Category
                setCategoryfilter={prop.setCategoryfilter}
                categoryfilter={prop.categoryfilter}
                wordList={prop.wordList}
            />

        </section>
    )
}

export default Home
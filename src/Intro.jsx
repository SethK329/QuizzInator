import React from "react";

export default function Intro(props){
    const [categories, setCategories] = React.useState([{id: 9, name: 'General Knowledge'},
                                                        {id: 10, name: 'Entertainment: Books'}, 
                                                        {id: 11, name: 'Entertainment: Film'},
                                                        {id: 12, name: 'Entertainment: Music'}, 
                                                        {id: 13, name: 'Entertainment: Musicals & Theatres'},
                                                        {id: 14, name: 'Entertainment: Television'},
                                                        {id: 15, name: 'Entertainment: Video Games'},
                                                        {id: 16, name: 'Entertainment: Board Games'},
                                                        {id: 17, name: 'Science & Nature'},
                                                        {id: 18, name: 'Science: Computers'},
                                                        {id: 19, name: 'Science: Mathematics'},
                                                        {id: 20, name: 'Mythology'},
                                                        {id: 21, name: 'Sports'},
                                                        {id: 22, name: 'Geography'},
                                                        {id: 23, name: 'History'},
                                                        {id: 24, name: 'Politics'},
                                                        {id: 25, name: 'Art'},
                                                        {id: 26, name: 'Celebrities'},
                                                        {id: 27, name: 'Animals'},
                                                        {id: 28, name: 'Vehicles'},
                                                        {id: 29, name: 'Entertainment: Comics'},
                                                        {id: 30, name: 'Science: Gadgets'},
                                                        {id: 31, name: 'Entertainment: Japanese Anime & Manga'},
                                                        {id: 32, name: 'Entertainment: Cartoon & Animations'}
                                                    ])


const [formData, setFormData] = React.useState({category: 'any', difficulty: 'easy', questionAmount: '5'});

const categoriesElements = categories.map(category => <option key={category.id} value={category.name} name="category">{category.name}</option>);

    return(
        <div className="intro">
            <h1>Quizzical</h1>
            <fieldset className="options">
                <legend>Quiz Options</legend>
                <label htmlFor="category">Choose a category:</label>
                <select id="category" onChange={handleChange}>
                    <option key="8" value="any"name="category">Any Category</option>
                    {categoriesElements}
                </select>
                <label htmlFor="difficulty">Choose difficulty:</label>
                <select id="difficulty" onChange={handleChange}>
                    <option value="any" name="difficulty">Any</option>
                    <option value="easy" name="difficulty">Easy</option>
                    <option value="medium" name="difficulty">Medium</option>
                    <option value="hard" name="difficulty">Hard</option>
                </select>
                <label htmlFor="questionAmount">Number of questions:</label>
                <select id="questionAmount" onChange={handleChange}>
                    <option value="5" name="questionAmount">5</option>
                    <option value="10" name="questionAmount">10</option>
                    <option value="15" name="questionAmount">15</option>
                    <option value="20" name="questionAmount">20</option>
                </select>
            </fieldset>
            <p>If quizzes are quizzical what does that make tests?
                <br></br>
                Let's take a quiz!
            </p>
            <button onClick={props.handleClick}>Start Game</button>
        </div>
    )
}
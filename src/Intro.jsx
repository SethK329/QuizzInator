import React from "react";

export default function Intro(props){
    // This is the list of categories for the quiz
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

// basic quiz options by default
const [formData, setFormData] = React.useState({category: 'any', difficulty: 'easy', amount: '5'});

const categoriesElements = categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>);

// makes the user inputs controlled components so that the updated data can be passed when needed.
function handleChange(e){
    const {name, value} = e.target
    setFormData(prevFormData=>{
        return(
            {
                ...prevFormData,
                [name]: value
            }
        )
    })
}
// passes the users selections for the quiz up to the app component where the fetch is run, that data gets passes to the quiz component
function submitForm(e){
    e.preventDefault()
    props.handleClick(formData)
}

    return(
        <div className="intro">
            <h1>Quizzical</h1>
            <fieldset className="options">
                <legend>Quiz Options</legend>
                <label htmlFor="category">Choose a category:</label>
                <select id="category" name="category" onChange={handleChange}>
                    <option key="8" value="any" >Any Category</option>
                    {categoriesElements}
                </select>
                <label htmlFor="difficulty">Choose difficulty:</label>
                <select id="difficulty" name="difficulty" onChange={handleChange}>
                    <option value="any" >Any</option>
                    <option value="easy" >Easy</option>
                    <option value="medium" >Medium</option>
                    <option value="hard" >Hard</option>
                </select>
                <label htmlFor="amount">Number of questions:</label>
                <select id="amount" name="amount" onChange={handleChange}>
                    <option value="5" >5</option>
                    <option value="10" >10</option>
                    <option value="15" >15</option>
                    <option value="20" >20</option>
                </select>
            </fieldset>
            <p>If quizzes are quizzical what does that make tests?
                <br></br>
                Let's take a quiz!
            </p>
            <button onClick={submitForm}>Start Game</button>
        </div>
    )
}
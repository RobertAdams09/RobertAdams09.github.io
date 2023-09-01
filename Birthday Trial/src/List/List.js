import React from "react";
import "./List.css";

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
            const {id, name, age, image} = person;
            return <div key={id} className="PeopleContainer">
                <img className="images" src={image} alt={name}/>
                <div className="info">
                    <h3>{name}</h3>
                    <p>{age} years old</p>
                </div>
                <div className="BirthdayWishes">
                    <label for="wishes">Send wishes to {name}</label>
                    <input id="wishes" type="input" placeholder="Type your wishes here!"></input>
                </div>
            </div>
            })}
        </>
    );
}


export default List;
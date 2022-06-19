import React, { useState } from 'react'
import styles from '../styles/Form.module.css'
// import classnames from 'clsx'

export function Form({ data }) {

    const [personName, setPersonName] = useState('')

    const onChangeHandler = (event) => {
        event.preventDefault()
        setPersonName(event.target.value)
    }
    const arrayOfFriends = []
    const findFriends = () => {
        const enteredName = personName.toLowerCase()
        data.map((person) => {
            const name = `${person.firstName.toLowerCase()} ${person.surname.toLowerCase()}`
            if(enteredName === name) {
                // console.log(person.friends)   // 11, 20
                person.friends.map((friend)=>{
                    data.map((finalFriend)=>{
                        if(finalFriend.id === friend) {
                            console.log(finalFriend)
                            arrayOfFriends.push(finalFriend)
                        }
                    })
                })
            }
        })
        // console.log(arrayOfFriends)
        // return arrayOfFriends
    }
    console.log(arrayOfFriends)
    // const directFriends = findFriends()
    // console.log(directFriends)

    // const directFriends = findFriends()
    // console.log(directFriends)
    // {
    //     "id": 19,
    //     "firstName": "Catriona",
    //     "surname": "Long",
    //     "age": 28,
    //     "gender": "female",
    //     "friends": [
    //     11,
    //     20
    // ]
    // },

    return (
        <div
            // onSubmit={handleSubmit}
            className={styles.search}
        >
            <input
                required
                placeholder="Person Name"
                id="name"
                name="name"
                type="text"
                value={personName}
                onChange={onChangeHandler}
                autoComplete="off"
                className={styles.inputField}
            />

            <button
                className={styles.button}
                type="button"
                onClick={findFriends}
            >
                Find a Person
            </button>

            <div className={styles.displayData}>
                <ul>
                    {arrayOfFriends.map(friend => {
                        return (
                            <li key={friend.id}>
                                {friend}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/*<div className={styles.displayData}>*/}
            {/*    {arrayOfFriends.map((friend)=>{*/}
            {/*        return (<li key={friend.id}>{friend}</li>)*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    )
}

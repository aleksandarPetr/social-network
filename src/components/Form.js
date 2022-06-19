import React, {useState} from 'react'
import styles from '../styles/Form.module.css'
import { Card } from '../components/Card'

let arrayOfFriends = []
let friendsOfDirectFriends = []
let suggestedFriendsArray = []

export function Form({data}) {

    const [personName, setPersonName] = useState('')
    const [updates, setUpdates] = useState(0)

    const onChangeHandler = (event) => {
        event.preventDefault()
        setPersonName(event.target.value)
    }

    const dataValidation = () => {
        let enteredName = personName.toLowerCase();
        let firstName = enteredName.split(' ').slice(0, -1).join(' ');
        let lastName = enteredName.split(' ').slice(-1).join(' ');
        if(enteredName === '') {
            alert('Full name is required!')
        } else if(!enteredName.includes(' ')) {
            alert('Last name is required!');
        } else if(firstName.length < 2) {
            alert('You entered a wrong first name!');
        } else if(lastName.length < 2) {
            alert('You entered a wrong last name!');
        } else if(!/^[a-zA-Z\s.,]+$/.test(enteredName)){
            alert('You entered a wrong name!')
        } else{
            return true
        }
    }

    const checkDatabase = () => {
        const array = []
        data.forEach((person) => {
            const name = `${person.firstName.toLowerCase()} ${person.surname.toLowerCase()}`
            if(personName.toLowerCase() === name){
                array.push(person)
            }
        })
        if(array.length === 0) {
            alert('There is no such person in our database.')
        }
    }

    const findFriends = () => {
        if(dataValidation()) {
            checkDatabase()
        }
        arrayOfFriends = []
        const enteredName = personName.toLowerCase()
        data.map((person) => {
            const name = `${person.firstName.toLowerCase()} ${person.surname.toLowerCase()}`
            if (enteredName === name) {
                person.friends.map((friend) => {
                    data.map((finalFriend) => {
                        if (finalFriend.id === friend) {
                            console.log(finalFriend)
                            arrayOfFriends.push(finalFriend)
                            setUpdates(updates + 1)
                        }
                    })
                })
            }
        })
        setPersonName('')
        setUpdates(0)
    }

    const friendsOfFriendsIds = () => {
        let directFriends = arrayOfFriends;
        let directFriendsIds = []
        directFriends.forEach(id => directFriendsIds.push(id.id))
        let idsOfFriendsOfAFriend = []
        directFriends.forEach(e => idsOfFriendsOfAFriend.push(e.friends))
        idsOfFriendsOfAFriend = idsOfFriendsOfAFriend.flat().filter( ( el ) => !directFriendsIds.includes( el ) );
        const idsOfFriendsOfAFriendWithoutDuplicates = idsOfFriendsOfAFriend.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })
        return idsOfFriendsOfAFriendWithoutDuplicates
    }

    const displayPersonById = (data, id) => {
        for(let i = 0; i < data.length; i++){
            if(id === data[i].id){
                return data[i]
            }
        }
    }

    const displayFriendsOfDirectFriends = () => {
        friendsOfDirectFriends = []
        const friendsOfDirectFriendsIds = friendsOfFriendsIds()
        friendsOfDirectFriendsIds.forEach((person) => {
            const friend = displayPersonById(data, person)
            friendsOfDirectFriends.push(friend)
        })
        return friendsOfDirectFriends
    }

    function registerPersonByName(data, personName) {
        for(const person of data){
            const name = `${person.firstName.toLowerCase()} ${person.surname.toLowerCase()}`
            if(personName.toLowerCase() === name.toLowerCase()){
                return person
            }
        }
    }

    const suggestedFriends = () => {
        suggestedFriendsArray = []
        const directFriends = arrayOfFriends
        for(let i = 0; i < data.length; i++){
            const currentPerson = registerPersonByName(data, personName)
            console.log(currentPerson)
            if(data[i].id===currentPerson.id) {continue}
            if(!directFriends.includes(data[i])){
                const nonFriendFriends = data[i].friends
                const filteredArray = directFriends.filter(friend => nonFriendFriends.includes(friend.id))
                if(filteredArray.length > 1){
                    suggestedFriendsArray.push(data[i])
                }
            }
        }
        return suggestedFriendsArray
    }

    return (
        <div
            className={styles.search}
        >
            <div className={styles.tools}>
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
                onClick={() => {
                    findFriends()
                    displayFriendsOfDirectFriends()
                    suggestedFriends()
                    }
                }
            >
                Find a Person
            </button>
            </div>

            <div className={styles.displayFriends}>
                {arrayOfFriends.length > 0 ? (<h3 style={{paddingLeft: '38%', paddingTop: '25%'}}>Direct Friends:</h3>) : (<h3></h3>)}
                <ul className={styles.ulist}>
                    {arrayOfFriends.map(friend =>
                        <li key={friend.id}>
                            <Card
                                id={friend.id}
                                firstName={friend.firstName}
                                surname={friend.surname}
                                age={friend.age}
                                gender={friend.gender}
                                friends={friend.friends}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.displayFriends}>
                {arrayOfFriends.length > 0 ? (<h3 style={{paddingLeft: '38%', paddingTop: '25%'}}>Friends of Friends:</h3>) : (<h3></h3>)}
                <ul className={styles.ulist}>
                    {friendsOfDirectFriends.map(friend =>
                        <li key={friend.id}>
                            <Card
                                id={friend.id}
                                firstName={friend.firstName}
                                surname={friend.surname}
                                age={friend.age}
                                gender={friend.gender}
                                friends={friend.friends}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.displayFriends}>
                {arrayOfFriends.length > 0 ? (<h3 style={{paddingLeft: '38%', paddingTop: '25%'}}>Suggested Friends:</h3>) : (<h3></h3>)}
                <ul className={styles.ulist}>
                    {suggestedFriendsArray.map(friend =>
                        <li key={friend.id}>
                            <Card
                                id={friend.id}
                                firstName={friend.firstName}
                                surname={friend.surname}
                                age={friend.age}
                                gender={friend.gender}
                                friends={friend.friends}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

import { useState } from "react";
// import getFirestore from '../app/utils/firebaseConfig';
import db from '../app/utils/firestore';
import { collection, addDoc } from '@firebase/firestore';


const AddItem = () => {



    const [value, setValue ] = useState("")



    const handleSubmit = async (event) => {

        event.preventDeafault()

        console.log("value", value);

        try {
            const docRef = await addDoc(collection(db, "veterinary-clinic"), {

                name: value,
            })

            console.log("Document written with id", docRef.id())
            setValue("")

        } catch (error) {
            console.log("Error adding document", error);
        }


    }

    return (

        <form onSubmit={handleSubmit}>

            <input
            type='text'
            value={value}
            onChange={ (e) => setValue(e.target.value)}
            placeholder="Add a new item"
            />

            <button type="submit">Add item</button>

        </form>
    )

}

export default AddItem;

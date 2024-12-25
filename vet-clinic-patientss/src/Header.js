import React from "react";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "./firebase";


const Header = () => {

    const query = collection(db, "header-menu");

    const [docs, landing, error] = useCollectionData(query);
    console.log("docs", docs);

    return (
        <div>
            Header
        </div>
    )
}

export default Header
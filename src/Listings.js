import React, {useEffect, useState} from 'react';
import listings from "./API";
import BizDetails from "./BizDetails";
import {Routes} from "react-router-dom";
import { Link } from 'react-router-dom'

const Listings = (props) => {
    const [businsses, setBusinesses] = useState(null)
    const removeListing = (li) => {
        console.log(li)
        const updatedListings = listings.filter(item => item.id == li)
        console.log(listings)
        setBusinesses(updatedListings)
    }
    const [details, showDetails] = useState(true)
    const renderBiz = (id) => {
        console.log("clicked")
        showDetails(!details)
        console.log(id)
        return id
    }
    const listItems = listings.map((listItem) => {
        return(
        <li key={listItem.id}>
            <Link to={`/bizDetails/${listItem.id}`}>{listItem.name}</Link>
            <div>{listItem.description}</div>
            <div>{listItem.hours}</div>
            <div>{listItem.address}</div> <div>{listItem.description}</div>
            <button onClick={event => removeListing(listItem.id)}>Delete Listing</button>
        </li>
        )
    })
    return (

           <ul>
               {listItems}
           </ul>
    );
};

export default Listings;
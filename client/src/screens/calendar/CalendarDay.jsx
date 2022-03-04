import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function CalendarDay(props) {
    const { currentUser, allItems } = props;
    const { date } = useParams();
    const [ items, setItems ] = useState([])

    console.log(Number(date))
    useEffect(() => {
        const todaysItems = allItems.filter(item => new Date(item.created_at).getDate() === Number(date))
        setItems(todaysItems)
    },[])
    console.log(items)
    return (
        <div>{items?.map(item => {

            return (
                <div>
                    <div>
                        {item.title}
                    </div>
                    <Link to={`/item/${item.id}`}>View</Link>
                </div>
            )
        })}
        </div>
    )
}

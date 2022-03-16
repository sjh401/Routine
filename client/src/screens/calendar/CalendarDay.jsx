import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function CalendarDay(props) {
    const { currentUser, allItems } = props;
    const { date } = useParams();
    const [ items, setItems ] = useState([])

    console.log(Number(date))
    useEffect(() => {
        console.log(allItems)
        const todaysItems = allItems.filter(item => new Date(item.to_do_date).getDate() + 1 === Number(date))
        setItems(todaysItems)
    },[allItems])
    console.log(items)
    return (
        <div>{items?.map(item => {

            return (
                <div key={`${item.to_do_date} ${item.id}`}>
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

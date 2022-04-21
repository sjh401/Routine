import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Calendar.css'

export default function CalendarDay(props) {
    const { currentUser, allItems } = props;
    const { date } = useParams();
    const [ items, setItems ] = useState([])

    useEffect(() => {
        let theItems;
        let day = date.split('-')[0]
        allItems.length ? theItems = allItems : theItems = [];
        const todaysItems = theItems?.filter(item => new Date(item.to_do_date).getDate() + 1 === Number(day))
        setItems(todaysItems)
    },[allItems])

    return (
        <div className='flex-column-center-center cal-day-main'>
            <div>
                {date}
            </div>
            <div>
                {items.length ? items?.map(item => {

                return (
                    <div key={`${item.to_do_date} ${item.id}`}>
                        <div>
                            {item.title}
                        </div>
                        <Link to={`/item/${item.id}`}>View</Link>
                    </div>
                )
                }) :
                'No items to do on this day.'
                }
            </div>
        </div>
    )
}

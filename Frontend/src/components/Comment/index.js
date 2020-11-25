import React from 'react'

import './styles.css'

const Comment = ({name, date, email, phone, comment}) => {

    return(
        <div className="content-comment">
            <label>{name}</label>
            <label>{date}</label>
            <label>{email}</label>
            <label>{phone}</label>
            <label>{comment}</label>
        </div>
    )

}

export default Comment
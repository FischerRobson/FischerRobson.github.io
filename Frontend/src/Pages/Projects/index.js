import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import './styles.css'
import curriculo from '../../utils/curriculo-robson.pdf'
import crud from '../../utils/crud.png'
import Comment from '../../components/Comment'
import api from '../../services/api'
import Adress from '../../components/Adress'
import Clock from 'react-digital-clock'
import 'react-clock/dist/Clock.css'

const Projects = () => {

    const [comments, setComments] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')

    const [saved, setSaved] = useState(false)

    useEffect(() => {
        api.get('comments').then(res => {
            setComments(res.data)
        })
    }, [saved])

    function insertComment(event) {
        event.preventDefault()

        const now = new Date()
        const date = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()

        api.post('comments', {
            name,
            email,
            date,
            phone,
            comment
        }).then(() => {
            setSaved(!saved)
            setName('')
            setEmail('')
            setPhone('')
            setComment('')
        })
    }

    return (
        <div className="content-projects">
            <h2>Projects</h2>
            <Clock />
            <p>First, you can click <a href={curriculo} download> here </a> to download my curriculum</p>
            <div className="gallery">
                <figure>
                    <img src={crud} />
                    <p>Developed in PHP, Bootstrap and MySQL
                    <a href="https://github.com/FischerRobson/crud-printers"><FaGithub /></a></p>

                </figure>
            </div>
            <br/>
            <Adress />
            <div className="content-form">
                <form class="form-style-4" onSubmit={insertComment}>
                    <h3>Leave a comment here</h3>
                    <label for="name">
                        <span>Enter Your Name</span>
                        <input
                            type="text"
                            name="name"
                            equired="true"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            autocomplete="off"
                        />
                    </label>
                    <label for="email">
                        <span>Email Address</span>
                        <input
                            type="email"
                            name="email"
                            required="true"
                            onChange={(e) => setEmail(e.target.value)}
                            autocomplete="off"
                            value={email}
                        />
                    </label>
                    <label for="phone">
                        <span>Phone Number</span>
                        <input
                            type="text"
                            name="phone"
                            required="true"
                            onChange={(e) => setPhone(e.target.value)}
                            autocomplete="off"
                            value={phone}
                        />
                    </label>
                    <label for="comment">
                        <span>Message to Us</span>
                        <textarea
                            name="comment"
                            required="true"
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                        ></textarea>
                    </label>
                    <label>
                        <input type="submit" value="Send Letter" />
                    </label>
                </form>
            </div>
            {comments.map(comment => {
                return (
                    <div className="content-comment">
                        <div className="comment-header">
                            <label className="comment-name">{comment.name}</label>
                            <label className="comment-date">{comment.date}</label>
                        </div>
                        <div className="comment-header">
                            <label className="comment-email">E-mail: {comment.email}</label>
                            <label className="comment-phone">Phone: <p>{comment.phone}</p></label>
                        </div>
                        <label className="comment-comment">{comment.comment}</label>
                    </div>
                )
            })}
        </div>
    )

}

export default Projects



/*
            <p>You clicked {count} times!</p>

            <button onClick={ () => setCount(count + 1) }>
                Click here!
            </button>

*/
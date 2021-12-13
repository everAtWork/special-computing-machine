import React from 'react'
import { Link } from 'react-router-dom'
import './header.component.styles.scss'
import { ReactComponent as Logo } from '../../assets/snowstar.svg'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
    <div className="header">
        <Link className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
    </div>

        )
    }
}

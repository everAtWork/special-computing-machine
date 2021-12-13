import { React, Component} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/snowstar.svg'
import  './header.component.styles.scss'

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

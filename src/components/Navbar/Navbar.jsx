/* eslint-disable react/prop-types */

import { Logo } from "./Logo"
import { NumResults } from "./NumResults"
import { Search } from "./Search"



export const Navbar = () => {


    return (
        <nav className="nav-bar">
            <Logo />
            <Search />

            <NumResults />
        </nav>
    )
}

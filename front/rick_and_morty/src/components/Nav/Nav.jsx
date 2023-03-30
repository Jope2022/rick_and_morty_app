import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom"

export default function Nav(props) {
    const { onSearch } = props

    return (
        <nav className={style.nav}>
            <Link to="/home" className={style.Links} >Inicio </Link>
            <Link to="/about" className={style.linksHover} >Creador</Link>
            <Link to="/favorites" className={style.linksHover} >  ♥  Favoritos </Link>
            <SearchBar onSearch={onSearch} random={props.random} />
        </nav>
    )
}
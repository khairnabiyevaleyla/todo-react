import React from 'react'
import style from "./navsearch.module.scss"

const SearchBar = () => {
  return (
    <div className={style.searchBar}>
      <div className={style.searchInput}>
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default SearchBar
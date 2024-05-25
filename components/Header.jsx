import React from "react"
import PropTypes from "prop-types"
import { IoLogoMarkdown } from "react-icons/io5"

function Header({ title }) {
  return (
    <header className="page-header">
      <h1>
        <IoLogoMarkdown /> <span>{title}</span>
      </h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header

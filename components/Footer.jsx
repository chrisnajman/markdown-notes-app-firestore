import React from "react"
import PropTypes from "prop-types"

function Footer({ gitRepo }) {
  return (
    <footer className="page-footer">
      <a
        href={`https://github.com/chrisnajman/${gitRepo}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Git Repository
      </a>
    </footer>
  )
}

Footer.propTypes = {
  gitRepo: PropTypes.string,
}

export default Footer

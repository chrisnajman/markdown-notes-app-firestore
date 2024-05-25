import React, { useState } from "react"
import PropTypes from "prop-types"
import ReactMde from "react-mde"
import "react-mde/lib/styles/css/react-mde-all.css"
import Showdown from "showdown"

function Editor({ tempNoteText, setTempNoteText }) {
  const [selectedTab, setSelectedTab] = useState("write")

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  })

  return (
    <section className="pane editor">
      <ReactMde
        value={tempNoteText}
        onChange={setTempNoteText}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={100}
        heightUnits="vh"
      />
    </section>
  )
}

Editor.propTypes = {
  tempNoteText: PropTypes.string,
  setTempNoteText: PropTypes.func,
}

export default Editor

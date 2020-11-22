import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Link ({onClick,active,children}){
    return (
        <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
     >
       {children}
     </button>
    )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link

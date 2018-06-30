import React, { Component } from 'react'
import Cardy from './Cardy'

export default ({nodes, handleDoubleClick, handleOnClickButton, showDetail}) => {
  console.log('nodes', nodes)
  console.log('nodes.children', nodes.children)
  return (
    <div className="finderContainer__workzone-work">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/*nodes &&
          nodes.children.map((_node, i) => (
            <a key={`cardy_${i}`}>
              <Cardy
                selectLeaf={showDetail}
                onDoubleClick={handleDoubleClick}
                node={_node}
                buttonClick={handleOnClickButton}
              >
                {_node.title}
              </Cardy>  
            </a>
          ))
        */}                        
      </div>
    </div>
  )
}

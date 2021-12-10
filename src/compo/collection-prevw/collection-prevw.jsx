import React from 'react'

import './collection-prevw.styles.scss'

const CollectionPreview = ({title, itemz}) => {
    <div className="collection-preview">
        <h1 className="collection-title">{title.toUpperCase()}</h1>
        <div className="preview">
        {itemz.filter((item, idx) => idx < 4).map((item) => 
        <div key={item.id} className="item-drawn">{item.name}</div>)}
        </div>
        
    </div>
}
export default CollectionPreview;
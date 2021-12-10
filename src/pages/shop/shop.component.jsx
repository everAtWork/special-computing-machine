import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../compo/collection-prevw/collection-prevw'


class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collekshunz: SHOP_DATA
        }
    }
    render() {
        const {collekshunz} = this.state
        return (
                    <div className="shop-page">
        {   collekshunz.map(({id, ...otherCollectionProps}) =>
            <CollectionPreview key={id} {...otherCollectionProps}/>)
        }
            </div>
        )
    }
}

export default ShopPage;
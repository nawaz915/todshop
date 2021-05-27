import React from 'react';
import  { withRouter } from 'react-router-dom';
import './shop.styles.scss';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const  ShopPage = ({collections}) => (
    
    <div className="shop-page">
    
    <CollectionOverview  />
         
    </div>
            
);




export default ShopPage;
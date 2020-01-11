import React, { useEffect } from 'react';
import { Route } from 'react-router';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ShopPageProps } from 'shop-component-types';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage : React.FC<ShopPageProps> = ({ fetchCollectionsStart, match }) => {
  
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionOverviewContainer}
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        component={CollectionPageContainer}
      />
    </div>  
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
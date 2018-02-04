import React from 'react';
import '../stylesheets/ListingPage.scss';

import ListingPageItem from './ListingPageItem';

const ListingPage = ({ data, isLoading, error }) => {
    if (error) {
        return <p className="message">{error.message}</p>;
    }

    if (isLoading) {
        return <p className="message">Loading ...</p>;
    }

    const products = data || [];

    return (
        <main className="ListingPage">
            {products.map(product =>
                <ListingPageItem product={product} key={product.id} />
            )}
        </main>
    );
};

export default ListingPage;
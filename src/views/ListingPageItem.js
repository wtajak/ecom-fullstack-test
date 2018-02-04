import React from 'react';
import { Link } from 'react-router';
import { formatPrice } from '../formatters/numberFormatter';

import '../stylesheets/ListingPageItem.scss';

const ListingPageItem = ({ product }) => {
  return (
      <div className="ListingPageItem">
          <img className="ListingPageItem-image" src={`/dist${product.image.path}`} alt={product.image.alt} />
          { product.productLabel && <div className="ListingPageItem-productLabel">{product.productLabel}</div> }
          <h2 className="ListingPageItem-title">{product.title}</h2>
          <p className="ListingPageItem-description">{product.description}</p>
          <p className="ListingPageItem-price">
              { product.priceLabel && <span className="ListingPageItem-priceLabel">{product.priceLabel}</span> }
              <span className="ListingPageItem-priceValue">{product.currency}{formatPrice(product.price)}</span>
          </p>
          <Link className="ListingPageItem-buyNowLink" to={product.ctaLink}>{product.cta}</Link>
      </div>
  );
};

export default ListingPageItem;

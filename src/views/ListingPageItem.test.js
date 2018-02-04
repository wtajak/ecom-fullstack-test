import React from 'react';
import { shallow } from 'enzyme';
import ListingPageItem from './ListingPageItem';

const product = {
    "id": "p1",
    "title": "Simple Canvas",
    "description": "Lets your pictures speak for themselves.",
    "image": {
        "path": "/images/product.jpg",
        "alt": "Simple Canvas"
    },
    "price": 1500,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "bestseller",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
};

describe('ListingPageItem', () => {
    describe('@render', () => {
        test('hides optional elements', () => {
            const productClone = JSON.parse(JSON.stringify(product));
            productClone.productLabel = undefined;
            productClone.priceLabel = undefined;
            const item = shallow(<ListingPageItem product={productClone}/>);
            expect(item.find('.ListingPageItem-productLabel')).toHaveLength(0);
            expect(item.find('.ListingPageItem-priceLabel')).toHaveLength(0);
        });

        test('shows optional elements', () => {
            const item = shallow(<ListingPageItem product={product}/>);
            expect(item.find('.ListingPageItem-productLabel')).toHaveLength(1);
            expect(item.find('.ListingPageItem-priceLabel').text()).toEqual('From');
            expect(item.find('.ListingPageItem-priceLabel')).toHaveLength(1);
        });

        test('has image', () => {
            const item = shallow(<ListingPageItem product={product}/>);
            const image = item.find('.ListingPageItem-image');
            expect(image).toHaveLength(1);
            expect(image.props().src).toEqual('/dist/images/product.jpg');
            expect(image.props().alt).toEqual('Simple Canvas');
        });

        test('has text elements', () => {
            const item = shallow(<ListingPageItem product={product}/>);
            expect(item.find('.ListingPageItem-title')).toHaveLength(1);
            expect(item.find('.ListingPageItem-description')).toHaveLength(1);
            expect(item.find('.ListingPageItem-buyNowLink')).toHaveLength(1);
        });

        test('has correct price', () => {
            const item = shallow(<ListingPageItem product={product}/>);
            expect(item.find('.ListingPageItem-priceValue').text()).toEqual('£1500.00');
        });

        test('has call to action', () => {
            const item = shallow(<ListingPageItem product={product}/>);
            const cta = item.find('.ListingPageItem-buyNowLink');
            expect(cta.text()).toEqual('<Link />');
            expect(cta.props().to).toEqual('/random/link/to/no/where');
        });
    });
});

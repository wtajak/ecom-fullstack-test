import React from 'react';
import { shallow } from 'enzyme';
import ListingPage from './ListingPage';

const products = [{
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
}, {
    "id": "p2",
    "title": "Collage Canvas",
    "description": "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
    "image": {
        "path": "/images/product.jpg",
        "alt": "Collage Canvas"
    },
    "price": 2500,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
}, {
    "id": "p3",
    "title": "Retro Canvas",
    "description": "A cool vintage look. For people. Places. And spaces.",
    "image": {
        "path": "/images/product.jpg",
        "alt": "Retro Canvas"
    },
    "price": 500,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
}, {
    "id": "p4",
    "title": "Desk Canvas",
    "description": "Our smallest canvas for your big moments.",
    "image": {
        "path": "/images/product.jpg",
        "alt": "Desk Canvas"
    },
    "price": 1250,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
}];

describe('ListingPage', () => {
    describe('@render', () => {
        test('has error message', () => {
            const error = {
                message: "Test error"
            };
            const component = shallow(<ListingPage error={error} />);
            expect(component.find('.message')).toHaveLength(1);
            expect(component.find('.message').text()).toEqual('Test error');
        });

        test('has loading message', () => {
            const component = shallow(<ListingPage isLoading={true} />);
            expect(component.find('.message')).toHaveLength(1);
            expect(component.find('.message').text()).toEqual('Loading ...');
        });

        test('has listing items and hides loading', () => {
            const component = shallow(<ListingPage data={products}/>);
            expect(component.find('.message')).toHaveLength(0);
            expect(component.find('.ListingPage').children()).toHaveLength(4);
        });
    });
});

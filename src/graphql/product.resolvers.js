const getProduct = (_, { id }) => {
    return {
        id,
        name: 'Product 1',
        price: 299.99,
        description: 'el producto es...',
        image: 'http://image.ejemplo',
        createdAt: new Date().toISOString(),
    }
};

const getProducts = () => {
    return [];
};

// const addProduct = () => {
// //code add product 
// }

module.exports = {getProduct, getProducts};
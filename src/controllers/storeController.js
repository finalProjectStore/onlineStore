const Store = require('../models/storesModel')


const stores = [
    {
        name: 'Store A',
        address: 'Rotchild 22 St, Tel Aviv, Israel'
    },
    {
        name: 'Store B',
        address: 'Allenby 45 St, Tel Aviv, Israel'
    },
    {
        name: 'Store C',
        address: 'Ibn Gabirol 122 St, Tel Aviv, Israel'
    },
    {
        name: 'Store D',
        address: 'Dizengoff 78 St, Tel Aviv, Israel'
    },
    {
        name: 'Store E',
        address: 'Ben Yehuda 31 St, Tel Aviv, Israel'
    },
    {
        name: 'Store F',
        address: 'HaYarkon 55 St, Tel Aviv, Israel'
    }

];


const addStore = async function () {
    for (let i = 0; i < stores.length; i++) {
        const existingStore = await Store.findOne({ storeName: stores[i].name });
        if (!existingStore) {
            const store = new Store({
                storeName: stores[i].name,
                address: stores[i].address,
            });
            await store.save();
        }
    }
    return stores;
};

const getAllAddresses = async function () {
    const addresses = await Store.find({});

    return addresses;

};



module.exports = { getAllAddresses, addStore };







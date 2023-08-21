var mongoose = require('mongoose');
const Product = require('../models/productModel');
const ObjectId = require('mongoose').Types.ObjectId;


////////////////////////////////////////////////// Save in resources.
const addProducts = function () {
    var data = [
        {
            id: 1,
            image: '/resources/appleTV4K.jpg',
            title: 'Apple TV',
            description: 'Apple TV is the best',
            price: 1000,
            type: 'tv',
            color: 'white',
            quantity: 1,
        },
        {
            id: 2,
            image: 'resources/samsungTV.jpg',
            title: 'Samsung TV',
            description: 'Experience stunning visuals with Samsung TV',
            price: 1200,
            type: 'tv',
            color: 'black',
            quantity: 1,
        },
        {
            id: 3,
            image: '/resources/lgsmarttv.jpg',
            title: 'LG Smart TV',
            description: 'Get a smart TV experience with LG',
            price: 900,
            type: 'tv',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 4,
            image: 'resources/iphone-14-pro-max.jpg',
            title: 'Apple iPhone 14 pro max',
            description: 'The latest iPhone with cutting-edge features',
            price: 1200,
            type: 'phones',
            color: 'space gray',
            quantity: 1,
        },
        {
            id: 5,
            image: '/resources/samsung-s22.jpg',
            title: 'Samsung Galaxy s22',
            description: 'Powerful performance with Samsung Galaxy',
            price: 1100,
            type: 'phones',
            color: 'black',
            quantity: 1,
        },
        {
            id: 6,
            image: '/resources/lgphone.jpg',
            title: 'LG Smartphone',
            description: 'Enjoy a premium smartphone experience with LG',
            price: 1000,
            type: 'phones',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 7,
            image: '/resources/applewatchsilver.jpg',
            title: 'Apple Watch 8 GPS',
            description: 'Stay connected with Apple Watch',
            price: 500,
            type: 'watch',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 8,
            image: '/resources/galaxywatch.jpg',
            title: 'Samsung Galaxy Watch',
            description: 'Monitor your health with Samsung Galaxy Watch',
            price: 450,
            type: 'watch',
            color: 'black',
            quantity: 1,
        },
        {
            id: 9,
            image: '/resources/lgsmartwatchgold.jpg',
            title: 'LG Smartwatch',
            description: 'Smart features in a sleek design',
            price: 400,
            type: 'watch',
            color: 'gold',
            quantity: 1,
        },
        {
            id: 10,
            image: '/resources/ipadprospacegary.jpg',
            title: 'Apple iPad Pro 13 inch',
            description: 'Powerful and portable with Apple iPad',
            price: 800,
            type: 'tablets',
            color: 'space gray',
            quantity: 1,
        },
        {
            id: 11,
            image: '/resources/samsungtablet.jpg',
            title: 'Samsung Tablet',
            description: 'Immerse yourself in entertainment with Samsung Tablet',
            price: 700,
            type: 'tablets',
            color: 'black',
            quantity: 1,
        },
        {
            id: 12,
            image: '/resources/lgtablet.jpg',
            title: 'LG Tablet',
            description: 'Enhance productivity with LG Tablet',
            price: 600,
            type: 'tablets',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 13,
            image: '/resources/applemacbookPro.jpg',
            title: 'Apple MacBook Pro M2',
            description: 'Unleash your creativity with Apple MacBook',
            price: 2000,
            type: 'computers',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 14,
            image: '/resources/samsunglaptop.jpg',
            title: 'Samsung Laptop i9 512GB',
            description: 'Powerful performance with Samsung Laptop',
            price: 1800,
            type: 'computers',
            color: 'black',
            quantity: 1,
        },
        {
            id: 15,
            image: '/resources/lglaptop.jpg',
            title: 'LG Laptop 13 inch',
            description: 'Sleek and efficient LG Laptop',
            price: 1500,
            type: 'computers',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 16,
            image: '/resources/appleairpods.jpg',
            title: 'Apple AirPods Pro',
            description: 'Wireless audio with Apple AirPods',
            price: 200,
            type: 'audio',
            color: 'white',
            quantity: 1,
        },
        {
            id: 17,
            image: '/resources/SamsungEarbuds.jpg',
            title: 'Samsung Earbuds',
            description: 'Immersive sound with Samsung Earbuds',
            price: 150,
            type: 'audio',
            color: 'black',
            quantity: 1,
        },
        {
            id: 18,
            image: '/resources/LGAudioDevice.jpg',
            title: 'LG Audio Device',
            description: 'High-quality audio with LG Audio Device',
            price: 180,
            type: 'audio',
            color: 'black',
            quantity: 1,
        },
        {
            id: 19,
            image: '/resources/AppleHomePod.jpg',
            title: 'Apple HomePod',
            description: 'Smart home speaker with Apple HomePod',
            price: 300,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 20,
            image: '/resources/SamsungHomeSpeaker.jpg',
            title: 'Samsung Home Speaker',
            description: 'Enhance your audio experience with Samsung Home Speaker',
            price: 250,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 21,
            image: '/resources/LGHomeSpeaker.jpg',
            title: 'LG Home Speaker',
            description: 'Immerse yourself in music with LG Home Speaker',
            price: 280,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 22,
            image: '/resources/AppleMouse.jpg',
            title: 'Apple Mouse',
            description: 'Smooth and precise control with Apple Mouse',
            price: 80,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 23,
            image: '/resources/samsungmouse.jpg',
            title: 'Samsung Mouse',
            description: 'Ergonomic design for comfortable use',
            price: 70,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 24,
            image: '/resources/lgmouse.jpg',
            title: 'LG Mouse',
            description: 'Sleek and stylish LG Mouse',
            price: 60,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 25,
            image: 'resources/applekeyboard.jpg',
            title: 'Apple Keyboard',
            description: 'Efficient typing with Apple Keyboard',
            price: 120,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 26,
            image: 'resources/samsungkeyboard.jpg',
            title: 'Samsung Keyboard',
            description: 'Enhance your productivity with Samsung Keyboard',
            price: 100,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 27,
            image: 'resources/lgkeyboard.jpg',
            title: 'LG Keyboard',
            description: 'Comfortable typing experience with LG Keyboard',
            price: 90,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 28,
            image: 'resources/applecharger.jpg',
            title: 'Apple Charger',
            description: 'Fast and reliable charging with Apple Charger',
            price: 50,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 29,
            image: 'resources/samsungcharger.jpg',
            title: 'Samsung Charger',
            description: 'Quick charging for your devices',
            price: 40,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 30,
            image: 'resources/lgcharger.jpg',
            title: 'LG Charger',
            description: 'Efficient charging with LG Charger',
            price: 35,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 31,
            image: 'resources/appleexternaldrive.jpg',
            title: 'Apple External Drive',
            description: 'Expand your storage with Apple External Drive',
            price: 150,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 32,
            image: 'resources/samsungexternaldrive.jpg',
            title: 'Samsung External Drive',
            description: 'Portable storage solution with Samsung External Drive',
            price: 130,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 33,
            image: 'resources/lgexternaldrive.jpg',
            title: 'LG External Drive',
            description: 'Reliable storage for your files',
            price: 120,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 34,
            image: 'resources/appleheadphones.jpg',
            title: 'Apple Headphones',
            description: 'Immerse yourself in music with Apple Headphones',
            price: 150,
            type: 'audio',
            color: 'white',
            quantity: 1,
        },
        {
            id: 35,
            image: 'resources/samsungheadphones.jpg',
            title: 'Samsung Headphones',
            description: 'High-quality sound with Samsung Headphones',
            price: 120,
            type: 'audio',
            color: 'black',
            quantity: 1,
        },
        {
            id: 36,
            image: 'resources/lgheadphones.jpg',
            title: 'LG Headphones',
            description: 'Comfortable and immersive audio experience',
            price: 100,
            type: 'audio',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 37,
            image: 'resources/applespeakers.jpg',
            title: 'Apple Speakers',
            description: 'Enhance your audio setup with Apple Speakers',
            price: 250,
            type: 'audio',
            color: 'white',
            quantity: 1,
        },
        {
            id: 38,
            image: 'resources/samsungspeakers.jpg',
            title: 'Samsung Speakers',
            description: 'Powerful sound for your entertainment',
            price: 200,
            type: 'audio',
            color: 'black',
            quantity: 1,
        },
        {
            id: 39,
            image: 'resources/lgspeakers.jpg',
            title: 'LG Speakers',
            description: 'Immersive audio experience with LG Speakers',
            price: 180,
            type: 'audio',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 40,
            image: 'resources/applesmartwatch.jpg',
            title: 'Apple Watch Ultra',
            description: 'Stay connected and track your fitness with Apple Smartwatch',
            price: 400,
            type: 'watch',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 41,
            image: 'resources/samsungsmartwatch.jpg',
            title: 'Samsung Galaxy Watch 4',
            description: 'Stay fit and stylish with Samsung Smartwatch',
            price: 350,
            type: 'watch',
            color: 'black',
            quantity: 1,
        },
        {
            id: 42,
            image: 'resources/lgsmartwatch.jpg',
            title: 'LG G Watch',
            description: 'Track your health and receive notifications with LG Smartwatch',
            price: 300,
            type: 'watch',
            color: 'black',
            quantity: 1,
        },
        {
            id: 43,
            image: 'resources/appleairtags.jpg',
            title: 'Apple AirTags',
            description: 'Keep track of your belongings with Apple AirTags',
            price: 30,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 44,
            image: 'resources/samsungsmarttag.jpg',
            title: 'Samsung SmartTag',
            description: 'Never lose your valuables with Samsung SmartTag',
            price: 25,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 45,
            image: 'resources/lgtracker.jpg',
            title: 'LG Tracker',
            description: 'Track your items with LG Tracker',
            price: 20,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 46,
            image: 'resources/applepowerbank.jpg',
            title: 'Apple Power Bank',
            description: 'Stay powered up on the go with Apple Power Bank',
            price: 80,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 47,
            image: 'resources/samsungpowerbank.jpg',
            title: 'Samsung Power Bank',
            description: 'Portable charging solution with Samsung Power Bank',
            price: 70,
            type: 'accessory',
            color: 'blue',
            quantity: 1,
        },
        {
            id: 48,
            image: 'resources/lgpowerbank.jpg',
            title: 'LG Power Bank',
            description: 'Reliable power backup with LG Power Bank',
            price: 60,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 49,
            image: 'resources/applemousepad.jpg',
            title: 'Apple Mouse Pad',
            description: 'Smooth surface for precise mouse control',
            price: 20,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 50,
            image: 'resources/samsungmousepad.jpg',
            title: 'Samsung Mouse Pad',
            description: 'Comfortable mouse usage with Samsung Mouse Pad',
            price: 15,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 51,
            image: 'resources/lgmousepad.jpg',
            title: 'LG Mouse Pad',
            description: 'Enhance your gaming experience with LG Mouse Pad',
            price: 12,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 52,
            image: 'resources/appleusbhub.jpg',
            title: 'Apple USB Hub',
            description: 'Connect multiple devices with Apple USB Hub',
            price: 50,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 53,
            image: 'resources/samsungusbhub.jpg',
            title: 'Samsung USB Hub',
            description: 'Expand your connectivity with Samsung USB Hub',
            price: 40,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 54,
            image: 'resources/lgusbhub.jpg',
            title: 'LG USB Hub',
            description: 'Convenient USB expansion with LG USB Hub',
            price: 35,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 55,
            image: 'resources/applemicrophone.jpg',
            title: 'Apple Microphone',
            description: 'Capture professional-grade audio with Apple Microphone',
            price: 150,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 56,
            image: 'resources/samsungmicrophone.jpg',
            title: 'Samsung Microphone',
            description: 'High-quality recording with Samsung Microphone',
            price: 120,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 57,
            image: 'resources/lgmicrophone.jpg',
            title: 'LG Microphone',
            description: 'Versatile microphone for various applications',
            price: 100,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 58,
            image: 'resources/applemousemat.jpg',
            title: 'Apple Mouse Mat',
            description: 'Smooth and precise mouse movement with Apple Mouse Mat',
            price: 30,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 59,
            image: 'resources/toaster.jpg',
            title: 'Toaster',
            description: 'Dualit Architect 4 Slice Toaster',
            price: 25,
            type: 'kitchen',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 60,
            image: 'resources/LawnMower.jpg',
            title: 'American Lawn Mower Company',
            description: 'Electric lawn mower with a powerful 11 amp engine for cutting all types of grass',
            price: 900,
            type: 'garden',
            color: 'black',
            quantity: 1,
        },
        {
            id: 61,
            image: 'resources/applesmartpen.jpg',
            title: 'Apple Smart Pen',
            description: 'Draw and write with precision using Apple Smart Pen',
            price: 120,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 62,
            image: 'resources/samsungmicrowave.jpg',
            title: 'Samsung MicroWave',
            description: 'Samsung MicroWave 40 Liters',
            price: 300,
            type: 'kitchen',
            color: 'black',
            quantity: 1,
        },
        {
            id: 63,
            image: 'resources/lgsmartpen.jpg',
            title: 'LG Smart Pen',
            description: 'Efficient note-taking with LG Smart Pen',
            price: 90,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 64,
            image: '/resources/visionro.jpg',
            title: 'Apple Vision Pro',
            description: 'Apple Vision Pro is an upcoming mixed reality headset developed by Apple',
            price: 3000,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 65,
            image: 'resources/ipod.jpg',
            title: 'Apple ipod touch',
            description: 'The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple',
            price: 700,
            type: 'accessory',
            color: 'blue',
            quantity: 1,
        },
        {
            id: 66,
            image: 'resources/applemacpro.jpg',
            title: 'Apple Mac Pro',
            description: 'Mac Pro is the professional desktop computer reinvented from the inside out.',
            price: 2500,
            type: 'computers',
            color: 'black',
            quantity: 1,
        },
        {
            id: 67,
            image: 'resources/applesmartcase.jpg',
            title: 'Apple Smart Case',
            description: 'Protection and style for your device with Apple Smart Case',
            price: 50,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 68,
            image: 'resources/samsungsmartcase.jpg',
            title: 'Samsung Smart Case',
            description: 'Durable and stylish protection for your device',
            price: 40,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 69,
            image: 'resources/lgsmartcase.jpg',
            title: 'LG Smart Case',
            description: 'Slim and lightweight protection for your device',
            price: 35,
            type: 'accessory',
            color: 'red',
            quantity: 1,
        },
        {
            id: 70,
            image: 'resources/applelaptopstand.jpg',
            title: 'Apple Laptop Stand',
            description: 'Elevate your laptop for improved ergonomics',
            price: 40,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 71,
            image: 'resources/samsunglaptopstand.jpg',
            title: 'Samsung Laptop Stand',
            description: 'Sturdy and adjustable stand for your laptop',
            price: 35,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 72,
            image: 'resources/lglaptopstand.jpg',
            title: 'LG Laptop Stand',
            description: 'Portable and convenient stand for your laptop',
            price: 30,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 73,
            image: 'resources/appleprojector.jpg',
            title: 'Apple Projector',
            description: 'Enjoy large-screen entertainment with Apple Projector',
            price: 500,
            type: 'accessory',
            color: 'white',
            quantity: 1,
        },
        {
            id: 74,
            image: 'resources/samsungprojector.jpg',
            title: 'Samsung Projector',
            description: 'High-quality projection for your presentations',
            price: 450,
            type: 'accessory',
            color: 'black',
            quantity: 1,
        },
        {
            id: 75,
            image: 'resources/lgprojector.jpg',
            title: 'LG Projector',
            description: 'Versatile and immersive projection experience',
            price: 400,
            type: 'accessory',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 76,
            image: 'resources/applemonitor.jpg',
            title: 'Apple Monitor',
            description: 'Vibrant and detailed display with Apple Monitor',
            price: 600,
            type: 'tv',
            color: 'white',
            quantity: 1,
        },
        {
            id: 77,
            image: 'resources/samsungmonitor.jpg',
            title: 'Samsung Monitor',
            description: 'Enhance your productivity with Samsung Monitor',
            price: 550,
            type: 'tv',
            color: 'black',
            quantity: 1,
        },
        {
            id: 78,
            image: 'resources/lgmonitor.jpg',
            title: 'LG Monitor',
            description: 'Immersive visual experience with LG Monitor',
            price: 500,
            type: 'tv',
            color: 'silver',
            quantity: 1,
        },
        {
            id: 79,
            image: 'resources/appleprinters.jpg',
            title: 'Apple Printer',
            description: 'Print documents and photos with ease using Apple Printer',
            price: 200,
            type: 'office',
            color: 'white',
            quantity: 1,
        },
        {
            id: 80,
            image: 'resources/samsungprinter.jpg',
            title: 'Samsung Printer',
            description: 'Fast and reliable printing with Samsung Printer',
            price: 180,
            type: 'office',
            color: 'black',
            quantity: 1,
        },
        {
            id: 81,
            image: 'resources/lgprinter.jpg',
            title: 'LG Printer',
            description: 'Efficient printing solution for your home or office',
            price: 150,
            type: 'office',
            color: 'black',
            quantity: 1,
        }

    ];

    //////////////////////////////////////////////////


    for (let i = 0; i < data.length; i++) {

        let product = new Product(
            {

                id: Number.parseInt(data[i].id),
                image: data[i].image,
                title: data[i].title ,
                description: data[i].description,
                quantity: 1,
                price: Number.parseInt(data[i].price),
                type: data[i].type,
                color: data[i].color
            });
        product.save();
    }

}

const getAllProducts = async function () {
    // 'find' without filtering means - all products
    try {
        const query = Product.find({});    
        const allProducts = await query.exec();
        return allProducts;
    } catch (error) {
        throw new Error('Error while fetching products')
    }
}

const removeProduct = async function (_id) {
    await Product.deleteOne({ _id: new ObjectId(_id) });
}

const updateProduct = async function (product) {
    // pass all product values to 'set' because some/all of the values have been updated
    
    await Product.updateOne(
        { _id: new ObjectId(product['_id']) },
        { $set: product }
    );
}


const updateManyProducts = async function(products)
{
    for(var i=0;i<products.length;i++)
    {
        let productToUpdate = products[i];
        await Product.updateOne(
            { title: productToUpdate['title'] },
            { $set: productToUpdate }
        );
    }
}






const addNewProducts = async function (products){
    const newProducts = products.map(product => new Product(product));
    await Product.insertMany(newProducts);
}

module.exports = { getAllProducts, removeProduct,updateManyProducts, addProducts, updateProduct, addNewProducts, addProducts };
// module.exports = { addProducts };


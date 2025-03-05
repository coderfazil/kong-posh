const mongoose = require('mongoose');
const Product = require('./model/Product'); // Assuming you have a Product model

// Sample product data
const products = [
  { heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:1,
    imageUrl:"../../public/pheran-1.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  { heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:2,
    imageUrl:"../../public/pheran-2.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  { heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:3,
    imageUrl:"../../public/pheran-3.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {
    heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:4,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:5,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {
    heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:6,
    imageUrl:"../../public/pheran-1.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {
    heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:7,
    imageUrl:"../../public/pheran-2.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {
    heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:8,
    imageUrl:"../../public/pheran-3.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  { heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:9,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  { 
     heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:10,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {
    heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:11,
    imageUrl:"../../public/pheran-1.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  { heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:12,
    imageUrl:"../../public/pheran-2.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:13,
    imageUrl:"../../public/pheran-3.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:14,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  { heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:15,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {heading:"Ari Embroidery Pherans Now Live!",
    category:"Kashmiri-Pheran",
    id:16,
    imageUrl:"../../public/pheran-4.jpg",
    details:"Ari Embroidery Pure Wool Dressing Gown – Camel Ecru",
    dashedPrice:"Rs 4,999.00",
    price:"Rs 4,250.00"
  },
  {
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Shawls",
    id:20,
    imageUrl:"../../public/shawl-1.jpg",
    details:"Paibandkari Kalamkari Wool Shawl – Multi",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00"
  },
  {
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Shawls",
    id:21,
    imageUrl:"../../public/shawl-2.jpg",
    details:"Gulbahar Paisley Kalamkari Wool Shawl – Blush Pink, Multi",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00"
  },
  { 
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Shawls",
    id:22,
    imageUrl:"../../public/shawl-3.jpg",
    details:"Sozni Palledaar Pure Wool Shawl – Rust Navy",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00"
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Shawls",
    id:23,
    imageUrl:"../../public/shawl-4.jpg",
    details:"Kalamkari Pashmina Jama Shawl – Monsoon Wedding",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00",
  },
 
  {
    heading:"Ponchos",
    category:"Ponchos",
    id:34,
    imageUrl:"../../public/poncho-1.jpg",
    details:"Black and yellow Rug Crochet Poncho",
    dashedPrice:"Rs 2890",
    price:"Rs 2500"
  },
  {
    heading:"Ponchos",
    category:"Ponchos",
    id:35,
    imageUrl:"../../public/poncho-2.jpg",
    details:" Yellow Crochet Poncho",
    dashedPrice:"Rs 2890",
    price:"Rs 2500"
  },
  {
    heading:"Ponchos",
    category:"Ponchos",
    id:36,
    imageUrl:"../../public/poncho-3.jpg",
    details:"Brown Rug Crochet Poncho",
    dashedPrice:"Rs 2890",
    price:"Rs 2500"
  },
  {
    heading:"Ponchos",
    category:"Ponchos",
    id:37,
    imageUrl:"../../public/poncho-4.jpg",
    details:"Red Rug Crochet Poncho",
    dashedPrice:"Rs 2890",
    price:"Rs 2500"
  },
  {
    heading:"Dry-fruits",
    category:"Dry-fruits",
    id:38,
    imageUrl:"../../public/walnut-3.jpg",
    details:"KO Kashmiri Walnuts - Kagzi Akhrot",
    dashedPrice:"Rs 650",
    price:"Rs 600"
  },
  {
    heading:"Dry-fruits",
    category:"Dry-fruits",
    id:39,
    imageUrl:"../../public/almond.jpg",
    details:"KO Kashmiri Almonds - Kernal ",
    dashedPrice:"Rs 650",
    price:"Rs 600"
  },
  {
    heading:"Dry-fruits",
    category:"Dry-fruits",
    id:40,
    imageUrl:"../../public/cashew.jpg",
    details:"KO Kashmiri Cashew ",
    dashedPrice:"Rs 650",
    price:"Rs 600"
  },
  {
    heading:"Dry-fruits",
    category:"Dry-fruits",
    id:41,
    imageUrl:"../../public/anjeer.jpg",
    details:"KO Kashmiri Anjeer ",
    dashedPrice:"Rs 650",
    price:"Rs 600"
  },
  {
    heading:"Honey",
    category:"Honey",
    id:42,
    imageUrl:"../../public/honey-1.jpg",
    details:"Organic, Natural and Best Honey From Kashmir",
    dashedPrice:"Rs 650",
    price:"Rs 449"
  },
  {
    heading:"Honey",
    category:"Honey",
    id:43,
    imageUrl:"../../public/honey-2.jpg",
    details:"Organic, Natural and Best Safron Honey From Kashmir",
    dashedPrice:"Rs 650",
    price:"Rs 449"
  },
  {
    heading:"Honey",
    category:"Honey",
    id:44,
    imageUrl:"../../public/honey-3.jpg",
    details:"Organic, Natural and Best dry Honey From Kashmir",
    dashedPrice:"Rs 650",
    price:"Rs 449"
  },
  {
    heading:"Honey",
    category:"Honey",
    id:45,
    imageUrl:"../../public/honey-4.jpg",
    details:"Organic, Natural and Best Honey From Kashmir",
    dashedPrice:"Rs 650",
    price:"Rs 449"
  },
  {
    heading:"Tea and Kehwa",
    category:"Kashmiri-kehwa",
    id:46,
    imageUrl:"../../public/tea.jpg",
    details:"Original Kashmiri Kahwa",
    dashedPrice:"Rs 650",
    price:"Rs 449"
  },
  {
    heading:"Tea and Kehwa",
    category:"Kashmiri-kehwa",
    id:47,
    imageUrl:"../../public/kehwa.jpg",
    details:"Original Kashmiri Kehwa",
    dashedPrice:"Rs 650",
    price:"Rs 449"
  },
  {
    heading:"Safron And Spices",
    category:"Safron and Spices",
    id:48,
    imageUrl:"../../public/safron-1.jpg",
    details:"Original Kashmiri Safron",
    dashedPrice:"Rs 1050",
    price:"Rs 1000"
  },
  {
    heading:"Safron And Spices",
    category:"Safron and Spices",
    id:49,
    imageUrl:"../../public/safron-2.jpg",
    details:"Original  KO Kashmiri Safron",
    dashedPrice:"Rs 1050",
    price:"Rs 1000"
  },
  {
    heading:"Safron And Spices",
    category:"Safron and Spices",
    id:50,
    imageUrl:"../../public/safron-3.jpg",
    details:"Original Kashmiri Safron",
    dashedPrice:"Rs 1050",
    price:"Rs 1000"
  },
  {
    heading:"Safron And Spices",
    category:"Safron and Spices",
    id:51,
    imageUrl:"../../public/spices.jpg",
    details:"Original Kashmiri red Chilli Powder",
    dashedPrice:"Rs 1050",
    price:"Rs 1000"
  },
  {
    heading:"Copperware",
    category:"Copperware",
    id:52,
    imageUrl:"../../public/coppper-1.jpg",
    details:"Hand-Engraved Copper bowl",
    dashedPrice:"Rs 11000",
    price:"Rs 10500"
  },
  {
    heading:"Copperware",
    category:"Copperware",
    id:53,
    imageUrl:"../../public/coppper-2.jpg",
    details:"Hand-Engraved Copper glass",
    dashedPrice:"Rs 2000",
    price:"Rs 1500"
  },
  {
    heading:"Copperware",
    category:"Copperware",
    id:54,
    imageUrl:"../../public/coppper-3.jpg",
    details:"Hand-Engraved Copper plate",
    dashedPrice:"Rs 1100",
    price:"Rs 900"
  },
  {
    heading:"Copperware",
    category:"Copperware",
    id:55,
    imageUrl:"../../public/coppper-4.jpg",
    details:"Hand-Engraved Copper Samovar",
    dashedPrice:"Rs 55000",
    price:"Rs 50000"
  },
  {
    heading:"Cushion-Covers",
    category:"Cushion-Covers",
    id:56,
    imageUrl:"../../public/cusion.jpg",
    details:"Floral Crewel Embroidered Velvet Cushion Coverr",
    dashedPrice:"Rs 1100",
    price:"Rs 1000"
  },
  {
    heading:"Cushion-Covers",
    category:"Cushion-Covers",
    id:57,
    imageUrl:"../../public/cusion-2.jpg",
    details:"Floral Crewel Pink Embroidered Velvet Cushion Coverr",
    dashedPrice:"Rs 1100",
    price:"Rs 1000"
  },
  {
    heading:"Cushion-Covers",
    category:"Cushion-Covers",
    id:58,
    imageUrl:"../../public/cusion-3.jpg",
    details:"Floral Crewel Black Embroidered Velvet Cushion Coverr",
    dashedPrice:"Rs 1100",
    price:"Rs 1000"
  },
  {
    heading:"Cushion-Covers",
    category:"Cushion-Covers",
    id:59,
    imageUrl:"../../public/cusion-4.jpg",
    details:"Floral Crewel MulticolorEmbroidered Velvet Cushion Coverr",
    dashedPrice:"Rs 1100",
    price:"Rs 1000"
  },
  {
    heading:"Paper-Mache-Products",
    category:"Paper-Mache-Products",
    id:60,
    imageUrl:"../../public/paper.jpg",
    details:"Green Base Chinar Embossed Wooden Jewellery Cabinet",
    dashedPrice:"Rs 4500",
    price:"Rs 4270"
  },
  {
    heading:"Paper-Mache-Products",
    category:"Paper-Mache-Products",
    id:61,
    imageUrl:"../../public/paper-2.jpg",
    details:"Red Base Chinar Embossed Wooden Jewellery Cabinet",
    dashedPrice:"Rs 4500",
    price:"Rs 4270"
  },
  {
    heading:"Paper-Mache-Products",
    category:"Paper-Mache-Products",
    id:62,
    imageUrl:"../../public/paper-3.jpg",
    details:" Black Base Chinar Embossed Wooden Jewellery Cabinet",
    dashedPrice:"Rs 4500",
    price:"Rs 4270"
  },
  {
    heading:"Paper-Mache-Products",
    category:"Paper-Mache-Products",
    id:63,
    imageUrl:"../../public/paper-4.jpg",
    details:"Golden Base Chinar Embossed Wooden Jewellery Cabinet",
    dashedPrice:"Rs 4500",
    price:"Rs 4270"
  },
  {
    heading:"Walnut-Wood-Products",
    category:"Walnut-Wood-Products",
    id:64,
    imageUrl:"../../public/wood-1.jpg",
    details:"Floral Walnut Wood Jewellery Box",
    dashedPrice:"Rs 3500",
    price:"Rs 3270"
  },
  {
    heading:"Walnut-Wood-Products",
    category:"Walnut-Wood-Products",
    id:65,
    imageUrl:"../../public/wood-2.jpg",
    details:"Brown Walnut Wood Jewellery Box",
    dashedPrice:"Rs 3500",
    price:"Rs 3270"
  },
  {
    heading:"Walnut-Wood-Products",
    category:"Walnut-Wood-Products",
    id:66,
    imageUrl:"../../public/wood-3.jpeg",
    details:"Floral Walnut Wood Jewellery ",
    dashedPrice:"Rs 3500",
    price:"Rs 3270"
  },
  {
    heading:"Pashmina-Shawls",
    category:"Pashmina-Shawls",
    id:67,
    imageUrl:"../../public/shawl-1.jpg",
    details:"Brown-Chinar Ladies Hand Embroidered Cashmere Pashmina Shawl ",
    dashedPrice:"Rs 38000",
    price:"Rs 35000"
  },
  {
    heading:"Pashmina-Shawls",
    category:"Pashmina-Shawls",
    id:68,
    imageUrl:"../../public/shawl-2.jpg",
    details:"White-Chinar Ladies Hand Embroidered Cashmere Pashmina Shawl ",
    dashedPrice:"Rs 38000",
    price:"Rs 35000"
  },
  {
    heading:"Pashmina-Shawls",
    category:"Pashmina-Shawls",
    id:69,
    imageUrl:"../../public/shawl-3.jpg",
    details:"Black Brown-Chinar Ladies Hand Embroidered Cashmere Pashmina Shawl ",
    dashedPrice:"Rs 38000",
    price:"Rs 35000"
  },
  {
    heading:"Pashmina-Shawls",
    category:"Pashmina-Shawls",
    id:70,
    imageUrl:"../../public/shawl-4.jpg",
    details:"Brown-Chinar Ladies Hand Embroidered Cashmere Pashmina Shawl ",
    dashedPrice:"Rs 38000",
    price:"Rs 35000"
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Men-Shawls",
    id:71,
    imageUrl:"../../public/pashmina-men-1.jpg",
    details:"Blue Pashmina Jama Pashmina Shawl – Monsoon Wedding",
    dashedPrice:"Rs 70,999.00",
    price:"Rs 68,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Men-Shawls",
    id:72,
    imageUrl:"../../public/pashmina-men-2.jpg",
    details:"White Pashmina Jama Pashmina Shawl – Monsoon Wedding",
    dashedPrice:"Rs 70,999.00",
    price:"Rs 68,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Men-Shawls",
    id:73,
    imageUrl:"../../public/pashmina-men-3.jpg",
    details:"Black Pashmina Jama Pashmina Shawl – Monsoon Wedding",
    dashedPrice:"Rs 70,999.00",
    price:"Rs 68,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Men-Shawls",
    id:74,
    imageUrl:"../../public/pashmina-men-4.jpg",
    details:"Black Embroidery Pashmina Jama Pashmina Shawl – Monsoon Wedding",
    dashedPrice:"Rs 70,999.00",
    price:"Rs 68,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Stoles",
    id:75,
    imageUrl:"../../public/stole-1.jpg",
    details:"Brown Pashmina Jama Pashmina Stole – Monsoon Wedding",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Stoles",
    id:76,
    imageUrl:"../../public/stole-2.jpg",
    details:"Brown & White Pashmina Jama Pashmina Stole – Monsoon Wedding",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Stoles",
    id:77,
    imageUrl:"../../public/stole-3.jpg",
    details:"Red Pashmina Jama Pashmina Stole – Monsoon Wedding",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00",
  },
  {   
    heading:"New Kashmiri Pashmina Shawls!",
    category:"Pashmina-Stoles",
    id:78,
    imageUrl:"../../public/stole-4.jpg",
    details:"Blue Pashmina Jama Pashmina Stole – Monsoon Wedding",
    dashedPrice:"Rs 7,999.00",
    price:"Rs 6,250.00",
  },
  
  
];

mongoose.connect('mongodb://localhost:27017/kong-posh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  
  // Insert multiple products
  Product.insertMany(products)
    .then(() => {
      console.log("Products inserted successfully");
      mongoose.connection.close(); // Close the connection after insertion
    })
    .catch((error) => {
      console.error("Error inserting products:", error);
      mongoose.connection.close(); // Ensure connection is closed on error
    });

}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

import { createSlice } from "@reduxjs/toolkit"
// import instance from "../lib/AxiosInstance";
// import { ApiUrls } from "../constants";


export const productsData = createSlice({
  name: "products",
  initialState: {
    all: [
      {
        _id: "23dfqwd23d23d",
        title: "BoAt Rockerz 400 Bluetooth Headset Pink",
        company: "Bajaj",
        price: 324523,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/10_652x.jpg?v=1655096098", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/10_00_652x.jpg?v=1655096141"],
        categoryId: "3v3er4c4ec34ec",
        sales: 523
      },
      {
        _id: "wecewcecwec32",
        title: "Olympus pen E-PL9 kit with 14-42, EZ lens, camera",
        company: "Sony",
        price: 23462,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_652x.jpg?v=1655097254", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_00_652x.jpg?v=1655097265"],
        categoryId: "cwecwecwec3223c",
        sales: 7345412
      },
      {
        _id: "f32d23d23d2",
        title: "Dell S27QC 27 inch 4K UHD Monitor – Grey",
        company: "Bajaj",
        price: 1125423,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/08_00_652x.jpg?v=1655095360", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/08_652x.jpg?v=1655095351"],
        categoryId: "23ecwcxd3we2c2e4c",
        sales: 3623
      },
      {
        _id: "23d23dqwdq",
        title: "APPLE Watch Series 2 – 42 mm Stainless Steel Case",
        company: "Apple",
        price: 123124,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/22-01_652x.jpg?v=1655097801", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/22_652x.jpg?v=1655097801"],
        categoryId: "vc345rv343vc4e",
        sales: 45645
      },
      {
        _id: "g43ef3w2e42",
        title: "Samsung Galaxy A23 128GB 6GB RAM Purple Color",
        company: "Samsung",
        price: 34132,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/17_652x.jpg?v=1655096912", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/17_00_652x.jpg?v=1655096924"],
        categoryId: "3v3er4c4ec34ec",
        sales: 2324
      },
      {
        _id: "g23fd232dsdf",
        title: "HD Resolution Indoor Wi-Fi Security Camera, White",
        company: "Bajaj",
        price: 324512,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/14_00_652x.jpg?v=1655096590", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/14_652x.jpg?v=1655096578"],
        categoryId: "v4435rfv3wc4ec",
        sales: 4573452
      },
      {
        _id: "23ewd2q3wdasf",
        title: "Bang & Olufsen Beoplay H9i Wireless Over-Ear Headphones",
        company: "Bang",
        price: 6322,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/18_652x.jpg?v=1655097136", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/18_00_652x.jpg?v=1655097154"],
        categoryId: "232fr2qw3dw3das",
        sales: 456324
      },
      {
        _id: "2g3ewqfrd2qw3",
        title: "Sony EXTRA BASS Portable Splash-proof Wireless Speaker",
        company: "Sony",
        price: 52354,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/03_00_652x.jpg?v=1655095707", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/03_652x.jpg?v=1655095694"],
        categoryId: "g34g34ef32e4df",
        sales: 75675
      },
      {
        _id: "q3wev3wvwedcw",
        title: "New Upgraded 2K 1080P Streaming Webcam with Ring Light",
        company: "Ring",
        price: 52334,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/16_652x.jpg?v=1655096743", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/16_00_652x.jpg?v=1655096752"],
        categoryId: "f34e3w2e4f23",
        sales: 2324
      },
      {
        _id: "wedfwaqesdfd23",
        title: "Samsung Galaxy Note10+ Mobile Phone; Sim Free Smartphone",
        company: "Samsung",
        price: 23523,
        images: ["https://cdn.shopify.com/s/files/1/0620/5082/8457/products/01_652x.jpg?v=1655094851", "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/01_00_652x.jpg?v=1655094859"],
        categoryId: "3v3er4c4ec34ec",
        sales: 462213
      }
    ],
    current: {}
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.all = action.payload;
    },
    setCurrentProductById: (state, action) => {
      state.all.forEach((el) => {
        if (el._id === action.payload) state.current = el; 
      });
    },
    setCurrentProduct: (state, action) => {
      state.current = action.payload;
    },
    removeCurrentProduct: (state) => {
      state.current = {};
    },
  },
  extraReducers: {},
})

export const { setAllProducts, setCurrentProduct, removeCurrentProduct, setCurrentProductById } = productsData.actions;

export default productsData.reducer
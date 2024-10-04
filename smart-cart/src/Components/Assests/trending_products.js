import w1_img from './women_trending/w_trending_p_1.png';
import w2_img from './women_trending/w_trending_p_2.png';
import w3_img from './women_trending/w_trending_p_3.png';
import w4_img from './women_trending/w_trending_p_4.png';
import m1_img from './products/product_14.png';
import m2_img from './products/product_19.png';
import m3_img from './products/product_20.png';
import m4_img from './products/product_24.png';
import k1_img from './kid_trending/product_26.png';
import k2_img from './kid_trending/product_28.png';
import k3_img from './kid_trending/product_32.png';
import k4_img from './kid_trending/product_36.png';

const trending_products_women = [
    {
        id :1,
        name : "Stylish Blue Jacket",
        description :"Description for Blue Jacket",
        image : w1_img,
        new_cost : 2399,
        old_cost : 4000
    },
    {
        id : 2,
        name : "Pink Crop Top",
        description : "Description for Pink Top",
        image : w2_img,
        new_cost : 1200,
        old_cost : 2000
    },
    {
        id: 3,
        name : "Nike Sports Top",
        description : "Description for Nike Top",
        image : w3_img,
        new_cost : 1800,
        old_cost : 3200
    },
    {
        id: 4,
        name : "Loose Fit Brown Top",
        description : "Description for Brown Top",
        image : w4_img,
        new_cost:1450,
        old_cost : 3985
    }

];

const trending_products_men = [
    {
        id :1,
        name : "Marks & Spencer",
        description :"Description for Blue Jacket",
        image : m1_img,
        new_cost : 1100.00,
        old_cost : 4000.00
    },
    {
        id : 2,
        name : "HRX",
        description : "Description for Pink Top",
        image : m2_img,
        new_cost : 1200,
        old_cost : 2000
    },
    {
        id: 3,
        name : "H&M",
        description : "Description for Nike Top",
        image : m3_img,
        new_cost : 1800,
        old_cost : 3200
    },
    {
        id: 4,
        name : "Mango Man",
        description : "Description for Brown Top",
        image : m4_img,
        new_cost:1450,
        old_cost : 3985
    }

];

const trending_products_kids = [
    {
        id :1,
        name : "Stylish Blue Jacket",
        description :"Description for Blue Jacket",
        image : k1_img,
        new_cost : 2500.00,
        old_cost : 4000.00
    },
    {
        id : 2,
        name : "Pink Crop Top",
        description : "Description for Pink Top",
        image : k2_img,
        new_cost : 1200,
        old_cost : 2000
    },
    {
        id: 3,
        name : "Nike Sports Top",
        description : "Description for Nike Top",
        image : k3_img,
        new_cost : 1800,
        old_cost : 3200
    },
    {
        id: 4,
        name : "Loose Fit Brown Top",
        description : "Description for Brown Top",
        image : k4_img,
        new_cost:1450,
        old_cost : 3985
    }

];

 
export default {trending_products_women,trending_products_men,trending_products_kids};
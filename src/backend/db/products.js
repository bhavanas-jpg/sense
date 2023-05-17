import { v4 as uuid } from "uuid";
import skin_img1 from "../../assets/skin_care_images/skin_care_1.jpg"
import skin_img2 from "../../assets/skin_care_images/skin_care_2.jpg"
import skin_img3 from "../../assets/skin_care_images/skin_care_3.jpg"
import skin_img4 from "../../assets/skin_care_images/skin_care_4.jpg"
import hair_img1 from "../../assets/hair_care_images/hair_care_card1.png"
import hair_img2 from "../../assets/hair_care_images/hair_care_card2.jpg"
import hair_img3 from "../../assets/hair_care_images/hair_care_card3.png"
import hair_img4 from "../../assets/hair_care_images/hair_care_card4.jpg"
import body_img1 from "../../assets/body_care_images/body_care_card1.jpg"
import body_img2 from "../../assets/body_care_images/body_care_card2.jpg"
import body_img3 from "../../assets/body_care_images/body_care_card3.jpg"
import body_img4 from "../../assets/body_care_images/body_care_card4.jpg"
import nail_img1 from "../../assets/nail_polish/nail_polish_card1.jpg"
import nail_img2 from "../../assets/nail_polish/nail_polish_card2.jpg"
import nail_img3 from "../../assets/nail_polish/nail_polish_card3.jpg"
import nail_img4 from "../../assets/nail_polish/nail_polish_card4.jpg"


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: skin_img1,
    name: "Lavender Algae Peel-off Mask",
    price: "32.00" ,
    description: "In only 10 minutes, this face mask will help soothe, purify and moisturize the skin. Formulated with Lavender powder, to calm and soften the skin, with Melissa flower water (Lemon balm), to soothe and protect the skin, and with Acai extract, to regenerate and revive the skin, this face mask will leave your skin soothed and plumped!" ,
    category: "Skin Care",
    ratings: "4.0"
   },{
    _id: uuid(),
    img: hair_img1,
    name: "Monoi Conditioner",
    price: "28.00",
    description:"Made with aloe vera, flaxseed and hydrolyzed rice protein, this luxury conditioner will give strength, moisture, and brightness to your hair. Plus, the natural monoi aroma adds a sweet and charming scent.", 
    category:"Hair Care",
    ratings: "3.5"

},{
  _id: uuid(),
  img: nail_img2,
  name: "Nail Polish: Provence",
  price: "12.00",
  description: "Our nail polish is non toxic (10 free), vegan and not tested on animals. This high quality nail polish is very easy to apply, dries quickly and has a beautiful long-lasting finish!",
  category: "Nail Polish",
  ratings: "2.8"
},
{
  _id: uuid(),
  img: body_img1,
  name: "Herbal Body Soap",
  price: "10.00",
  description: "Our body soap is all natural, moisturizing, and perfect for all skin types, even the most sensitive skin.",
  category: "Body Care",
  ratings: "1.8"
},{
    _id: uuid(),
    img: skin_img2,
    name:"Superfruit Face Moisturizer",
    price: "68.00",
    description: "A rich and decadent face cream formulated with powerful natural ingredients your skin needs to be deeply moisturized, glowing and healthy. Made from grapefruit and apple fruit water, the Superfruit Face Moisturizer is full of vitamins and antioxidants.",
    category: "Skin Care",
    ratings: "4.2"

   },{
       _id: uuid(),
       img: skin_img4,
       name: "Pink Quartz Facial Roller",
       price: 40,
       description: "When you roll the rose quartz stone from the middle to the edges of the face, it reduces tension and relaxes muscles while offering a pleasant massage. Rose quartz is full of minerals and helps to firm the skin, reduce under-eye puffiness and make your complexion glow.",
       category: "Skin Care",
       ratings: 3.8 
   },
   {
    _id: uuid(),
    img: hair_img2,
    name: "Orange Conditioner Bar",
    price: "12.00",
    description: "This moisturizing conditioner bar perfectly completes your zero-waste beauty routine. With its natural and effective ingredients, it will leave any type of hair soft, moisturized and healthy.",
    category: "Hair Care",
    ratings: "3.2"
},{
  _id: uuid(),
  img: nail_img4,
  name: "Nail Polish: Arizona",
  price: "90.00",
  description: "Our nail polish is non toxic (10 free), vegan and not tested on animals. This high quality nail polish is very easy to apply, dries quickly and has a beautiful long-lasting finish!",
  category: "Nail Polish",
  ratings: "3.2"
},{
    _id: uuid(),
    img: hair_img3,
    name: "Bamboo Hair Brush",
    price: "22.00",
    description: "The Bamboo Hair Brush has large wooden bristles which help to naturally condition your hair, and evenly distribute your hair’s natural oils. The bristles are also gentle and durable. Since they're widely spaced, they are less likely to break the hair when combing. Plus, they don't produce any static compared to synthetic brushes and combs.",
    category: "Hair Care",
    ratings: "3.6"
},{
  _id: uuid(),
  img: skin_img3,
  name: "Papaya Enzyme Face Scrub",
  price: "30.00",
  description: "Our sensitive skin face scrub is made with papaya enzymes, which makes it a natural and nonabrasive exfoliator. Also formulated with cranberry and hibiscus powder, shea butter, and apricot oil, this exfoliant clarifies the complexion, fights skin fatigue and purifies the skin, leaving it soft, radiant, and moisturized.",
  category: "Skin Care",
  ratings: "3.6"
},{
    _id: uuid(),
    img: hair_img4,
    name: "Wooden Pumice Brush",
    price: "9.00",
    description: "This shower brush has on one side a pumice stone which makes a perfect natural exfoliant for the feet, and on the other side a brush made out of polypropylene bristles.",
    category: "Hair Care",
    ratings: "2.8"
},
{
  _id: uuid(),
  img: nail_img1,
  name: "The Classics-Nail Polish Collection",
  price: "40.00",
  description: "This timeless nail polish trio contains our favorite classic shades.",
  category: "Nail Polish",
  ratings: "3.0"
},{
  _id: uuid(),
  img: body_img2,
  name: "Coffee Moisturizing Scrub",
  price: "34.00",
  description: "Just like your morning coffee, our coffee and peppermint body scrub is the perfect partner to kick off your day. Made with shea butter, apricot oil, and Moroccan lava clay, this scrub will nourish your skin deeply, leaving it soft, purified and moisturized.",
  category: "Body Care",
  ratings: "4.5"
},
{
 _id: uuid(),
 img :body_img3,
 name: "Body Lotion",
 price: "80.00",
 description: "Soft, light and nourishing, our body lotion will moisturize your skin deeply while leaving a non-greasy and silky finish.",
 category: "Body Care",
 ratings: "3.5"
},{
  _id: uuid(),
  img : body_img4,
  name: "Everthing Body Soap",
  price: "100.00",
  description: "Our body soap is all natural, moisturizing, and perfect for all skin types, even the most sensitive skin.",
  category: "Body Care",
  ratings: "1.8"
},{
  _id: uuid(),
  img: nail_img3,
  name: "Nail Polish: Black Heart",
  price: "60.00" ,
  description: "Our nail polish is non toxic (10 free), vegan and not tested on animals. This high quality nail polish is very easy to apply, dries quickly and has a beautiful long-lasting finish!",
  category: "Nail Polish",
  ratings: "4.8"

}
];

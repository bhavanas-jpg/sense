import { v4 as uuid } from "uuid";
import img1 from "../../assets/home_page_images/home_skin_care.jpg"
import img2 from "../../assets/home_page_images/home_body_care.jpg"
import img3 from "../../assets/home_page_images/home_nail_polish.jpg"


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image : img1,
    categoryName: "Skin Care",
    description: "Keep your skin looking and feeling its best with an all-natural, plant-based routine.",
  },
  {
    _id: uuid(),
    image : img2,
    categoryName: "Body Care",
    description: "Treat your skin and indulge your senses with luxurious formulas, spa-grade tools, and irresistible scents.",
  },
  {
    _id: uuid(),
    image : img3,
    categoryName: "Nail Polish",
    description: "Rich colors that last, without any of the toxic ingredients typically found in nail polish.",
  },
  {
    _id: uuid(),
    categoryName:"Hair Care",
    description: "Expertly blended shampoos and conditioners mean every day can be a good hair day."
  }
];

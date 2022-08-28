import { useState } from "react";
import { Product } from "../../components";
import { motion } from "framer-motion";
import { useStateContext } from "../../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { urlFor, client } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, extra, extra2, notice, category } =
    product;
  const [index, setIndex] = useState(0);
  //grabbed from our main context
  const { increaseQuantity, decreaseQuantity, qty, onAdd, setShowCart } =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <>
      <motion.div
        className="slug-container"
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={urlFor(image && image[index])}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{name}</h1>

            <h3 className="prod-bit">
              <strong>{details}</strong>
            </h3>
            <p>{extra}</p>
            <p>{extra2}</p>
            <p></p>
            <h3 className="notice-bit">{notice}</h3>
            <div className="quantity">
              <h2 className="price">£{price}</h2>
              <p className="quantity-desc">
                <span className="minus" onClick={decreaseQuantity}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={increaseQuantity}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>

            <div className="buttons">
              <button
                type="button"
                className="btn add-cart"
                onClick={() => {
                  onAdd(product, qty); // onAdd from context, taking in product selected and quantity from state.
                }}
              >
                Add to Cart
              </button>
              <button type="button" className="btn buy " onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            {/* {category === "lighting" ? (
              ""
            ) : (
              <>
                <div className="specs">
                  <h3>
                    <strong>{name}'s Specifications</strong>
                  </h3>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">LED Bulb</th>
                        <td scope="col">Included</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="col">Bulb Specification</th>
                        <td scope="col">LED E14 – 2W – 120 Lumen – 2200K</td>
                      </tr>
                      <tr>
                        <th scope="col">Usage</th>
                        <td scope="col">Indoor Only</td>
                      </tr>
                      <tr>
                        <th scope="col">Material</th>
                        <td scope="col">Resin</td>
                      </tr>
                      <tr>
                        <th scope="col">Dimensions</th>
                        <td scope="col">33.5 x 11.5 x 10.5cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )} */}
          </div>
        </div>

        {/* <div className="maylike-products-wrapper">
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div> */}
      </motion.div>
      {/* <Banner /> */}
    </>
  );
};

//export static paths, so next can generate url routes for the data we're pre-rendering via getStaticProps
//basically this request asks for all products, but only return the slug for each one
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
  const products = await client.fetch(query);
  //create paths from query data - map over the array that the query returns and for each product returned, create an object with a params object
  //which contains a slug equaual to the current slug value of the product being returned
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  //finally return the paths generated from all of this - with a fallback that makes user wait (bad) if data doesn't exist. fix up later.
  return {
    paths,
    fallback: "blocking",
  };
};

//let's do our strapi api requests (statically pre-rendered) - async function
export const getStaticProps = async ({ params: { slug } }) => {
  //get products based on product slug
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  //get all products
  const productsQuery = '*[_type == "product"]';
  //actually fetch our query for single product based on slug
  const product = await client.fetch(query);
  //fetch query for all getting all products
  const products = await client.fetch(productsQuery);

  //finally actually return the data received so we can use it
  return {
    props: { products, product },
  };
};

export default ProductDetails;

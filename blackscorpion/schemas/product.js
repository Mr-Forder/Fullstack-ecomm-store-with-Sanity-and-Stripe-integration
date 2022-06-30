export default {
  //default export, so we can import the schema and use it.
  //here we're making a schema for our products. it's just an object, with a name and type and fields, which are also objects, in an array.
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      // first field, is the product images. it's an array of images. options allow us to specify how each image is displayed.
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      //the name value of each product. simple.
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      //the url slug for each product. It will use our name field as the source to generate the url for the product.
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      //price, a number
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      //price, a number
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      //and finally additional details. also a string, as you'd expect.
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      //and finally additional details. also a string, as you'd expect.
      name: "extra",
      title: "extra",
      type: "string",
    },
    {
      //and finally additional details. also a string, as you'd expect.
      name: "extra2",
      title: "extra2",
      type: "string",
    },
    {
      //and finally additional details. also a string, as you'd expect.
      name: "notice",
      title: "notice",
      type: "string",
    },
  ],
};

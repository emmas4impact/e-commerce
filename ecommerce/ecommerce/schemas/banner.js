export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      Option: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "product",
      title: "Product",
      type: "string",
    },

    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
    {
      name: "smallText",
      titile: "SmallText",
      type: "string",
    },
    {
      name: "midText",
      titile: "MidText",
      type: "string",
    },
    {
      name: "largeText1",
      titile: "LargeText1",
      type: "string",
    },
    {
      name: "largeText2",
      titile: "LargeText2",
      type: "string",
    },
    {
      name: "discount",
      titile: "Discount",
      type: "string",
    },
    {
      name: "saleTime",
      titile: "SaleTime",
      type: "string",
    },
  ],
};

import { shape, string, number, arrayOf, oneOfType } from "prop-types";

const cardType = shape({
  _id: string,
  title: string.isRequired,
  img: string,
  // subtitle: string.optinal,
  // description: string.isRequired,
  // price: number.isRequired,
  // img: string.isRequired,
  // bizNumber: number.isRequired,
  // phone: string.isRequired,
  // likes: arrayOf(string).isRequired,
  // web: oneOfType([string]).isRequired,
  // email: string.isRequired,
  // user_id: string.isRequired,
  // createdAt: string.isRequired,
});

export default cardType;
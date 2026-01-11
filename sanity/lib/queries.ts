export const POSTS_QUERY = `*[_type=="post"]|order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage
}`;

export const POST_BY_SLUG_QUERY = `*[_type=="post" && slug.current==$slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  body
}`;

export const casesS_QUERY = `*[_type=="casesType"]|order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  status,
  location,
  loanAmount,
  termMonths,
  apr,
  safetyMargin,
  dealId,
  image,
  summary
}`;

export const FAQ_QUERY = `*[_type=="faqItemType"]|order(order asc){
  _id,
  question,
  answer
}`;

export const toursQuery = `
  *[_type == "tourExcursion"] | order(order asc) {
    _id,
    title,
    description,
    bgColor,
    images[0...15]{
      asset->{
        url
      }
    }
  }
`

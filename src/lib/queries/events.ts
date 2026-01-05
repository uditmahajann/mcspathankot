export const eventsQuery = `
*[_type == "event"] | order(date desc) {
  _id,
  title,
  description,
  date,
  location,
  featured,
  tags,
  video {
    asset->{
      url
    }
  }
}
`
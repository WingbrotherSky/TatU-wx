const host = "http://localhost:3000/api/v1/"

module.exports = {
  getAllShops: host + "shops",
  getShop: host + "shops/",
  getAllArtists: host + "artists",
  getArtist: host + "artists/",
  getArt: host + 'arts/',
  postMessage: host + 'messages'
}
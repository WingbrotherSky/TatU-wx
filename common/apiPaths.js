// const host = "https://tatu.wogengapp.cn/api/v1/"
const host = "http://localhost:3000/api/v1/"

module.exports = {
  getAllShops: host + "shops",
  getShop: host + "shops/",
  getAllArtists: host + "artists",
  getArtist: host + "artists/",
  getArt: host + 'arts/',
  postMessage: host + 'messages',
  newFavorite: host + 'favorites'
  getAllFavorites: host + "favorites"
}

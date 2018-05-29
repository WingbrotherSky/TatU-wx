<<<<<<< HEAD
<<<<<<< HEAD
// const host = "https://tatu.wogengapp.cn/api/v1/"
const host = "http://localhost:3000/api/v1/"
=======
const host = "https://tatu.wogengapp.cn/api/v1/"
>>>>>>> updated api paths to production server
=======
const host = "https://tatu.wogengapp.cn/api/v1/"
>>>>>>> rebasing

module.exports = {
  getAllShops: host + "shops",
  getShop: host + "shops/",
  getAllArtists: host + "artists",
  getArtist: host + "artists/",
  getArt: host + 'arts/',
  postMessage: host + 'messages',
  getAllConversations:  host + 'conversations',
  getConverstation: host + 'conversation/',
  newFavorite: host + 'favorites',
  getAllFavorites: host + "favorites",
  deleteFavorite: host + "favorites/"
}


const host = "http://localhost:3000/api/v1/"

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

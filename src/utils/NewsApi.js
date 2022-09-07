const API_KEY = '3e16a3113c064344a66447ee01caf67e';
const PAGE_SIZE = 100;

class NewsApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getSearchArticles(keyword) {
    return fetch(
      `${
        this._baseUrl
      }?apiKey=${API_KEY}&q=${keyword}&from=${this._from()}&to=${this._to()}&pageSize=${PAGE_SIZE}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(this._checkResponse);
  }
  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  _to() {
    const currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
  }

  _from() {
    const date = new Date();
    const subtractWeek = new Date(date.setDate(date.getDate() - 7))
      .toJSON()
      .slice(0, 10);
    return subtractWeek;
  }
}
const newsApi = new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2/everything',
  // apiKey: '3e16a3113c064344a66447ee01caf67e',
  // to: new Date(),
  // from: new Date(new Date() - 60 * 60 * 24 * 7 * 1000),
  // pageSize: 100,
});
export default newsApi;

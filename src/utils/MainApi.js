import React from 'react';

class MainApi extends React.Component {
  constructor(props) {
    super(props);
    const headers = props.headers;
    this._baseUrl = props.baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getCurrentUser() {
    const authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers, Authorization: authorization },
    }).then(this._getResponseData);
  }

  getSavedArticles() {
    const authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._baseUrl}/articles`, {
      headers: { ...this._headers, Authorization: authorization },
    }).then(this._getResponseData);
  }

  saveArticles(newsCard) {
    const authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._baseUrl}/articles`, {
      headers: { ...this._headers, Authorization: authorization },
      method: 'post',
      body: JSON.stringify({
        keyword: localStorage.getItem('currentKeyword'),
        title: newsCard.title,
        text: newsCard.text,
        date: newsCard.date,
        source: newsCard.source,
        link: newsCard.link,
        image: newsCard.image,
      }),
    }).then(this._getResponseData);
  }

  deleteArticle(id) {
    const authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._baseUrl}/articles/${id}`, {
      headers: { ...this._headers, Authorization: authorization },
      method: 'DELETE',
    }).then(this._getResponseData);
  }
}
const api = new MainApi({
  // baseUrl: 'https://api.news-explorer-aseel.students.nomoredomainssbs.ru',
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
export default api;

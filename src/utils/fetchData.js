/* eslint-disable consistent-return */
export default class myRequestGet {
  constructor() {
    this.appID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/';
    this.submitComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/comments';
  }

  static getAll = async (url, member = null) => {
    try {
      const charsData = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      const charArr = charsData[member];

      return charArr;
    } catch (err) {
      console.error(err);
    }
  };

  static getOne = async (url) => {
    const charsData = await fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));

    return charsData;
  };

  static getComments = async (id) => {
    const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/comments?item_id=${id}`)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => err);

    return comments;
  };

  static postComments = async (id, user, text) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: user,
        comment: text,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static getLikes = async (url) => {
    try {
      const charsData = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);

      return charsData;
    } catch (err) {
      console.error(err);
    }
  }

  static postLike = async (url, charId) => {
    try {
      return await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: charId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}
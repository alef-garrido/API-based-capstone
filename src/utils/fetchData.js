/* eslint-disable consistent-return */
export default class myRequestGet {
  constructor () {
    this.IdUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/KUcXNh15Xp4XOwHZwJel'
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
   }

  static getOne = async (url) => {
    try {
      const charsData = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);

      return charsData;
    } catch (err) {
      console.error(err);
    }
  }
  

}

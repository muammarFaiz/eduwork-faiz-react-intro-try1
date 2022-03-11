import React from 'react';
import axios from 'axios';
import Cards from './cards.jsx';

const newsapiEV = `https://newsapi.org/v2/everything`;
const newsapiTH = `https://newsapi.org/v2/top-headlines`;
const pr = {
  key: 'apiKey=5b5faf373f0c4c269683b16bece8f00b',
  country: 'country=id',
  pagesize: 'pageSize=12',
  searchAccuracy: 'searchIn=title,description'
};

export default function Newsapi() {
  const [newsJsonList, setNewsJsonList] = React.useState([]);
  const [userin, setuserin] = React.useState('');
  const showLoading = React.useRef(true);

  React.useEffect(() => {
    axios.get(
      `${newsapiTH}?${pr.key}&${pr.country}&${pr.pagesize}`
    ).then(res => {
      // console.log('A2. initial main page: ', res.data.articles);
      setNewsJsonList(res.data.articles);
    });
  }, []);

  React.useEffect(() => {
    if(showLoading.current) {

      showLoading.current = false;
      // console.log('S2/A2. turning the need to false to show the result next reload');
    } else {
      // console.log('S3/A3. after second reload because received the result: ', newsJsonList);
    }
  }, [newsJsonList]);
  // React.useEffect(() => console.log('S2/A2/A3. useEffect re-render: ', showLoading.current));


  function search() {
    const toCheck = userin.trim();
    let modString = '';
    let err;
    for(let i = 0; i < toCheck.length; i++) {
      if(toCheck[i].match(/[0-9a-zA-Z ]/g)) {
        if(toCheck[i] === ' ') {modString = modString + '%20';}
        else {modString = modString + toCheck[i];}
      } else {
        err = true;
      }
    }
    if(!err) {
      showLoading.current = true;
      setNewsJsonList('');
      // console.log('S2. search accepted, modstring: ', modString);
      axios.get(`${newsapiEV}?${pr.key}&${pr.pagesize}&${pr.searchAccuracy}&q=${modString}`).then(
        res => {
          // console.log('S3. received json from newsapi: ', res.data.articles);
          setNewsJsonList(res.data.articles);
        });
    } else {
      // console.log('S1. search not accepted: ', modString);
      alert('Hanya terima angka, huruf, dan spasi');
    }
  }

  if(showLoading.current) {
    // console.log('S1/S4/A1. should show loading');
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
      <div className="fixed-top faizInput input-group mb-3">
      <input type="text" className="form-control" placeholder="Search"
      aria-label="Recipient's username" aria-describedby="button-addon2"
      value={userin} onChange={val => setuserin(val.target.value)} />
      <button className="btn btn-info" type="button" id="button-addon2"
      onClick={search}>Search</button>
      </div>
      <Cards objList={newsJsonList} />
      </>
    )
  }
}

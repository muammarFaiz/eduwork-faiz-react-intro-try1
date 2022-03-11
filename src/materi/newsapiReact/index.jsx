import React from 'react';
import axios from 'axios';
import Cards from './cards.jsx';

const newsapiEV = `https://newsapi.org/v2/everything`;
const newsapiTH = `https://newsapi.org/v2/top-headlines`;
const pr = {
  key: 'apiKey=b5d18de9619d4affb26d9aef07d1c909',
  country: 'country=id',
  pagesize: 'pageSize=12',
  searchAccuracy: 'searchIn=title,description'
};

export default function Newsapi() {
  const [jsonapi, setjsonapi] = React.useState([]);
  const [userin, setuserin] = React.useState('');
  const [, rerender] = React.useState();
  const needRender = React.useRef(true);

  React.useEffect(() => {
    axios.get(
      `${newsapiTH}?${pr.key}&${pr.country}&${pr.pagesize}`
    ).then(res => {
      console.log(res.data.articles);
      setjsonapi(res.data.articles);
    });
  }, []);
  React.useEffect(() => {
    if(needRender.current) {
      needRender.current = false;
      console.log(needRender.current);
      rerender('');
    }
  }, [jsonapi]);
  React.useEffect(() => console.log('re-render'));

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
      needRender.current = true;
      rerender('search function');
      console.log(modString);
      axios.get(`${newsapiEV}?${pr.key}&${pr.pagesize}&${pr.searchAccuracy}&q=${modString}`).then(
        res => {
          console.log(res.data.articles);
          setjsonapi(res.data.articles);
        });
    } else {
      console.log(modString);
      alert('Hanya terima angka, huruf, dan spasi');
    }
  }

  if(needRender.current) {
    console.log('the return if');
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
      <Cards objList={jsonapi} />
      </>
    )
  }
}

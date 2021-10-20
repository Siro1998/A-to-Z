let title;
let date;
let artist;
let material;
let dimension;
let imgurl;

// import TwitterApi from 'twitter-api-v2'
const {TwitterApi} = require('twitter-api-v2');

const fetch = (...args) => import('node-fetch').then(({
  default: fetch
}) => fetch(...args));

const dotenv = require('dotenv');
dotenv.config();

console.log(TwitterApi);

const client = new TwitterApi({
  appKey: process.env.AppKey,
  appSecret: process.env.AppSecret,
  accessToken: process.env.AccessToken,
  accessSecret: process.env.AccessSecret,
});

async function getArt() {
  const number = getRandomInt(1, 437134);
  console.log(number);
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${number}`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  let judge = data.isPublicDomain;
  
  if (judge) {
    title = data.title;
    date = data.objectDate;
    artist = data.artistDisplayName;
    dimension = data.dimensions;
    material = data.medium;
    imgurl = data.primaryImage;
    // console.log(title);
    // console.log(date);
    // console.log(artist);
    // console.log(material);
    // console.log(dimension);
    // console.log(imgurl);
    const response1 = await fetch(imgurl);
    const buffer = await response1.buffer();
    console.log(buffer);
    return buffer;
  } 
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function tweet() {
  const img = await getArt();
  if (typeof img == "undefined"){
    console.log(img);
    console.log("not public, get another one!");
    tweet();
  }else{
    const mediaId = await client.v1.uploadMedia(Buffer.from(img), {type: 'png'});
    await client.v1.createMediaMetadata(`${mediaId}`, {alt_text: {text: 'Art!'}});
    const response = await client.v1.tweet(`${artist}\n${title} (${date})\n${material}\n${dimension}`,{media_ids: [mediaId]});
    const {created_at,id,full_text} = response;
    console.log(`${id} ${created_at}: ${full_text}`);
  }
}

tweet();
setInterval(tweet,2*60*60*1000);
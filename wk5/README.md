# Twitter Bot!!！
## What I did!
  For the bot project, I created a Twitter bot that posts artworks. 
  I used the Metropolitan Museum of Art Collection API to get artwork data, and used twitter-api-v2 to post the artwork automatically.
  <br> [Twitter Bot Link](https://twitter.com/XiangruiZeng98)
  
  <img width="600" alt="Screen Shot 2021-10-20 at 1 53 01 AM" src="https://user-images.githubusercontent.com/43830622/138035869-4730ef31-460a-4ec6-9b4e-aee622d5ccb0.png">
  
## Node-twitter-api-v2
  install npm twitter library, run this on terminal
  ```ruby
  npm init
  ```
  ```ruby
  npm install twitter-api-v2
  ```
  import TwitterApi from 'twitter-api-v2'
  ```ruby
  const {TwitterApi} = require('twitter-api-v2');
  ```
  Create a new project on Twitter Developer Portal, and generate keys and tokens. Creat a new client and store all the API keys in a .env file
  ```ruby
  const client = new TwitterApi({
  appKey: process.env.AppKey,
  appSecret: process.env.AppSecret,
  accessToken: process.env.AccessToken,
  accessSecret: process.env.AccessSecret,
  });
  ```
  write the tweet function
  ```ruby
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
 ```
 call the function every 2 hours
 ```ruby
  tweet();
  setInterval(tweet,2*60*60*1000);
 ```
  
## Get Data from The Metropolitan Museum of Art Collection API

The Metropolitan Museum of Art Collection API is free and it doesn't need API keys. I used the following endpoint to get an object from their databased.

<img width="703" alt="Screen Shot 2021-10-19 at 8 03 54 PM" src="https://user-images.githubusercontent.com/43830622/138035224-87c3c6f4-2609-476f-9d51-c914ecad8b34.png">

write a function to get a random number
```ruby
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
```

write the function to get data and image from the API.
```ruby
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
    const response1 = await fetch(imgurl);
    const buffer = await response1.buffer();
    console.log(buffer);
    return buffer;
  } 
}
```
  

## Result
Run the js code on terminal and Twitter bot will post a tweet every two hours.
```ruby
node script.js
```

<img width="598" alt="Screen Shot 2021-10-20 at 2 18 23 AM" src="https://user-images.githubusercontent.com/43830622/138038590-31b705fa-1c9d-4a9b-b16d-4683a05b0034.png">

console.log('hi tweeter')

// import TwitterApi from 'twitter-api-v2'
const { TwitterApi } = require('twitter-api-v2');

const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.NAME);

console.log(TwitterApi);

const client = new TwitterApi({
    appKey: process.env.AppKey,
    appSecret: process.env.AppSecret,
    accessToken: process.env.AccessToken,
    accessSecret: process.env.AccessSecret,
  });

tweet();

async function tweet(){
    const response = await client.v1.tweet('yoyoyoyo');
    console.log(response.created_at);
}

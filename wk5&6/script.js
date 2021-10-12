console.log('hi tweeter')

// import TwitterApi from 'twitter-api-v2'
const { TwitterApi } = require('twitter-api-v2');
console.log(TwitterApi);

const client = new TwitterApi({
    appKey: 'cUbypuvpMIajhfemr3DlPxRdZ',
    appSecret: 'Zwiokpai8jNW7jiak1dEyIc13QKCZDuvStTrlPNsFOsV2GD6id',
    accessToken: '1443298829378461696-kiVv5SfxBvttVzZwDbSm4XxHcFthAm',
    accessSecret: 'bU7IjC2ZKpAQmwCqHqT6oMjKtcmk07dDNnKlz0I76Oig6',
  });

tweet();

async function tweet(){
    const response = await client.v1.tweet('hellowwww');
    console.log(response.created_at);
}

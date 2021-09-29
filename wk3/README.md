# WK3

### Website with Giphy API and Kanye Rest API. 
* Click on Kanye's head, you will see a quote by him, and you can type in a comment of that quote. 
* After click the post button, a random gif related to your comment will be pulled from Giphy API and displayed on the website. 
* I use html, css and javascript for this website. 
* Try my website here!https://a2zw3kanyequotegifapi.netlify.app/

Here is a video demo.

https://user-images.githubusercontent.com/43830622/135311180-fdb0739d-b118-43b8-bc4c-efe4d21c0902.mov


* These are two functions that get gif from Giphy API and get quote from Kanye Rest API. I use fetch() in both of them in the basic way by .then. 
* **Question：** I'm not sure what is the difference between .then and async when using fetch(). 
* For the Giphy API, I use the random endpoint and I need to get a API key to have access to that. I don't hide my API key in the code this time, but it's fine for this API I think. lol. But maybe I should hide it next time.

<img width="838" alt="Screen Shot 2021-09-29 at 12 13 20 PM" src="https://user-images.githubusercontent.com/43830622/135309895-de536fd6-1f54-40de-800d-cb1e6b6e978f.png">

<img width="1059" alt="Screen Shot 2021-09-29 at 12 53 15 PM" src="https://user-images.githubusercontent.com/43830622/135314212-2dd1ea6f-78f4-4cbc-944c-08c24b689b19.png">

* **Another question：** I use a Kanye West picture as a button img source, but i want to get rid of the border of the button, not sure how to do that. Here is what I wrote in the html & js code for the button.
<img width="760" alt="Screen Shot 2021-09-29 at 1 04 52 PM" src="https://user-images.githubusercontent.com/43830622/135315915-038b4259-08da-4346-a51c-90ae6fb5c1a8.png">
<img width="642" alt="Screen Shot 2021-09-29 at 1 06 33 PM" src="https://user-images.githubusercontent.com/43830622/135316084-0f26eeb8-8d91-4ef8-b5da-f8d12f6adace.png">

const giphyAPIKey = "moTuOrHfKc7d5rAGn0qhg4hy8Mg8pClc"; // sign up and create an app to get one: https://developers.giphy.com/

const getGif = (phrase) => {
	const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${phrase}`;

	// more info: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	fetch(url, { mode: "cors" })
		.then((response) => response.json())
		.then((result) => {
			let imgUrl = result.data.image_url;
			document.querySelector("#the-gif").src = imgUrl;
			console.log(imgUrl);
		});
};

const getQuote = () =>{
    const url = 'https://api.kanye.rest/';
    fetch(url, )
        .then((response) => response.json())
        .then((data) => {
            let kanyeQuote = data.quote;
            document.querySelector("#quote-div").textContent = kanyeQuote;
            console.log(data);
        });
}

document.querySelector("#quote").onmousedown = () => {
    document.querySelector("#kanye").src = "kanye-west-head1.png";
};

document.querySelector("#quote").onmouseup = () => {
    console.log("getQuote");
    document.querySelector("#kanye").src = "kanye-west-head2.png";
    getQuote();
};

document.querySelector("#gif").onclick = () => {
    console.log("search");
    let textInput = document.querySelector("#text-input").value;
	getGif(textInput);
};
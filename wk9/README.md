# WK8

### Lyrics Generator

* Try my sketch here https://editor.p5js.org/Siro1998/sketches/afmh9iDM7
* For wk8 assignment, I created a lyrics generator using markov chain. I found a dataset that includes 745 popular English songs lyrics from artists like Taylor Swift, Billie Eilish, David Bowie, etc... and save the lyrics as a txt file.

<img width="1108" alt="Screen Shot 2021-10-11 at 8 37 25 PM" src="https://user-images.githubusercontent.com/43830622/136878516-36eb5fb2-ad97-4287-a978-008713dd5224.png"><img width="466" alt="Screen Shot 2021-10-11 at 10 09 05 PM" src="https://user-images.githubusercontent.com/43830622/136879289-ef082286-247c-4af2-a149-624a825a3327.png">

* I used the 02 markov by word example and change the text file to lyrics.txt.

```ruby
// An array of lines from a text file
let lines;
// The Markov Generator object
let markov;
// An output element
let output;

// Preload some seed data
function preload() {
  lines = loadStrings('data/lyrics.txt');
}

function setup() {
  // N-gram length and maximum length
  markov = new MarkovGeneratorWord(4, 280);

  // Feed one line at a time
  for (let i = 0; i < lines.length; i++) {
    markov.feed(lines[i]);
  }
  
  // Make the button
  let button = createButton('generate');
  button.mousePressed(generate);

  noCanvas();
}

function generate() {
  // Generate some text
  let result = markov.generate();
  // Put in HTML line breaks wherever there was a carriage return
  result = result.replace('\n','<br/><br/>');
  createP(result);
}
```

* And here is what I got.

<img width="434" alt="Screen Shot 2021-11-03 at 1 51 39 PM" src="https://user-images.githubusercontent.com/43830622/140164963-703dc595-ddc9-420c-a4d3-1dfa52df7726.png">


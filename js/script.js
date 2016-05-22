// Tested on Mac OS X 10.11.4
//  Chrome 50.0.2661
//  Safari 9.1
//  Firefox 46.0.1

var quotes = [
  {
    quote: "Quality means doing it right when no one is looking.",
    source: "Henry Ford",
    citation: "forbes.com",
    year: 1912,
    tags: ["business", "motivation"]
  },
  {
    quote: "Complexity is your enemy. Any fool can make something complicated. It is hard to keep things simple.",
    source: "Sir Richard Branson",
    tags: ["business", "inspiration", "simplicity"]
  },
  {
    quote: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
    source: "Steve Jobs",
    citation: "techinsider.io",
    year: 2004,
    tags: ["inspiration", "simplicity", "people"]
  },
  {
    quote: "Try not to become a man of success, but rather try to become a man of value.",
    source: "Albert Einstein",
    citation: "higherperspectives.com",
    tags: ["inspiration", "people"]
  },
  {
    quote: "Know the rules well, so you can break them effectively.",
    source: "Dalai Lama XIV",
    year: 1997,
    tags: ["inspiration", "people"]
  },
  {
    quote: "Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one.",
    source: "John Lennon",
    year: 1968,
    tags: ["inspiration", "people"]
  },
  {
    quote: "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
    source: "Nicola Tesla",
    citation: "brainyquote.com",
    tags: ["inspiration", "people", "motivation"]
  },
  {
    quote: "People won't have time for you if you are always angry or complaining.",
    source: "Steven Hawking",
    citation: "brainyquote.com",
    year: 1993,
    tags: ["inspiration", "time"]
  }
];

var quoteIndex = quotes.length;

// Generate a random number between low and high values
var getRandomNumber = function(low, high) {
  return Math.floor((high - low + 1) * Math.random() + low);
};

// Generate and return a random RGB color in rgb(r, g, b) format
var getRandomColor = function(rangeA, rangeB) {
  var color = "rgb(";
      color += getRandomNumber(rangeA, rangeB) + ', ';
      color += getRandomNumber(rangeA, rangeB) + ', ';
      color += getRandomNumber(rangeA, rangeB) + ')';
  return color;
};

// Shuffles an array in place  based on the Fisher-Yates algorithm
function shuffleArray(anArray) {
    var random, index, temp;
    // iterate trough all elements
    for (index = anArray.length; index > 0; index--) {
        // generate a random index for current element
        random = Math.floor(Math.random() * index);
        // and swap elements
        temp = anArray[index - 1];
        anArray[index - 1] = anArray[random];
        anArray[random] = temp;
    }
}

// Generates a radom number between 0 and the size or the array quotes
// and returns an object for the array corresponding to that number
var getRandomQuote = function() {
  // if all elements have been displayed
  // shuffle the array and start over
  if (quoteIndex >= quotes.length) {
    quoteIndex = 0;
    shuffleArray(quotes);
  }
  // pick the current element of the arrray and
  // increment the curent quote index
  var quote = quotes[quoteIndex];
  quoteIndex++;
  return quote;
};

// Selects a random object form the array quotes then assembles the html
// element by checking for and excluding optional elements then replaces
// the quote on the page with the newly generated one and changes the colors
var printQuote = function() {
  var randomColor = getRandomColor(25, 150);
  var item  = getRandomQuote();
  var html  = '<p class="quote"> ' + item.quote + ' </p>';
      html += '<p class="source">' + item.source;
      html += (item.hasOwnProperty('citation') ? '<span class="citation">' + item.citation + '</span>': '');
      html += (item.hasOwnProperty('year') ? '<span class="year">' + item.year + '</span>': '');
      html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  // change background color
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
  document.body.style.backgroundColor = randomColor;
};

// Event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Window Timer event triggering the "printQuote" function at 30 second intervals
var quoteTimer = window.setInterval(printQuote, 30000);

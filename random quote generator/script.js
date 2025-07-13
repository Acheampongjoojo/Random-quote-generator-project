//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Steve Jobs', 
     'quote': 'Dont let the noise of others opinions drown out your own inner voice',
     'year': '2005'

    },
    {'author': 'Wayne Gretzky', 
     'quote': 'You miss 100% of the shots you dont take',
     'year': '1995'
    },
    {'author': 'Sam Levenson', 
     'quote': 'Dont watch the clock; do what it does, Keep going',
     'year': '1956'
    },
    {'author': 'C.S Lewis', 
     'quote': 'Hardships often prepare ordinary people for extraordinary destiny',
     'year': '1950'
    },
    {'author': 'Steve Jobs', 
     'quote': 'Your time is limited, so do not waste it living someone else’s life.',
     'year': '2005'
    },
    {'author': 'Walt Disney', 
     'quote': 'All our dreams can come true if we have the the courage to pursue them',
     'year': '1957'
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': 'The future belongs to those who believe in the beauty of their dreams.',
     'year': '1960'
    },
    {'author': 'Zig Ziglar', 
     'quote': 'You don’t have to be great to start, but you have to start to be great.',
     'year': '1975'
    },
    {'author': 'Maya Angelou', 
     'quote': 'You will face many defeats in life but never let yourself be defeated',
     'year': '1995'
    },
];

function generateQuote(){
    // const randomIndex = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[randomIndex].author}`;
    document.querySelector('#yearOutput').textContent = `${arrayOfQuotes[randomIndex].year}`;
    
}

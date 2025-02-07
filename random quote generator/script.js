//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Theodore Rosevelt', 
     'quote': 'Believe you can and you are halfway there',
     'year': '1900'

    },
    {'author': 'Wayne Gretzky', 
     'quote': 'You miss 100% of the shots you dont take',
     'year': '1995'
    },
    {'author': 'Sam Levenson', 
     'quote': 'Dont watch the clock; do what it does, Keep going',
     'year': '1956'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Strive not to be a success, but rather to be of value.',
     'year': '1931'
    },
    {'author': 'Steve Jobs', 
     'quote': 'Your time is limited, so do not waste it living someone else’s life.',
     'year': '2005'
    },
    {'author': 'Hellen Keller', 
     'quote': 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
     'year': '1920'
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': 'The future belongs to those who believe in the beauty of their dreams.',
     'year': '1960'
    },
    {'author': 'Zig Ziglar', 
     'quote': 'You don’t have to be great to start, but you have to start to be great.',
     'year': '1975'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'It always seems impossible until it is done',
     'year': '2001'
    },
];

function generateQuote(){
    // const randomIndex = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[randomIndex].author}`;
    document.querySelector('#yearOutput').textContent = `${arrayOfQuotes[randomIndex].year}`;
    
}

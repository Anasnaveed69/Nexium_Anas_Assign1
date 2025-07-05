export interface Quote {
  text: string
  author: string
  category: string
}

export const quotesDatabase: Quote[] = [
  // Success & Achievement
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "success",
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "success",
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    category: "success",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "success",
  },

  // Motivation & Inspiration
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "motivation",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "motivation",
  },

  // Leadership
  {
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    category: "leadership",
  },
  {
    text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    author: "Ronald Reagan",
    category: "leadership",
  },
  {
    text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
    author: "Simon Sinek",
    category: "leadership",
  },
  {
    text: "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.",
    author: "Douglas MacArthur",
    category: "leadership",
  },
  {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
    category: "leadership",
  },

  // Wisdom & Life
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "life",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    category: "life",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "life",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: "life",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "life",
  },

  // Innovation & Technology
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "innovation",
  },
  {
    text: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Bill Gates",
    category: "technology",
  },
  {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    category: "technology",
  },
  {
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
    category: "innovation",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    category: "technology",
  },

  // Love & Relationships
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: "love",
  },
  {
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category: "love",
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category: "love",
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "love",
  },
  {
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    author: "Unknown",
    category: "love",
  },

  // Wisdom
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom",
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
    category: "wisdom",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "wisdom",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    category: "wisdom",
  },
  {
    text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    author: "Albert Einstein",
    category: "wisdom",
  },

  // Happiness
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "happiness",
  },
  {
    text: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
    category: "happiness",
  },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    category: "happiness",
  },
  {
    text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
    category: "happiness",
  },
  {
    text: "The secret of happiness is not in doing what one likes, but in liking what one does.",
    author: "James M. Barrie",
    category: "happiness",
  },

  // Creativity & Art
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    category: "creativity",
  },
  {
    text: "The secret to creativity is knowing how to hide your sources.",
    author: "Pablo Picasso",
    category: "creativity",
  },
  {
    text: "Art is the lie that enables us to realize the truth.",
    author: "Pablo Picasso",
    category: "art",
  },
  {
    text: "Every child is an artist. The problem is how to remain an artist once we grow up.",
    author: "Pablo Picasso",
    category: "creativity",
  },
  {
    text: "Creativity takes courage.",
    author: "Henri Matisse",
    category: "creativity",
  },

  // Perseverance & Resilience
  {
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    category: "resilience",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "resilience",
  },
  {
    text: "It is not the mountain we conquer, but ourselves.",
    author: "Sir Edmund Hillary",
    category: "perseverance",
  },
  {
    text: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
    category: "resilience",
  },
  {
    text: "The oak fought the wind and was broken; the willow bent and was saved.",
    author: "Japanese Proverb",
    category: "resilience",
  },
]

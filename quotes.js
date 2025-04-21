const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do.",
        author: "Mark Twain"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Everything has beauty, but not everyone sees it.",
        author: "Confucius"
    },
    {
        text: "When one door of happiness closes, another opens.",
        author: "Helen Keller"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        text: "The harder I work, the luckier I get.",
        author: "Samuel Goldwyn"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        text: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale"
    },
    {
        text: "What we think, we become.",
        author: "Buddha"
    },
    {
        text: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        text: "The purpose of life is not to be happy. It is to be useful.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        text: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown Jr."
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "To succeed in life, you need two things: ignorance and confidence.",
        author: "Mark Twain"
    },
    {
        text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
        author: "Socrates"
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "If you want to achieve greatness stop asking for permission.",
        author: "Anonymous"
    },
    {
        text: "Things work out best for those who make the best of how things work out.",
        author: "John Wooden"
    },
    {
        text: "If you're going through hell, keep going.",
        author: "Winston Churchill"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Your time is now. Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "The best dreams happen when you're awake.",
        author: "Cherie Gilderbloom"
    },
    {
        text: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Success is liking yourself, liking what you do, and liking how you do it.",
        author: "Maya Angelou"
    },
    {
        text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart"
    },
    {
        text: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth"
    },
    {
        text: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        text: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        text: "The question isn't who is going to let me; it's who is going to stop me.",
        author: "Ayn Rand"
    },
    {
        text: "When you cease to dream you cease to live.",
        author: "Malcolm Forbes"
    },
    {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein"
    },
    {
        text: "The only person you should try to be better than is the person you were yesterday.",
        author: "Anonymous"
    },
    {
        text: "Nothing is impossible, the word itself says 'I'm possible'!",
        author: "Audrey Hepburn"
    },
    {
        text: "Don't wait. The time will never be just right.",
        author: "Napoleon Hill"
    },
    {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        text: "Do what you love and the money will follow.",
        author: "Marsha Sinetar"
    },
    {
        text: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "The best way out is always through.",
        author: "Robert Frost"
    },
    {
        text: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle"
    },
    {
        text: "What we fear doing most is usually what we most need to do.",
        author: "Tim Ferriss"
    },
    {
        text: "To live a creative life, we must lose our fear of being wrong.",
        author: "Joseph Chilton Pearce"
    },
    {
        text: "If you want something you've never had, you must be willing to do something you've never done.",
        author: "Thomas Jefferson"
    },
    {
        text: "Trust because you are willing to accept the risk, not because it's safe or certain.",
        author: "Anonymous"
    },
    {
        text: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do not wait for leaders; do it alone, person to person.",
        author: "Mother Teresa"
    },
    {
        text: "The future belongs to those who prepare for it today.",
        author: "Malcolm X"
    },
    {
        text: "The greatest pleasure in life is doing what people say you cannot do.",
        author: "Walter Bagehot"
    },
    {
        text: "Champions keep playing until they get it right.",
        author: "Billie Jean King"
    },
    {
        text: "Fall seven times and stand up eight.",
        author: "Japanese Proverb"
    },
    {
        text: "The universe doesn't give you what you ask for with your thoughts; it gives you what you demand with your actions.",
        author: "Steve Maraboli"
    },
    {
        text: "The distance between insanity and genius is measured only by success.",
        author: "Bruce Feirstein"
    },
    {
        text: "Don't raise your voice, improve your argument.",
        author: "Desmond Tutu"
    },
    {
        text: "What seems to us as bitter trials are often blessings in disguise.",
        author: "Oscar Wilde"
    },
    {
        text: "The harder the conflict, the greater the triumph.",
        author: "George Washington"
    },
    {
        text: "Hope is a waking dream.",
        author: "Aristotle"
    },
    {
        text: "Little by little, one travels far.",
        author: "J.R.R. Tolkien"
    },
    {
        text: "Life shrinks or expands in proportion to one's courage.",
        author: "Anais Nin"
    },
    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        text: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        author: "Lyndon B. Johnson"
    },
    {
        text: "Make each day your masterpiece.",
        author: "John Wooden"
    },
    {
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "Try not to become a person of success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        text: "If you don't build your dream, someone else will hire you to help them build theirs.",
        author: "Dhirubhai Ambani"
    },
    {
        text: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett"
    },
    {
        text: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "The only way of finding the limits of the possible is by going beyond them into the impossible.",
        author: "Arthur C. Clarke"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "Kenny Rogers"
    },
    {
        text: "Life is not about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    {
        text: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    },
    {
        text: "Success isn't about how much money you make; it's about the difference you make in people's lives.",
        author: "Michelle Obama"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Life is either a great adventure or nothing.",
        author: "Helen Keller"
    },
    {
        text: "If you want to make your dreams come true, the first thing you have to do is wake up.",
        author: "J.M. Power"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
        author: "Don Zimmer"
    },
    {
        text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
    },
    {
        text: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino"
    },
    {
        text: "The only thing worse than being blind is having sight but no vision.",
        author: "Helen Keller"
    },
    {
        text: "The difference between the impossible and the possible lies in a person's determination.",
        author: "Tommy Lasorda"
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        text: "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "The only person you should try to be better than is the person you were yesterday.",
        author: "Matty Mullins"
    },
    {
        text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
        author: "Earl Nightingale"
    },
    {
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg"
    },
    {
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle"
    },
    {
        text: "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
        author: "Kobe Bryant"
    },
    {
        text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        text: "An unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        text: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Winning isn't everything, but wanting to win is.",
        author: "Vince Lombardi"
    },
    {
        text: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        text: "Every child is an artist. The problem is how to remain an artist once he grows up.",
        author: "Pablo Picasso"
    },
    {
        text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus"
    },
    {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        text: "Either you run the day, or the day runs you.",
        author: "Jim Rohn"
    },
    {
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.",
        author: "Zig Ziglar"
    },
    {
        text: "Life shrinks or expands in proportion to one's courage.",
        author: "Anais Nin"
    },
    {
        text: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
        author: "Vincent Van Gogh"
    },
    {
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle"
    },
    {
        text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        author: "Jesus"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    {
        text: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
        author: "Booker T. Washington"
    },
    {
        text: "Certain things catch your eye, but pursue only those that capture the heart.",
        author: "Ancient Indian Proverb"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        author: "Plato"
    },
    {
        text: "Teach thy tongue to say, 'I do not know,' and thous shalt progress.",
        author: "Maimonides"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the assignment, and I told them they didn't understand life.",
        author: "John Lennon"
    },
    {
        text: "Fall seven times and stand up eight.",
        author: "Japanese Proverb"
    },
    {
        text: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
        author: "Helen Keller"
    },
    {
        text: "Everything has beauty, but not everyone can see it.",
        author: "Confucius"
    },
    {
        text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author: "Anne Frank"
    },
    {
        text: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu"
    },
    {
        text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        author: "Maya Angelou"
    },
    {
        text: "Happiness is not something readymade. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        author: "Sheryl Sandberg"
    },
    {
        text: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
        author: "Aristotle"
    },
    {
        text: "If the wind will not serve, take to the oars.",
        author: "Latin Proverb"
    },
    {
        text: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.",
        author: "Unknown"
    },
    {
        text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        author: "Marie Curie"
    },
    {
        text: "Too many of us are not living our dreams because we are living our fears.",
        author: "Les Brown"
    },
    {
        text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    },
    {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        author: "Leonardo da Vinci"
    },
    {
        text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
        author: "Jamie Paolinetti"
    },
    {
        text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        author: "Erica Jong"
    },
    {
        text: "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        author: "Bob Dylan"
    },
    {
        text: "I didn't fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin"
    },
    {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein"
    },
    {
        text: "The person who says it cannot be done should not interrupt the person who is doing it.",
        author: "Chinese Proverb"
    },
    {
        text: "There are no traffic jams along the extra mile.",
        author: "Roger Staubach"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        text: "You become what you believe.",
        author: "Oprah Winfrey"
    },
    {
        text: "I would rather die of passion than of boredom.",
        author: "Vincent van Gogh"
    },
    {
        text: "A truly rich man is one whose children run into his arms when his hands are empty.",
        author: "Unknown"
    },
    {
        text: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
        author: "Ann Landers"
    },
    {
        text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
        author: "Abigail Van Buren"
    },
    {
        text: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray"
    },
    {
        text: "Education costs money. But then so does ignorance.",
        author: "Sir Claus Moser"
    },
    {
        text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
        author: "Rosa Parks"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author: "Dalai Lama"
    },
    {
        text: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Do what you can, where you are, with what you have.",
        author: "Teddy Roosevelt"
    },
    {
        text: "If you do what you've always done, you'll get what you've always gotten.",
        author: "Tony Robbins"
    },
    {
        text: "Dreaming, after all, is a form of planning.",
        author: "Gloria Steinem"
    },
    {
        text: "It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.",
        author: "Mae Jemison"
    },
    {
        text: "You may be disappointed if you fail, but you are doomed if you don't try.",
        author: "Beverly Sills"
    },
    {
        text: "Remember no one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Life is what we make it, always has been, always will be.",
        author: "Grandma Moses"
    },
    {
        text: "The question isn't who's going to let me; it's who is going to stop me.",
        author: "Ayn Rand"
    },
    {
        text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
    },
    {
        text: "It's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Either write something worth reading or do something worth writing.",
        author: "Benjamin Franklin"
    },
    {
        text: "Nothing is impossible, the word itself says, 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "If you can dream it, you can achieve it.",
        author: "Zig Ziglar"
    },
    {
        text: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll"
    },
    {
        text: "The most common way people give up their power is by thinking they don't have any.",
        author: "Alice Walker"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: "Mary Kay Ash"
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "To handle yourself, use your head; to handle others, use your heart.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill"
    },
    {
        text: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        author: "Nicole Kidman"
    },
    {
        text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        text: "Be so good they can't ignore you.",
        author: "Steve Martin"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Life is not about waiting for the storm to pass but learning to dance in the rain.",
        author: "Vivian Greene"
    },
    {
        text: "Happiness is not by chance, but by choice.",
        author: "Jim Rohn"
    },
    {
        text: "Life is trying things to see if they work.",
        author: "Ray Bradbury"
    },
    {
        text: "Success is getting what you want, happiness is wanting what you get.",
        author: "W.P. Kinsella"
    },
    {
        text: "The secret to getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "If you're going through hell, keep going.",
        author: "Winston Churchill"
    },
    {
        text: "Courage is grace under pressure.",
        author: "Ernest Hemingway"
    },
    {
        text: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    },
    {
        text: "The power of imagination makes us infinite.",
        author: "John Muir"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        text: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss"
    },
    {
        text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        text: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it.",
        author: "Barack Obama"
    },
    {
        text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
        author: "Rosa Parks"
    },
    {
        text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean"
    },
    {
        text: "Leaders set high standards. Refuse to tolerate mediocrity or poor performance.",
        author: "Brian Tracy"
    },
    {
        text: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "There are no shortcuts to any place worth going.",
        author: "Beverly Sills"
    },
    {
        text: "What you do speaks so loudly that I cannot hear what you say.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Leadership is not about being in charge. Leadership is about taking care of those in your charge.",
        author: "Simon Sinek"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Remember that happiness is a way of travel, not a destination.",
        author: "Roy M. Goodman"
    },
    {
        text: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author: "Thomas A. Edison"
    },
    {
        text: "No matter what people tell you, words and ideas can change the world.",
        author: "Robin Williams"
    },
    {
        text: "A champion is defined not by their wins but by how they can recover when they fall.",
        author: "Serena Williams"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "The question isn't who's going to let me; it's who is going to stop me.",
        author: "Ayn Rand"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
        author: "Warren Buffett"
    },
    {
        text: "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.",
        author: "Vaibhav Shah"
    },
    {
        text: "Don't cry because it's over. Smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "The secret of success is to do the common things uncommonly well.",
        author: "John D. Rockefeller"
    },
    {
        text: "There is no substitute for hard work.",
        author: "Thomas Edison"
    },
    {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        text: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        text: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        text: "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you.",
        author: "Zig Ziglar"
    },
    {
        text: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        text: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton"
    },
    {
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell"
    },
    {
        text: "The difference between successful people and very successful people is that very successful people say no to almost everything.",
        author: "Warren Buffett"
    },
    {
        text: "You know you are on the road to success if you would do your job and not be paid for it.",
        author: "Oprah Winfrey"
    },
    {
        text: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee"
    },
    {
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle"
    },
    {
        text: "The only place success comes before work is in the dictionary.",
        author: "Vince Lombardi"
    },
    {
        text: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
        author: "G.K. Chesterton"
    },
    {
        text: "Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure.",
        author: "Thomas J. Watson"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.",
        author: "David Frost"
    },
    {
        text: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
        author: "Henry Ford"
    },
    {
        text: "Success isn't about the destination, it's about the journey.",
        author: "Zig Ziglar"
    },
    {
        text: "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe.",
        author: "Sumner Redstone"
    },
    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Success is not about being the best. It's about being authentic.",
        author: "Jillian Michaels"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        text: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "Success is not the result of spontaneous combustion. You must set yourself on fire.",
        author: "Arnold H. Glasow"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        text: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "Success is not the result of spontaneous combustion. You must set yourself on fire.",
        author: "Arnold H. Glasow"
    }
]; 
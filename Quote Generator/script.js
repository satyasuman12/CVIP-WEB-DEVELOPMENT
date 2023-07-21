const quotes = [{ quote: `"Live for each second without hesitation."`,
writer: `– Elton John`
},
{
quote: `"Life is what happens when you’re busy making other plans."`,
writer: `– John Lennon`
},
{
quote: `"The only way to do great work is to love what you do."`,
writer: `– Steve Jobs`
},
{
quote: `"Life is a journey, not a destination."`,
writer: `– Ralph Waldo Emerson`
},
{
quote: `"The best time for new beginnings is now."`,
writer: `– Anonymous`
},
{
quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
writer: `– Nelson Mandela`
},
{
quote: `"Success is not the key to happiness. Happiness is the key to success."`,
writer: `– Albert Schweitzer`
},
{
quote: `"You miss 100% of the shots you don't take."`,
writer: `– Wayne Gretzky`
},
{
quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
writer: `– Franklin D. Roosevelt`
},
{
quote: `"The future belongs to those who believe in the beauty of their dreams."`,
writer: `– Eleanor Roosevelt`
},
{
quote: `"Don't watch the clock; do what it does. Keep going."`,
writer: `– Sam Levenson`
},
{
quote: `"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."`,
writer: `– Jordan Belfort`
},
{
quote: `"The only thing we have to fear is fear itself."`,
writer: `– Franklin D. Roosevelt`
},
{
quote: `"The best way to predict the future is to create it."`,
writer: `– Peter Drucker`
},
{
quote: `"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."`,
writer: `– Steve Jobs`
},
{
quote: `"The secret of getting ahead is getting started."`,
writer: `– Mark Twain`
},
{
quote: `"The harder I work, the luckier I get."`,
writer: `– Samuel Goldwyn`
},
{
quote: `"The best revenge is massive success."`,
writer: `– Frank Sinatra`
},
{
quote: `"Believe you can and you're halfway there."`,
writer: `– Theodore Roosevelt`
},
{
quote: `"Don't cry because it's over, smile because it happened."`,
writer: `– Dr. Seuss`
},
{
quote: `"It does not matter how slowly you go as long as you do not stop."`,
writer: `– Confucius`
},
{
quote: `"You have within you right now, everything you need to deal with whatever the world can throw at you."`,
writer: `– Brian Tracy`
},
{
quote: `"Life is 10% what happens to us and 90% how we react to it."`,
writer: `– Charles R. Swindoll`
},
{
quote: `"Life is what we make it, always has been, always will be."`,
writer: `– Grandma Moses`
},
{
quote: `"The only person you are destined to become is the person you decide to be."`,
writer: `– Ralph Waldo Emerson`
},
{
quote: `"It's not the years in your life that count. It's the life in your years."`,
writer: `– Abraham Lincoln`
},
{
quote: `"You can't use up creativity. The more you use, the more you have."`,
writer: `– Maya Angelou`
},
{
quote: `"You are never too old to set another goal or to dream a new dream."`,
writer: `– C.S. Lewis`
},
{
quote: `"Success is walking from failure to failure with no loss of enthusiasm."`,
writer: `– Winston S. Churchill`
},
{
quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
writer: `– Robert Frost`
},
{
quote: `"The best preparation for tomorrow is doing your best today."`,
writer: `– H. Jackson Brown Jr.`
},
{
quote: `"Life is 10% what happens to us and 90% how we react to it."`,
writer: `– Charles R. Swindoll`
},
{
quote: `"The journey of a thousand miles begins with one step."`,
writer: `– Lao Tzu`
},
{
quote: `"The only way to achieve the impossible is to believe it is possible."`,
writer: `– Charles Kingsleigh (Alice in Wonderland)`
},
{
quote: `"It's not whether you get knocked down, it's whether you get up."`,
writer: `– Vince Lombardi`
},
{
quote: `"Life is short, and it is here to be lived."`,
writer: `– Kate Winslet`
},
{
quote: `"Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality."`,
writer: `– Lao Tzu`
},
{
quote: `"Your time is limited, don't waste it living someone else's life."`,
writer: `– Steve Jobs`
},
{
quote: `"The best way to predict the future is to create it."`,
writer: `– Abraham Lincoln`
},
{
quote: `"Life is what we make it, always has been, always will be."`,
writer: `– Ernest Hemingway`
},
{
quote: `"The future belongs to those who believe in the beauty of their dreams."`,
writer: `– Eleanor Roosevelt`
},
{
quote: `"Life is a daring adventure or nothing at all."`,
writer: `– Helen Keller`
},
{
quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
writer: `– Franklin D. Roosevelt`
},
{
quote: `"Don't watch the clock; do what it does. Keep going."`,
writer: `– Sam Levenson`
},
{
quote: `"You miss 100% of the shots you don't take."`,
writer: `– Wayne Gretzky`
},
{
quote: `"You only live once, but if you do it right, once is enough."`,
writer: `– Mae West`
}
];





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})

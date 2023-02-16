let message = document.getElementById("random-message")
const btn = document.getElementById("change-msg-btn")

btn.addEventListener("click", function() {
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    message.innerText = randomPhrase
})

const phrases = [
    "I can't stop thinking about you.",
    "You'll always be my woman.",
    "Since the day I met you, my life has never been the same.",
    "I love making you laugh.",
    "You're my dream woman.",
    "You ground me.",
    "You're kinda, maybe a little, sorta, pretty much always on my mind.",
    "I would follow you anywhere.",
    "When I'm with you, everything feels right.",
    "I'll keep loving you until the day I die...and even after that, if possible.",
    "When I'm with you, nothing else matters.",
    "Do you have any idea how much I adore you?",
    "All love is sweet, but ours is the sweetest.",
    "Because you're in my life, I know true love exists.",
    "You bring out the best in me.",
    "We are two peas in a pod.",
    "You have that sparkle.",
    "I  love you today. I will love you tomorrow. And I'll keep on loving you every day after that, too.",
    "I can't believe a girl like you exists and that I'm lucky enough to have found her.",
    "To me, you are perfect.",
    "Know that no matter where life takes us, you will always be the only one for me.",
    "My favorite part of every day is the time I get to spend with you.",
    "When others talk about their greatest achievements and things they are most proud of, the only thing that comes to mind is you.",
    "I love seeing you blush.",
    "Only you can give me that feeling.",
    "I'm missing you.",
    "Now that I've found you, I'm never going to let you go.",
    "You are the prettiest woman I've ever seen.",
    "Whenever I count my blessings, you are at the top of my list.",
    "You make me so incredibly happy.",
    "I am the luckiest man alive because I get to call you mine.",
    "When we're together, nothing else matters.",
    "There's no better match than me and you.",
    "I'd follow you anywhere.",
    "No one understands me like you do.",
    "This morning, I jumped out of bed because I was so excited to see you.",
    "Keep in mind that you complete me in such a unique and wonderful way.",
    "This Christmas, the only thing I want from Santa is you!",
    "You know exactly what I need, even if I don't say it.",
    "You're the peanut butter to my jelly.",
    "My favorite sound in the universe is your laugh.",
    "I love you not only for who you are, but also for who I become when I am with you.",
    "I can't get enough of you.",
    "Having you in my life means I'll always have someone I can rely on. Even when you're not with me, I know you're just a phone call away.",
    "Your voice is my favorite sound, your name is my favorite word, and your hug is my favorite place to be.",
    "You're cute. Can I keep you forever?",
    "I feel so lucky to be with you.",
    "Going through difficult times with you has only strengthened our relationship.",
    "I have waited all of my life to be with someone like you."
]

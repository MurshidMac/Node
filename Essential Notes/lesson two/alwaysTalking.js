var sayings= [
  "Maybe easier isn’t really better… is this group’s motto",
  "I couldn’t agree more. Those elevator-hating far-parkers are onto something",
  "Of course, sitting in front of a computer writing code isn’t going to improve your physical health. JavaScript is great for building apps, not abs",
  "I don’t think it’s too much of a stretch, though, to suggest that learning how to program is healthy for your brain. Healthier, at least, than bingeing Iron Fist or thumbing through celebrity Instagram accounts",
  "For me, even after I started coding, the default during downtime is still too often leisure. This month, for instance, I have already spent dozens of hours watching genetic outliers throw a ball at a metal ring",
  "This is otherwise known as the NBA playoffs. Since I’m a Toronto Raptors fan, you could also call it self-induced torture"
]

var interval = setInterval(function (){
    var i= Math.floor(Math.random()*sayings.length);   
    process.stdout.write(`${sayings[i]}\n`);
},1000);

process.stdin.on('data', function(data){
    console.log(`STDIN Data Recieced -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
})
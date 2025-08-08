let emo=document.querySelector("div");
console.log(emo);


const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",           
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
  "bauna"
];


emo.addEventListener("mouseenter", ()=>{
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emo.innerText=randomEmoji;
})
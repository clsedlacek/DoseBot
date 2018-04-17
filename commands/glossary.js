//grabs glossary info from local json and builds message based on arg
const glossary = require("../glossary.json");

exports.run = (client, message, args) => {
  var str = message.content;
  var result = str.split(" ");
  var effect = str
  .toLowerCase()
  .replace("--glossary ", "", -1)
  .replace(/-/g, "", -1)
  console.log("str: " + str);
  console.log("result: " + effect);
  
  for (let i = 0; i < glossary.effects.length; i++) {
    if (glossary.effects[i].name === effect) {
      console.log(glossary.effects[i].name);
    }
  }
  
  message.channel
  .send("ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ")
  .catch(console.error);
};
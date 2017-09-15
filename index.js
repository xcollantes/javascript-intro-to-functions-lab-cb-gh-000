function shout (phrase)
{
  return phrase.toUpperCase();
  //phrase === phrase.toUpperCase() ? true : false;
}

function whisper (phrase)
{
  return phrase.toLowerCase();
  //phrase === phrase.toUpperCase() ? true : false;
}

function logShout (phrase)
{
  var i = shout(phrase);
  console.log(i);
}

function logWhisper (phrase)
{
  var i = whisper(phrase);
  console.log(i);
}

function sayHiToGrandma (phrase)
{
  if (phrase === phrase.toUpperCase())
    return "YES INDEED!";
  else if (phrase != phrase.toUpperCase())
    return "I can't hear you!";
  else if (phrase === "I love you, Grandma")
    return "I love you, too";
}

function sayHiToGrandma (phrase)
{
  return phrase === "I love you, Grandma" ? "I love you, too" : "I can't hear you!";
}

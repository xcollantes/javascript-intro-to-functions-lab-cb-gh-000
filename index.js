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
return phrase === phrase.toUpperCase() ? "YES INDEED!" : "I can't hear you!"; 
}

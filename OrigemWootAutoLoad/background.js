
window.onload = function ()
{
  sleep(2000, getScript);
}

function sleep(millis, callback)
{
  setTimeout(function ()
  { callback(); }
  , millis);
}

function getScript()
{
  $.getScript('https://dl.dropboxusercontent.com/s/27y8jr4skqwb5p7/OrigemScript.js');
}
function end(str, target) {
  var checkStr = str.slice((target.length) * -1);
  return checkStr === target;
}

end('Bastian', 'n');
end("He has to give me a new name", "name");

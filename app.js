let re;
re = /Hello/;
re = /Hello/i;

// Metacharacter Symbols
re = /^h/i;
re = /e$/i;
re = /^hello$/i;
re = /h.llo/i;
re = /h*llo/i;
re = /gre?a?y/i;
re = /gre?a?\y?/i;

// String to match
const str = "grey";

// Log results
const results = re.exec(str);
console.log(results);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} Dosn't matches ${re.source}`);
  }
}

reTest(re, str);

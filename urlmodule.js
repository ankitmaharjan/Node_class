//To see the URL information including username, password, hostname, pathname, hash and href
//import url from 'url';

//const myURL = new URL('https://example.org');
const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL)
console.log(myURL.href)
let error = false;
try {
  console.assert(movie[title] === 'Back to the Future');
} catch (e) {
  error = e.message;
}
console.assert(error === 'title is not defined');
console.log('test server');

setInterval(() => {
  console.log(`server: ${process.argv}`);
}, 2000)

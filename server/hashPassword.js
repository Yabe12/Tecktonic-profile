const bcrypt = require('bcryptjs');

const password = 'ADMIN';
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log(hash); // Save this hash to your database
});

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('ADMIN', 10);

  const admin = new User({
    email: 'admin.blog@gmail.com',
    password: hashedPassword
  });

  await admin.save();
  console.log('Admin user created');
  mongoose.connection.close();
};

createAdmin().catch(err => {
  console.error(err);
  mongoose.connection.close();
});

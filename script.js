
const toggleBtn = document.getElementById('toggleBtn');
const aboutSection = document.getElementById('aboutSection');
const closeBtn = document.getElementById('closeBtn');

document.querySelector('#scrollBtn').addEventListener('click', function () {
    const nextSection = document.querySelector('.section2');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

toggleBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    aboutSection.classList.add('hidden');
});

toggleBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('dark');
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhishekrajput3172@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

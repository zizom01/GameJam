// Import Express
const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const PORT = 8080;
require('dotenv').config();
const db = require(path.join(__dirname, '/JS/db.js'));  // Import your database configuration
const bcrypt = require('bcrypt');
const saltRounds = 10;
const rateLimit = require('express-rate-limit');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));
app.use(express.static('styles'));
app.use(express.static('pages'));
app.use(express.static('JS'));


const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many registration attempts, please try again later."
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/register', registerLimiter, (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/register.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/contact.html'));
});
app.get('/instructions', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/instructions.html'));
});
app.get('/expo', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/expo.html'));
});
app.get('/seasons', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/seasons.html'));
});

app.post('/register', (req, res) => {
  console.log(req.body);
  const {
    Name, mobile, email, dob, age, 'civil-id': civilId,
    country, address, check, school, job, employer,
    skills, apps, jams, game, game_name, stage,
    why, par_type, relation, details,
  } = req.body;

  const is_student = JSON.parse(check);
  const has_participated_game_jams = JSON.parse(jams);
  const has_developed_game = JSON.parse(game);
  const has_relative = JSON.parse(relation);

  


  // Prepare the SQL query
  const sql = `
    INSERT INTO registration_form (
      full_name, mobile_number, email, date_of_birth, age, civil_id_number, 
      nationality, address, is_student, school_name, job_title, employer, 
      skills, applications_used, has_participated_game_jams, has_developed_game, 
      game_name, game_stage, reason_for_participation, participation_type, 
      has_relative, relative_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Execute the query with the form data
  db.query(sql, [
    Name, mobile, email, dob, age, civilId,
    country, address, is_student, school || null, job || null, 
    employer || null, JSON.stringify(skills), apps, 
    has_participated_game_jams, has_developed_game, game_name || null, 
    stage || null, why, par_type, 
    has_relative, details || null,
  ], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving data');
    }
  });
});


app.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = 'INSERT INTO contact_requests (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
      if (err) throw err;
      console.log('Contact request saved:', result);
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





// backup

// app.get('/api/current-user', (req, res) => {
//   if (req.session.user && req.session.user.isLoggedIn) {
//     res.json({ username: req.session.user.username });
//   } else {
//     res.status(401).json({ message: 'Not logged in' });
//   }
// });


// app.post('/logout', (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       return res.status(500).send('Logout failed');
//     }
//     res.send('Logged out successfully');
//   });
// });

// const dbOptions = {
  //   host: process.env.DB_HOST,         // MySQL server host
  //   user: process.env.DB_USER,      // MySQL username
  //   password: process.env.DB_PASSWORD,  // MySQL password
  //   database: process.env.DB_NAME // Database name
  // };
  
  // const sessionStore = new MySQLStore(dbOptions);
  
  // app.use(
  //   session({
  //     key: 'Cookies',
  //     secret: process.env.SECRET, // replace with a strong secret
  //     store: sessionStore,
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       maxAge: 1000 * 60 * 60 // Session expiration time in milliseconds (e.g., 1 hour)
  //     }
  //   })
  // );
  
  // function isAuthenticated(req, res, next) {
  //   if (req.session.user && req.session.user.isLoggedIn) {
  //     return next(); // User is authenticated, proceed to the route
  //   }
  //   res.redirect('/login');
  // }
  
  // app.post('/api/users', async (req, res) => {
  //   const { username, email, password } = req.body;
  
  //   try {
  //     // Hash the password
  //     const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  //     // Check if username or email already exists
  //     const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
  //     db.query(checkQuery, [username, email], (err, results) => {
  //       if (err) {
  //         console.error('Error checking user:', err.message);
  //         res.status(500).send('Database error');
  //         return;
  //       }
  
  //       if (results.length > 0) {
  //         // Username or email already exists
  //         res.status(400).send('Username or email already exists');
  //         return;
  //       }
  
  //       // Insert new user if no existing record is found
  //       const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  //       db.query(insertQuery, [username, email, hashedPassword], (err, result) => {
  //         if (err) {
  //           console.error('Error adding user:', err.message);
  //           res.status(500).send('Database error');
  //           return;
  //         }
  //         res.status(201).send(`User added with ID: ${result.insertId}`);
  //       });
  //     });
  //   } catch (error) {
  //     console.error('Error hashing password:', error.message);
  //     res.status(500).send('Server error');
  //   }
  // });
  
  // app.post('/api/login', async (req, res) => {
  //   const { username, password } = req.body;
  
  //   const query = 'SELECT * FROM users WHERE username = ?';
  //   db.query(query, [username], async (err, results) => {
  //     if (err) {
  //       console.error('Database error:', err.message);
  //       res.status(500).send('Database error');
  //       return;
  //     }
  
  //     if (results.length === 0) {
  //       res.status(400).send('Invalid username or password');
  //       return;
  //     }
  
  //     const user = results[0];
  //     const passwordMatch = await bcrypt.compare(password, user.password);
  
  //     if (!passwordMatch) {
  //       res.status(400).send('Invalid username or password');
  //       return;
  //     }
  
  //     req.session.user = {
  //       username: username,
  //       isLoggedIn: true
  //     };
  
  //     // Save the session and send response after it's saved
  //     req.session.save(err => {
  //       if (err) {
  //         console.error('Session save error:', err.message);
  //         res.status(500).send('Session error');
  //         return;
  //       }
  //       res.status(200).json({ message: `Welcome, ${user.username}!`, username: user.username });
  //     });
  //   });
  // });
  
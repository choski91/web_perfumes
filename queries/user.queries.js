const userQueries = {

  createUser: `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
  `,
  // getUserByemail: `
  //   SELECT * FROM users WHERE email = $1;
  // `,
  updateUser: `
    UPDATE users
    SET correo = $1, password = $2
    WHERE id = $3
    RETURNING *;
  `,
  logIn: `
    UPDATE users
    SET logged = true
    WHERE email = $1
    RETURNING *;
  `,
  logOut: `
    UPDATE users
    SET logged = false
    WHERE email = $1
    RETURNING *;
  `
};

module.exports = userQueries;
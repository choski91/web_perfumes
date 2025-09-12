const userQueries = {

  createUser: `
    INSERT INTO users (correo, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  getUserByCorreo: `
    SELECT * FROM users WHERE correo = $1;
  `,
  getAllUsers: `
    SELECT * FROM users;
  `,
  updateUser: `
    UPDATE users
    SET correo = $1, password = $2
    WHERE id = $3
    RETURNING *;
  `,
  logIn: `
    UPDATE users
    SET logged = true
    WHERE correo = $1
    RETURNING *;
  `,
  logOut: `
    UPDATE users
    SET logged = false
    WHERE correo = $1
    RETURNING *;
  `
};

module.exports = userQueries;
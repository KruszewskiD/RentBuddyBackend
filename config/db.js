const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createTables = async () => {
  //TWORZENIE TABELI Z UŻYTKWONIKAMI
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            username VARCHAR(100) NOT NULL,        
            password VARCHAR(100) NOT NULL,
            phone_number VARCHAR(20) NOT NULL,
            role VARCHAR(50) NOT NULL
        );
    `);
  //TWORZENIE TABELI Z NIERUCHOMOSCIAMI
  await pool.query(`
        CREATE TABLE IF NOT EXISTS properties (
            property_id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            city VARCHAR(100) NOT NULL,
            street VARCHAR(100) NOT NULL,
            street_number INT NOT NULL,
            owner_id INTEGER NOT NULL REFERENCES users(user_id)
        );
    `);
  //TWORZENIE TABELI Z PROBLEMAMI
  await pool.query(`
        CREATE TABLE IF NOT EXISTS issues (
            issue_id SERIAL PRIMARY KEY,
            property_id INTEGER NOT NULL REFERENCES properties(property_id),
            creator_id INTEGER NOT NULL REFERENCES users(user_id),
            resolver_id INTEGER REFERENCES users(user_id),
            description TEXT NOT NULL,
            resolve_status VARCHAR(50) NOT NULL DEFAULT 'open',
            title TEXT NOT NULL,
            date DATE NOT NULL
        );
    `);
  //TWORZENIE TABELI Z FAKTURAMI
  await pool.query(`
        CREATE TABLE IF NOT EXISTS invoices (
          invoice_id SERIAL PRIMARY KEY,
          amount NUMERIC(10, 2) NOT NULL,
          status VARCHAR(50) NOT NULL DEFAULT 'Created',
          sender_id INTEGER NOT NULL REFERENCES users(user_id),
          receiver_id INTEGER NOT NULL REFERENCES users(user_id),
          property_id INTEGER NOT NULL REFERENCES properties(property_id),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          invoice_title VARCHAR(100) NOT NULL
        );
      `);
  //TWORZENIE TABELI ZE SPOTKANIAMI
  await pool.query(`
        CREATE TABLE IF NOT EXISTS meetings (
          meeting_id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          start_time TIMESTAMP NOT NULL,
          end_time TIMESTAMP NOT NULL,
          creator_id INTEGER NOT NULL REFERENCES users(user_id),
          participant_id INTEGER NOT NULL REFERENCES users(user_id)
        );
    `);

  //TWORZENIE TABELI Z UMOWAMI
  await pool.query(`
    CREATE TABLE IF NOT EXISTS agreements (
      auser_id SERIAL PRIMARY KEY,
      title VARCHAR(45),
      start_date DATE,
      end_date DATE,
      number_of_tenants INT,
      monthly_payment INT,
      payment_date INT,
      deposit INT,
      aktywna BOOLEAN,
      property_id INTEGER NOT NULL REFERENCES properties(property_id),
      owner_id INTEGER NOT NULL REFERENCES users(user_id),
      tenant_id INTEGER NOT NULL REFERENCES users(user_id)
  )
`);
};

module.exports = { pool, createTables };

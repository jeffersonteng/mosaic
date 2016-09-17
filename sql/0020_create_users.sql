CREATE TABLE users (
  id SERIAL,
  name VARCHAR(25),
  city VARCHAR(25),
  gender INTEGER REFERENCES genders,
  race INTEGER REFERENCES races,
  orientation INTEGER REFERENCES orientations
);
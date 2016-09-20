CREATE TABLE users (
  id SERIAL,
  name VARCHAR(25) NOT NULL,
  city VARCHAR(25) NOT NULL,
  gender INTEGER REFERENCES genders NOT NULL,
  race INTEGER REFERENCES races NOT NULL,
  orientation INTEGER REFERENCES orientations NOT NULL
);
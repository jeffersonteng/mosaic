# postgres running on 5434
psql -U jteng -p 5434

# Run a sql file
psql -U jteng -p 5434 -f sql/0010_create_users.sql

# Start-up
webpack -w
npm start

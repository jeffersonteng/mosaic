CREATE TABLE IF NOT EXISTS races (
  id INTEGER PRIMARY KEY,
  race VARCHAR(35)
);

CREATE TABLE IF NOT EXISTS genders (
  id INTEGER PRIMARY KEY,
  gender VARCHAR(35)
);

CREATE TABLE IF NOT EXISTS orientations (
  id INTEGER PRIMARY KEY,
  orientation VARCHAR(35)
);

-- https://en.wikipedia.org/wiki/Race_and_ethnicity_in_the_United_States#Racial_and_ethnic_categories
INSERT INTO races (id, race) VALUES
    ('0', 'White American'),
    ('1', 'Black American'),
    ('2', 'Asian American'),
    ('3', 'Native Hawaiian'),
    ('4', 'Middle Eastern American');

-- http://www.slate.com/blogs/lexicon_valley/2014/02/21/gender_facebook_now_has_56_categories_to_choose_from_including_cisgender.html
INSERT INTO genders (id, gender) VALUES
    ('0', 'Agender/Neutrois'),
    ('1', 'Androgyne/Androgynous'),
    ('2', 'Bigender'),
    ('3', 'Cis/Cisgender'),
    ('4', 'Female to Male/FTM'),
    ('5', 'Gender Fluid'),
    ('6', 'Gender Nonconforming/Variant'),
    ('7', 'Gender Questioning'),
    ('8', 'Genderqueer'),
    ('9', 'Intersex'),
    ('10', 'Male to Female/MTF'),
    ('11', 'Neither'),
    ('12', 'Non-Binary'),
    ('13', 'Other'),
    ('14', 'Pangender'),
    ('15', 'Trans/Transgender'),
    ('16', 'Transsexual'),
    ('17', 'Two-Spirit');

INSERT INTO orientations (id, orientation) VALUES
    ('0', 'Heterosexual'),
    ('1', 'Homosexual'),
    ('2', 'Bisexual'),
    ('3', 'Pansexual'),
    ('4', 'Asexual');

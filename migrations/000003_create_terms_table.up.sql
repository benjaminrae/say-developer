CREATE TABLE terms (
  id UUID PRIMARY KEY,
  words TEXT[] NOT NULL,
  phonetic TEXT,
  description TEXT,
  created_by VARCHAR(255) NOT NULL,
  aliases TEXT[],
  FOREIGN KEY (created_by) REFERENCES users(user_id)
    ON UPDATE CASCADE
);

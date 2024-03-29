CREATE TABLE pronunciations (
  id UUID PRIMARY KEY,
  term_id UUID NOT NULL,
  public_url VARCHAR(255) NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  mime_type VARCHAR(255) NOT NULL,
  FOREIGN KEY (created_by) REFERENCES users(user_id),
  FOREIGN KEY (term_id) REFERENCES terms(id)
);

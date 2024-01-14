export type Term = {
  id: string;
  raw: string;
  words: string[];
  description: string;
  aliases: string[];
  createdBy: string;
};

export type NewTerm = {
  raw: string;
  words?: string[];
  description?: string;
  aliases?: string[];
};

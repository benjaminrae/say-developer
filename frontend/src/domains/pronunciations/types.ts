export type Pronunciation = {
  id: string;
  publicUrl: string;
  createdBy: string;
  termId: string;
  fileName: string;
  mimeType: string;
}

export type NewPronunciation = {
  rawTerm: string;
  termId: string;
  fileName: string;
  mimeType: string;
  file: File;
}

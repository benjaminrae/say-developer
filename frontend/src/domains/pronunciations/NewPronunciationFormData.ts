import {NewPronunciation} from "./types.ts";

export class NewPronunciationFormData {
  private readonly newPronunciation: NewPronunciation;

  constructor(newPronunciation: NewPronunciation) {
    this.newPronunciation = newPronunciation;
  }

  public build(): FormData {
    const formData = new FormData();

    formData.append("file", this.newPronunciation.file)
    formData.append("mimeType", this.newPronunciation.mimeType)
    formData.append("fileName", this.newPronunciation.fileName)
    formData.append("termId", this.newPronunciation.termId)

    return formData;
  }
}

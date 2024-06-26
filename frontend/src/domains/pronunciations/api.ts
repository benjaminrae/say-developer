import {sayDeveloperRequest} from "../api/request.ts";
import {NewPronunciation} from "./types.ts";
import {NewPronunciationFormData} from "./NewPronunciationFormData.ts";


export const createPronunciation = async (newPronunciation: NewPronunciation) => {
  const formData = new NewPronunciationFormData(newPronunciation).build()
  const {data} = await sayDeveloperRequest.post<void>("/pronunciations", formData);

  return data;
}

export const getPronunciationPreSignedUrlByFilename = async (fileId: string) => {
  const {data} = await sayDeveloperRequest.get<string>(`/files/${fileId}/url`);

  return data;
}

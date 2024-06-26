import {useMutation} from "react-query";
import {createPronunciation, getPronunciationPreSignedUrlByFilename} from "./api.ts";

export const useCreatePronunciation = () => {
  return useMutation(createPronunciation)
}

export const useGetPronunciationPreSignedUrlById = () => {
  return useMutation(getPronunciationPreSignedUrlByFilename)
}

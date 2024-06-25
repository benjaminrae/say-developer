import {useMutation} from "react-query";
import {createPronunciation} from "./api.ts";

export const useCreatePronunciation = () => {
  return useMutation(createPronunciation)
}

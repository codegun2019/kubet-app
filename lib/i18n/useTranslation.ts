import { th, t } from "./th"

export function useTranslation() {
  return {
    t,
    locale: "th",
    dictionary: th,
  }
}


export const PHONE_DISPLAY = "0332-3336821";
export const PHONE_INTL = "923323336821";

export function waLink(message: string) {
  return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;
}
export default function capitalizeFirstLetter(word) {
  const firstLetter = word.charAt(0);
  const rest = word.substring(1);
  const cap = firstLetter.toUpperCase();
  
  return cap+rest
}

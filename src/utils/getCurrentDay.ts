export function getCurrentDay() {
  let now: any = new Date();
  return now.toLocaleDateString();
}

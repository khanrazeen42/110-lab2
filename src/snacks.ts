export const snacks: string[] = [
  "chips",
  "cookies",
  "fruit",
  "granola",
  "oreos",
  "wafers",
  "popcorn",
];

export function print_snacks(snacks: string[]): void {
  for (const snack of snacks) {
    console.log(snack);
  }
}

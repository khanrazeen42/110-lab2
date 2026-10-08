export const snacks: string[] = [
  "chips",
  "cookies"
];

export function print_snacks(snacks: string[]): void {
  for (const snack of snacks) {
    console.log(snack);
  }
}

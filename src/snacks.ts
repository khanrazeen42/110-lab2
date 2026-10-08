export const snacks: string[] = ["cookie", "chip", "fruit", "granola"];

export function print_snacks(snacks: string[]): void {
  for (const snack of snacks) {
    console.log(snack);
  }
}

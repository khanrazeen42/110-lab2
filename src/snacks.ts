export const snacks: string[] = ["cookie", "chip", "fruit", "granola"];
const snacks: string[] = ['cookie', 'chip', 'fruit', 'granola', 'oreos', 'wafers', 'popcorn'];
function print_snack(snacks: string[]): void {
    for (const snack of snacks) {
        console.log(snack);
    }
}

export function print_snacks(snacks: string[]): void {
  for (const snack of snacks) {
    console.log(snack);
  }
}

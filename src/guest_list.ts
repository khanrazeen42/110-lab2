export const guests: string[] = [
    "Alex",
    "Jordan",
    "Taylor",
    "Sam",
    "Chris"
  ];
  
  export function printGuests(): void {
    console.log("Party Guest List:");
    guests.forEach((guest) => {
      console.log(guest);
    });
  }
  
  printGuests();
  
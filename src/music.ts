export const music: string[] = [
    "Pop",
    "Hip-Hop",
    "R&B",
    "EDM",
    "Rock",
    "House",
    "Techno",
    "Trance",
    "Dubstep",
    "Drum and Bass"
  ];
  
  export function printMusic(): void {
    console.log("Party Music:");
    music.forEach((genre) => {
      console.log(genre);
    });
  }
  
  printMusic();
  
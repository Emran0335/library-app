export function generateRandomGenres(): string[] {
  const choices = [
    "Non-Fiction",
    "Childrens",
    "Fantasy",
    "Fiction",
    "Biography",
    "Romance",
    "Science Fiction",
    "Young Adult",
  ];

  const chosen: string[] = [];

  while (chosen.length !== 5) {
    const num = Math.floor(Math.random() * 7);
    if (!chosen.includes(choices[num])) chosen.push(choices[num]);
  }
  return chosen;
}

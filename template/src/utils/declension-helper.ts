export function declension(labels: [string, string, string], count: number): string {
  let remainder = count % 100;

  if (remainder < 11 || remainder > 20) {
    remainder %= 10;

    if (remainder === 1) {
      return labels[0];
    }
    if (remainder > 1 && remainder < 5) {
      return labels[1];
    }
  }

  return labels[2];
}

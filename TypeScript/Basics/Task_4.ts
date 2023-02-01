function getHiddenCard(card: string, n = 4): string {
    return '*'.repeat(n) + card.slice(-4);
}

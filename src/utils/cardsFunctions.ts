export class CardsUtils {
    //returns the index of the card if the user has the specific card. Otherwise returns -1
    findCardIdx(userId, card, deck) {
        var cardIdx = deck.slice(userId * 10, (userId + 1) * 10).indexOf(card);
        return cardIdx == -1 ? cardIdx : cardIdx + 10 * userId;
    }
    
}
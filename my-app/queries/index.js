export function FETCH_CREATED_GAME() {
    return `query {
        games(orderBy:id, orderDirection: desc, first: 1) {
            id
            maxPlayer
            entryFee
            winner
            players
        }
    }`;
}
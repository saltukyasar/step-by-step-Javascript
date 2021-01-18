/*
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/
const team = {
  _players : [
    {
      firstName: 'Pete', 
      lastName: 'Wheeler', 
      age: 54
    }
  ],
  _games : [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer (firstName,lastName,age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  _games: [
    {
      opponent: 'Knicks', 
      teamPoints: 120, 
      opponentPoints: 60
    }
  ],
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph ' ,'Curry' ,28);
team.addPlayer('Lisa  ' ,'Leslie ' ,44);
team.addPlayer('Bugs   ' ,'Bunny  ' ,76);

console.log(team.players);











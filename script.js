//CONSTANTS
const players = {
  1: {
    name: 'Player One',
    score: '0',
  },
  '-1': {
    name: 'Player Two',
    score: '0',
  },
};

//STATE VARIABLES
//CACHED ELEMENTS
//EVENT LISTENERS
//INIT FUNC USED TO INIT ALL STATE VARS
function render() {
  renderBoard();
  renderScores();
  renderControls();
  renderMessages();
}
//INVOKE MAIN RENDER TO TRANSFER ALL STATE VARS TO DOM
render();

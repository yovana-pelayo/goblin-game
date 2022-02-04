// IMPORT MODULES under test here:
import { renderPlayer } from '../utils.js';

const test = QUnit.test;

test('renderPlayer will display a fighter name and HP', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="players"><div class="player"><p> Snooki</p><img id="player-img-1"><p id="player-hp-1">0</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlayer ({ id: 1, name: ' Snooki', hp: 1 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
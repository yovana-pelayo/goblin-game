// IMPORT MODULES under test here:
import { renderPlayer } from '../utils.js';

const test = QUnit.test;

test('renderPlayer will display a fighter name and HP', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 
`<div class="players"><div> Snooki</div><p id="player-img-1">🐷</p><p id="player-hp-1">1</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlayer ({ 
        id: 1, name: ' Snooki', hp: 1
        // id: 2, name: 'Thanos', hp: 2
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
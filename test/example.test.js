// IMPORT MODULES under test here:
import { renderFighter } from './utils.js';

const test = QUnit.test;

test('renderFighter will display a fighter name and HP', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div>5u3e75u6syw4</div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFighter ('fighter');
});

    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);


/* First Test:
no longer has DOM node 'main#main':
     AssertionError: Make sure you remove the <main> with id 'main': 
     expected <main id="main"></main> to not exist
     expect(document.querySelector('main')
*/

const element = document.getElementById('main');//grab element by id 
element.remove(); //call remove on element

/* Second Test:
has a 'newHeader' variable that points to node 'h1#victory':
 --> ReferenceError: newHeader is not defined
    expect(newHeader.id, "Make sure you create an <h1> with id 'victory'").eql('victory')
*/

//create new element by grabbing document and declaring newHeader
const newHeader = document.createElement('h1'); 
//grab newHeader element and set id, passing in 'id' and id name 'victory'
newHeader.setAttribute('id', 'victory'); 

/* Third Test:
has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside:
     AssertionError: Make sure you create an <h1> with id 'victory' with a sweet message in it:
      expected '' to include 'is the champion'
      expect(newHeader.innerHTML
*/
newHeader.innerHTML = 'My kitty Mimi is the champion';
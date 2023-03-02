/** @format */

const paragraphEditable = document.querySelectorAll('.task p');

function makeEditable() {
  paragraphEditable.forEach((paragraph) => {
    paragraph.contentEditable = true;

    // Add event listener to save content to localStorage
    paragraph.addEventListener('input', () => {
      localStorage.setItem('myParagraphContent', paragraph.innerHTML);
    });

    // Load content from localStorage if available
    const savedContent = localStorage.getItem('myParagraphContent');
    if (savedContent) {
      paragraph.innerHTML = savedContent;
    }
  });
}
makeEditable();

export default makeEditable;

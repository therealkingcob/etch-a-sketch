const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'div');  
    div.addEventListener('mouseenter', function() {
            div.setAttribute('style', 'background-color: blue;');    
      });
    container.appendChild(div);
}
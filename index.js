const ul = document.querySelector('ul');
ul.addEventListener('click', (e) => {
  const childrenList = e.target.children;
  if (childrenList.length === 0) {
    return;
  }
  for (let i = 0; i < childrenList.length; i++) {
    childrenList[i].classList.toggle('hidden');
  }
});

function go() {
  showCircle(400, 200, 100, div => { 
    div.classList.add('message-ball');
    div.append('Hello, visitor!');
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }, 0);
}

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

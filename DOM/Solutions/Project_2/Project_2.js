// import _ from 'lodash';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const rnd = (arr) => {
  return arr.reverse();
};


const app =  (randomize = rnd) => {
  const init = (valuesRnd) => {
    const values = valuesRnd.reverse();
    const container = document.querySelector('.gem-puzzle');
    container.innerHTML = '<table class="table-bordered"><tbody><tr></tr><tr></tr><tr></tr><tr></tr></tbody></table>';
    const trs = container.querySelectorAll('tr');
    for (let i = 0; i < 4; i++) {
      trs.forEach(tr => {
        const value = values.pop();
        const td = document.createElement('td');
        td.classList.add('p-3');
        if (value) {
          td.textContent = value;
          tr.appendChild(td);
        } else {
          td.classList.add('table-active');
          tr.appendChild(td);
        }
      });
    }
  };

  const findNeighbour = (relativePosition) => {
    const emptyTd = document.querySelector('.table-active');

    switch (relativePosition) {
      case ('ArrowLeft'): {
        return emptyTd.nextElementSibling;
      }
      case ('ArrowRight'): {
        return emptyTd.previousElementSibling;
      }
      case ('ArrowUp'): {
        const index = [...emptyTd.parentNode.children].indexOf(emptyTd);
        const nextRow = emptyTd.parentNode.nextElementSibling;
        if (!nextRow) return null;
        return nextRow.children[index];
      }
      case ('ArrowDown'): {
        const index = [...emptyTd.parentNode.children].indexOf(emptyTd);
        const prevRow = emptyTd.parentNode.previousElementSibling;
        if (!prevRow) return null;
        return prevRow.children[index];
      }
    }
  };

  const switchElements = (el1, el2) => {
    if (!el1 || !el2) return;
    const cloneEl2 = el2.cloneNode(true);
    el1.parentNode.replaceChild(cloneEl2, el1);
    el2.parentNode.replaceChild(el1, el2);
  };

  const valuesRnd = randomize(values);
  init([...valuesRnd]);


  document.addEventListener('keyup', (e) => {
    const emptyTd = document.querySelector('.table-active');
    const sibling = findNeighbour(e.key);
    switchElements(emptyTd, sibling);
  })
};

// document.addEventListener('DOMContentLoaded', () => app());
app();

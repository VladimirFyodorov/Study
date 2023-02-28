function debounce(fn) {
  let id;

  return function(...args) {
    if (id) clearTimeout(id);
    id = setTimeout(() => fn(...args));
  }
}

function log(text) {
  console.log(text);
}

log(1);
log(2);
log(3);

const debounceLog = debounce(log);

debounceLog(1);
debounceLog(2);
debounceLog(3);

const getfirstWords = (text) => {
  let result = [];
  const state = {
    inOrOut: 'outside', // inside to word or ouside the word
    retrived: false, // retrived first word or not
  };

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    switch (state.retrived) {
      case (true): {
        if (letter === '\n') {
          state.retrived = false;
        }
        break;
      }

      case (false): {
        switch (state.inOrOut) {
          case ('outside'): {
            if (letter === ' ' || letter === '\n') break;
            result.push(letter);
            state.inOrOut = 'inside';
            break;
          }

          case ('inside'): {
            if (letter === ' ') {
              state.retrived = true;
              state.inOrOut = 'outside'
              break;
            }
            if (letter === '\n') { // retirved from false to true and than to false => do nothing
              state.inOrOut = 'outside'
              break;
            }
            const lastWord = result.pop() || '';
            result.push(lastWord + letter);
          }
        }
      }

      default: break;
    }
  }

  return result;
};

const text = '  what who   \nhellomy\n hello who are you\n';
console.log(getfirstWords(text));
// [
//   'what',
//   'hellomy',
//   'hello',
// ];

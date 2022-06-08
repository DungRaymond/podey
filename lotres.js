// result dom class name = day_so_ket_qua_v2
// result item class name = bong_tron

// game option id = drpSelectGame
// 6/45 game id = 3

// game draw id = drpSelectGameDraw

// game draw range = 00001 - 00897

// result query id = 

// result search function = DoSearch

// result ball index = 378 -> 383

// pagination range = 0 -> 111, we skip the last since it has only 1 draw = 02 17 33 37 38 45

document.getElementById('drpSelectGame').value = 3;
const a = document.getElementById('drpSelectGameDraw');

// getting result loop
for(let i = 1; i < 897; i++) {
  setTimeout(() => {
    a.value = a.options[i].value;
    DoSearch(false);
    const b = document.getElementsByClassName('bong_tron');
    let resultArr = [];
    for(let k = 0; k < 6; k++) {
      resultArr.push(b[378 + k].innerHTML);
    };
    console.log(resultArr.toString());
  }, 800)
  
};

// Count the duplicates
const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);

// so cool isn't it?

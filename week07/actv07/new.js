const caminata = document.getElementById('caminata');
const date = document.getElementById('date');
const comment = document.getElementById('comment');
const btn = document.getElementById('btn');
const storage = document.getElementsByClassName('storage');

btn.onclick = function() {
    const key = caminata.value;
    const value = date.value;
    const write = comment.value;


    if (key & value & write) {
        localStorage.setItem(key, value, write);
        location.reload();
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const write = localStorage.getItem(key);


        storage.innerHTML += `${key}:${value}${write}`;
    }


};
// const string = 'Welcome to the future!';
//
// const JSONstring = JSON.stringify(string)
// console.log(JSONstring)
//
// const result = JSON.parse(JSONstring)
// console.log(result)

// const user = {
//     name: 'Mike',
//     sayHello () {
//         console.log('Hello')
//     }
// };
//
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// const normalUser = JSON.parse(userJSON);
// console.log(normalUser)

// try catch
// try {
//     const string = 'Welcome to the future!';
//     const result = JSON.parse(string)
// } catch (error) {
//     console.error(error.message)
// }
// const string = 'Welcome to the future!';
// const result = JSON.parse(string)
// console.log('Hello!')

// try {
//     console.log(array1);
// } catch (error) {
//     console.error(error.name);
//     console.error(error.message);
// }
// console.log(array1);
// console.log('Hello!1111')

// const userOriginal = {
//     name: 'Mike',
//     age: 17,
//     education: 'University',
//     job: 'coder',
//     hometown: 'New York'
// }
//
// const JSONuserOriginal = JSON.stringify(userOriginal);
// const userAfterJSON = JSON.parse(JSONuserOriginal);
// console.log(userOriginal)
// console.log(userAfterJSON)

const LOCAL_STORAGE_KEY = 'to-do-list';
const input = document.querySelector('#myInput');
const button = document.querySelector('.addBtn');
const toDoAreaList = document.querySelector('#myUL');

const toDoTasksLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
console.log(toDoTasksLocalStorage)
createListToDoFromLocalStorage();

button.addEventListener('click', onButtonClick);

function onButtonClick () {
    const inputValue = input.value;
    input.value = '';

    const li = `<li>${inputValue}</li>`;
    toDoAreaList.insertAdjacentHTML('beforeend', li);

    saveToLocalStorage(li);
}

function createListToDoFromLocalStorage () {
    const markup = toDoTasksLocalStorage.join('');
    toDoAreaList.innerHTML = markup;
}

function saveToLocalStorage (value) {
    toDoTasksLocalStorage.push(value);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoTasksLocalStorage))
}

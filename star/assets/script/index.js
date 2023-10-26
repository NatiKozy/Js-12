const button = document.querySelector('#button');

const checkName = (str) => {
    const rightName = ((str[0]).toUpperCase() + (str.slice(1)).toLowerCase()).replace(/\s/g, "");
    return rightName;
}

const checkSpam = (str) => {
    const rightComment = str.replace(/viagra|xxx/ig, "***");
    return rightComment;
}

const showChat = (name, avatar, comment) => {
    const chatDiv = document.querySelector('#chat');

    const p = document.createElement('p');
    p.textContent = name;
    chatDiv.append(p);

    const img = document.createElement('img');
    img.src = avatar;
    chatDiv.append(img);

    const text = document.createElement('p');
    text.textContent = comment;
    chatDiv.append(text);
}

button.addEventListener('click', () => {
    const rightName = checkName(document.querySelector('#name').value);

    const avatarValue = document.querySelector('#avatar').value;

    const rightComment = checkSpam(document.querySelector('#comment').value);

    showChat(rightName, avatarValue, rightComment);
});
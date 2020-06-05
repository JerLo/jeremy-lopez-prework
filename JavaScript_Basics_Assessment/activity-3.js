const nameList = ['Jake', 'Lucy', 'Gary'];

for (let i = 0; i < 3; i++) {
    const name = prompt("Enter a student's name");
    nameList.push(name);
}

for (i = 0; i < nameList.length; i++) {
    console.log(nameList[i])
}

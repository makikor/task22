export const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export function orderByProps(obj, arr){
    const newArr = [];
    const x =[]

    for (const i in obj) {
        if (!arr.includes(i)) {
        newArr.push({key: i, value: obj[i]});
        } else {
            x.push({key: i, value: obj[i]});
        }
    }
    newArr.sort((a, b) => b.value - a.value);

    for(let i =x.length-1; i>=0; i--){
        newArr.unshift(x[i]);
    }

    console.log(newArr)
    return (newArr);
}

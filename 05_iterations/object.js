const myobject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobject) {

    // console.log(`${key} shortcut is for ${myobject[key]}`);
    // if (Object.hasOwnProperty.call(myobject, key)) {
    //     const element = myobject[key];
    //     console.log(element);
    // }
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

//MAps //we cant iterate maps

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United States On America")
map.set('FR',"France")

for (const key in map) {
    console.log(key);
}
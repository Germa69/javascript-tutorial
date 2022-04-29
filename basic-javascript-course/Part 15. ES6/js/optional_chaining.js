const obj = {
    name: 'A',
    cat: {
        name: 'B',
        cat2: {
            name: 'C',
            cat3: {
                name: 'D',
            },
        },
    },
}

if(
    // obj.cat &&
    // obj.cat.cat2 &&
    // obj.cat.cat3

    obj?.cat?.cat2?.cat3
) 
{
    console.log(obj.cat.cat2.cat3.name);
}
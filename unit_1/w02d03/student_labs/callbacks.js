const func = (parm) => {
  console.log(parm)
}

//func()

func2 = (parm2) => {
  console.log('Hi')
}

//func(func2)

/////////////////////////////////////////////

const foo1 = (param, param2) => {
    param(param2);
}

const bar1 = (param) => {
    console.log(param);
}

foo1(bar1, 'hi');

///////////////////////////////////////////

const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');

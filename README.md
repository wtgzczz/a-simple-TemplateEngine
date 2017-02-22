# a-simple-TemplateEngine
```javascript
var scope = {
    title: "person list",
    items: [{
        name: 'pawn',
        age: 21,
        sex: 1
    }, {
            name: 'jk',
            age: 30,
            sex: 0
        },]

}

var template =
    `<div>
    {{title}}
    <ul>
        <li>
           name:{{items[0].name}}
           <br />
            age:{{items[0].age}}
           <br />
            sex:{{items[0].sex}}
        </li>
         <li>
           name:{{items[1].name}}
           <br />
            age:{{items[1].age}}
           <br />
            sex:{{items[1].sex}}
        </li>
    <ul/>
<div>
`;
console.log(SS.Render(template, scope));
```

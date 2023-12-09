// document.body.children[1].children[0].href = 'http://google.com';

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'http://google.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'http://lalahaha.net';

//요소를 추가 하려면,
//1. 새로운 요소부터 만들어야 함

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

//2. 그런 다음 DOM에 넣어줘야 하기 때문에, 새로운 요소를 가지고 있는 부모 요소부터 접근해야함

let firstParagraph = document.querySelector('p');  //첫번째 p 선택

//3. 부모 요소 컨텐츠에 새로운 요소를 삽입해야함.

firstParagraph.append(newAnchorElement);

//요소를 빼고자 한다면, 
//1. 빼려고 하는 요소를 선택하고,

let firtstH1Element = document.querySelector('h1');

//2. Remove it!

// firtstH1Element.remove();  //예전 브라우저에는 작동하지 않음, 하지만 심플하기에 사용 권장
firtstH1Element.parentElement.removeChild(firtstH1Element);  


//요소를 이동시키려면,      
firstParagraph.parentElement.append(firstParagraph);

//innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';
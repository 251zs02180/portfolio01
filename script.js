'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultArea = document.getElementById('result-area');

const answers = [
  '###userName###のいいところは、まわりを明るくできるところです。',
  '###userName###のいいところは、最後まであきらめないところです。',
  '###userName###のいいところは、人の気持ちを考えられるところです。',
  '###userName###のいいところは、好きなことに一生懸命になれるところです。',
  '###userName###のいいところは、自分らしさを大切にできるところです。'
];

assessmentButton.addEventListener('click', () => {
  const userName = userNameInput.value;

  if (userName.length === 0) {
    alert('名前を入力してください。');
    return;
  }

  resultArea.innerText = '';

  let sum = 0;
  for (let i = 0; i < userName.length; i++) {
    sum += userName.charCodeAt(i);
  }

  const index = sum % answers.length;
  const result = answers[index].replaceAll('###userName###', userName);

  const heading = document.createElement('h2');
  heading.innerText = '診断結果';

  const paragraph = document.createElement('p');
  paragraph.innerText = result;

  resultArea.appendChild(heading);
  resultArea.appendChild(paragraph);
});
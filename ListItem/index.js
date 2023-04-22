export const ListItem = (props) => {
  const { done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  const element = document.createElement('div');
  element.classList.add('list-item');
  element.innerHTML = `
    <button class="icon-btn btn-tick${tickClass}"></button>
    <div class="list-item__body">
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;

  return element;
};

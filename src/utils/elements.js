export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  const { children, ...otherprops } = props;
  Object.assign(element, otherprops);
  if (children) {
    element.append(...children);
  }
  return element;
};

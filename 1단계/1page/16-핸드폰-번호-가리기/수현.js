const solution = (phone_number) => {
  return phone_number.split('').reverse().fill('*', 4).reverse().join('');
};

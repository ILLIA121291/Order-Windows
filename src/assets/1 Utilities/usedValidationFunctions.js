function validationCustomerName(string) {
  return string.match(/^[A-Za-z-\s]+$/) ? true : false;
}

function validationCustomerPhone(string) {
  return string.match(/^[0-9]+$/) ? true : false;
}

export { validationCustomerName, validationCustomerPhone };

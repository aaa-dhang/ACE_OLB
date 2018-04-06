export const required = value => {
  //console.log("banana: ", value)
  return value ? null : "Required"
}

export const validEmail = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : null
}

export const validZipcode = value => {
  return value && !/^[0-9]{5,5}$/i.test(value)
  ? 'Invalid zipcode'
  : null
}
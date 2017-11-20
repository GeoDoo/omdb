const calculatePages = (number) => number > 10 ? (number % 10 === 0) ? parseInt(number / 10, 10) : parseInt(number / 10, 10) + 1 : 0

export default calculatePages
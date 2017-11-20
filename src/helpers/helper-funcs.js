const calculatePages = (number) => number > 10 ? (number % 10 === 0) ? parseInt(number / 10, 10) : parseInt(number / 10, 10) + 1 : 0

const scrollToTopOfPager = () => {
    let topPos = document.getElementById('anchor').offsetTop
    window.scrollTo(0, topPos - 45)
}

export { calculatePages, scrollToTopOfPager }
import { calculatePages } from './helper-funcs'

describe('Helper functions', () => {
	describe('calculatePages function', () => {
		test('calculates correctly the pages when the results are divided fully by 10', () => {
			const totalResults = 100

			expect(calculatePages(totalResults)).toBe(10)
		})

		test('calculates correctly the pages when the results are not divided fully with 10', () => {
			const totalResults = 102

			expect(calculatePages(totalResults)).toBe(11)
		})

		test('when results are less than 10 returns 0', () => {
			const totalPages = 0

			expect(calculatePages(9)).toBe(totalPages)
		})
	})
})
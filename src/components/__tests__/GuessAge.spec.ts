import { setupServer } from 'msw/node'
import { http } from 'msw'
import { mount } from '@vue/test-utils'
import GuessAge from '@/components/GuessAge.vue'
import { expect, test, it, beforeAll, afterAll, afterEach } from 'vitest'

const wrapper = mount(GuessAge)

export const restHandlers = [
  http.get('https://api.agify.io/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          age: 55,
          name: 'tope'
        }
      ])
    )
  })
]
const server = setupServer(...restHandlers)
// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
//  Close server after all tests
afterAll(() => server.close())
// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

it('testing GuessAge component props', async () => {
  expect(GuessAge.props.title.default).toContain('Guess Age')
})

it('Test if getAge is a function', () => {
  const instance = wrapper.vm
  const getAgeFunction = (instance as any).getAge
  expect(typeof getAgeFunction).toBe('function')
})

test('has a button', () => {
  expect(wrapper.find('button').exists()).toBe(true)
})

test('Button clicked', async () => {
  const ac = await wrapper.get('button').trigger('click')
  expect(wrapper.vm.data.search).toEqual('')
})

import { random } from '~/util/random'
import Question from './Question'
import { first } from './questions'
import dayjs from 'dayjs'

export const Main = () => {
  const today = dayjs().format('M/D')

  return (
    <div className="w-full h-full text-slate-700 text-xl relative">
      <div className="flex flex-row-reverse flex-wrap gap-4">
        {random(first, 10).map((q, i) => (
          <div key={i}>
            <Question question={q} questionNumber={i + 1} />
          </div>
        ))}
      </div>
      <span className="bottom-0 left-0">{today}</span>
    </div>
  )
}

import { format } from 'util'
import { Question } from './questions'

type Props = {
  question: Question
  questionNumber: number
}

const Question: React.FC<Props> = ({ question, questionNumber }) => {
  const innerHTML = format(question.text, `<span class="overline">${question.test}</span>`)

  return (
    <div className="flex items-center [writing-mode:vertical-rl] gap-[3mm]">
      <span className="[writing-mode:horizontal-tb]">{questionNumber}</span>
      <div className="h-[80mm] leading-8" dangerouslySetInnerHTML={{ __html: innerHTML }} />
      <div className="border w-[20mm] h-[50mm] border-slate-700" />
    </div>
  )
}

export default Question

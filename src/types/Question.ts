import AnswerOption from './AnswerOption'

interface Question {
  id: number
  question: string
  answer_options: AnswerOption[]
  correct_answers_ids: number[]
}

export default Question

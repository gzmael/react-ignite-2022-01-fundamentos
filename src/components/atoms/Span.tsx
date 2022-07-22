import { SpanMarkdown } from "../../utils/posts"

const Span = ({ value }: Pick<SpanMarkdown, 'value'>) => {
  return (
    <span>
      {value}
    </span>
  )
}

export { Span }
import { LinkMarkdown, SpanMarkdown, ParagraphMarkdown } from "../../utils/posts"
import { Link } from "./Link"
import { Span } from "./Span"

interface ChildProps {
  child: LinkMarkdown | SpanMarkdown | ParagraphMarkdown
}

const Child = ({ child }: ChildProps) => {

  if(child.type === "link") {
    return <Link children={child.children} url={child.url} />
  }

  if(child.type === "span") {
    return <Span value={child.value} />
  }

  return null
}

export { Child }
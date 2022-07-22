import { ParagraphMarkdown } from "../../utils/posts"
import { Child } from "./Child"
import { nanoid } from "nanoid"

const Paragraph = ({ children }: Omit<ParagraphMarkdown, 'type'>) => {
  return (
    <p>
      {children.map(child => (
        <Child child={child} key={nanoid()} />
      ))}
    </p>
  )
}

export { Paragraph }

import { LinkMarkdown } from "../../utils/posts"
import { Span } from "./Span"

const Link = ({ children, url }: Omit<LinkMarkdown, 'type'>) => {
  return (
    <a href={url}>
      {children.map(child => (
        <Span value={child.value} key={child.value} />
      ))}
    </a>
  )
}

export { Link }
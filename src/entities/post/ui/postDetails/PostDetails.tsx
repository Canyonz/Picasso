import { AppLink } from "@/shared/ui/appLink/AppLink"
import { Text } from "@/shared/ui/text/Text"
import { getRoutePosts } from "@/shared/const/routes"
import cls from 'classnames'
import { Post } from "../../model/types/post"

interface PostDetailsProps {
  post: Post,
  className?: string
}

export const PostDetails = ({ post, className }: PostDetailsProps) => {
  return (
    <div className={cls("", className)}>
      <AppLink href={getRoutePosts()} text="Назад" className="mb-4" />

      <div className="flex flex-col gap-2 bg-rose-100 p-5">
        <div className="flex gap-4">
          <Text title={post.id + ' ' + post.title} size="md" />
        </div>
        <Text text={post.descriptions} />
      </div>
    </div>
  )
}

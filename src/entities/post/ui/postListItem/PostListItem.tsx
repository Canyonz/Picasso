import { AppLink } from "@/shared/ui/appLink/AppLink"
import { Text } from "@/shared/ui/text/Text"
import { Post } from "../../model/types/post"
import { getRoutePost } from "@/shared/const/routes"
import cls from 'classnames'

interface PostListItemProps {
  post: Post,
  className?: string
}

export const PostListItem = ({ post, className }: PostListItemProps) => {
  return (
    <div className={cls("bg-rose-100 p-5", className)}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <Text title={post.id + ' ' + post.title} size="md" />
        </div>
        <Text text={post.descriptions} className="text-nowrap overflow-x-hidden text-ellipsis" />
      </div>

      <AppLink href={getRoutePost(post.id)} text="Просмотр" className="mt-4 ml-auto" />
    </div>
  )
}
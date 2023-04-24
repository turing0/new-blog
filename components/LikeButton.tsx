import { FOCUS_VISIBLE_OUTLINE } from "lib/constants"
import { usePostLikes } from "lib/usePostLikes"
import { LoadingDots } from "components/LoadingDots"
import HeartIcon from "@heroicons/react/solid/HeartIcon"
import cx from "clsx"
import React from "react"

const emojis = ["👍", "🙏", "🥰"]

// A visual component that...
// 1. Fills a heart shape with a gradient depending on the number of likes passed
// 2. Animates a thank you emoji as the number of likes increase
export const LikeButton = ({ slug }: { slug: string }) => {
  const { currentUserLikes, likes, isLoading, increment } = usePostLikes(slug)

  let [animatedEmojis, setAnimatedEmojis] = React.useState<string[]>(
    currentUserLikes ? [emojis[currentUserLikes]] : [],
  )

  const handleClick = () => {
    increment()
    if (currentUserLikes && currentUserLikes <= 2) {
      setAnimatedEmojis([...animatedEmojis, emojis[currentUserLikes]])
    }
  }

  return (
    <div className="flex items-center space-x-2 text-rose-900/90 dark:text-rose-100/90">
      <div className="text-lg font-medium leading-none ">
        {isLoading ? <LoadingDots /> : <span>Likes: {likes}</span>}
      </div>
      <div className="relative ">
        {/* Thank you emojis */}
        {animatedEmojis.map((emoji, index) => {
          return (
            <div
              key={index}
              className="absolute w-full animate-[emoji_0.75s_ease-out] text-center opacity-0"
            >
              {emoji}
            </div>
          )
        })}

        <button
          className={cx(
            "shadow-lgx group relative block transform overflow-hidden rounded-lg bg-gradient-to-tl from-dark/5 to-dark/30 dark:from-white/5 dark:to-white/30 p-1 transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg",
            FOCUS_VISIBLE_OUTLINE,
            {
              "animate-pulse": isLoading,
              "hover:shadow-gray-500/30": currentUserLikes === 0,
              "hover:shadow-purple-500/50": currentUserLikes !== 0,
            },
          )}
          onClick={handleClick}
        >
          <div
            className={cx(
              "absolute inset-0 transform-gpu bg-gradient-to-tl from-purple-500 to-rose-400 transition-transform",
              {
                "translate-y-8": currentUserLikes === 0,
                "translate-y-5": currentUserLikes === 1,
                "translate-y-3": currentUserLikes === 2,
              },
            )}
          />

          <HeartIcon className="relative w-5 transform text-red-900 dark:text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
        </button>
      </div>

      {/* Like counter text */}
      <div className="text-lg font-medium leading-none">
        {isLoading ? <LoadingDots /> : <span>{currentUserLikes}</span>}
      </div>
    </div>
  )
}

import clsx from 'clsx'

import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

const styles = {
  note: {
    container:
      'bg-teal-50 dark:bg-zinc-800/60 dark:ring-1 dark:ring-zinc-300/10',
    title: 'text-sky-900 dark:text-sky-400',
    body: 'text-teal-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-teal-900 prose-a:dark:text-white prose-code:text-teal-900 dark:text-zinc-300 dark:prose-code:text-zinc-300',
    icon: 'text-sky-500',
  },
  warning: {
    container:
      'bg-amber-50 dark:bg-zinc-800/60 dark:ring-1 dark:ring-zinc-300/10',
    title: 'text-amber-900 dark:text-amber-500',
    body: 'text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 dark:prose-a:text-white prose-code:text-amber-900 dark:text-zinc-300 dark:[--tw-prose-underline:theme(colors.pink.700)] dark:prose-code:text-zinc-300',
    icon: 'text-amber-500',
  },
}

const icons = {
  note: (props) => <InformationCircleIcon {...props} />,
  warning: (props) => <ExclamationTriangleIcon color="amber" {...props} />,
}

export function Callout({
  as: Component = 'div',
  type = 'note',
  title,
  children,
}) {
  let IconComponent = icons[type]

  return (
    <>
      <Component
        className={clsx(
          'not-prose my-8 flex rounded-xl p-6',
          styles[type].container
        )}
      >
        <IconComponent
          className={clsx('h-8 w-8 flex-none', styles[type].icon)}
        />
        <div className="ml-4 flex-auto">
          <p className={clsx('m-0 text-xl font-medium', styles[type].title)}>
            {title}
          </p>
          <div className={clsx('prose mt-2.5', styles[type].body)}>
            {children}
          </div>
        </div>
      </Component>
    </>
  )
}

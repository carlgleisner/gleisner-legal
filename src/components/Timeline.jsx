const colorClasses = {
  amber: 'bg-amber-400 dark:bg-amber-700',
  green: 'bg-green-500 dark:bg-green-700',
  blue: 'bg-blue-500 dark:bg-blue-800',
  zinc: 'bg-zinc-200 dark:bg-zinc-700',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Timeline({ items = [], ...props }) {
  return (
    <div className={'not-prose my-12 mx-0 flow-root md:mx-16'}>
      <ul role="list" className="-mb-8">
        {items.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== items.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-zinc-200 dark:bg-zinc-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  {event.pinging ? (
                    <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-sky-300 opacity-75"></span>
                  ) : null}
                  <span
                    className={classNames(
                      colorClasses[event.color],
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-zinc-800'
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white dark:text-zinc-300"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-zinc-500 dark:ml-2 dark:text-zinc-400">
                      {event.content}{' '}
                      {event.href != '#' ? (
                        <a
                          href={event.href}
                          className="font-medium text-zinc-900 dark:text-zinc-200"
                        >
                          {event.target}
                        </a>
                      ) : (
                        <span className="font-medium text-zinc-900 dark:text-zinc-200">
                          {event.target}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-zinc-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

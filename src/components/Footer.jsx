import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 print:hidden">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/om">Om</NavLink>
                <NavLink href="/artiklar">Artiklar</NavLink>
                {/* 🐣✨🥸 */}
                <NavLink href="/projekt">Projekt</NavLink>
                {/* <NavLink href="#">Onion site 🧅</NavLink> */}
              </div>
              <Link
                href="/.well-known/security.txt"
                className="font-mono text-sm text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                security.txt{' '}
              </Link>
              <Link
                href="https://keys.openpgp.org/search?q=755512972B75E76EB430C5839502AB6A2EBCDE64"
                className="font-mono text-sm text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                7555 1297 2B75 E76E B430 <br className="block sm:hidden" /> C583
                9502 AB6A 2EBC DE64
              </Link>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

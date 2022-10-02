import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  VCardIcon,
  BuildingOfficeIcon,
  KeyIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-semibold text-zinc-800 transition hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Om - Carl Gleisner</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Porträtt av Carl Gleisner"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-xl bg-zinc-100 object-cover shadow-red-500 dark:bg-zinc-800 lg:aspect-auto"
                priority
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Jag hjälper dig med det juridiska kring din teknik.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-700 dark:text-zinc-300">
              <p>
                Jag minns fortfarande när min far i början av 2000-talet kom hem
                från en konferens och föreslog att jag skulle kolla in det där
                med
                {` `}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  open source
                </span>
                . Det blev början på en fascinerande resa där jag upptäckte hur
                människor och företag delar med sig av sin källkod och
                åstadkommer fantastiska saker. Jag lärde mig att använda{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Linux
                </span>
                , skapa databaser med svenska{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  MySQL
                </span>
                , att programmera i{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Java
                </span>{' '}
                och mycket mera. Det var utmanande och utvecklande men
                framförallt – en nästan obegränsad källa till underhållning.
              </p>
              <p>
                När jag ser tillbaka på det så inser jag att licensavtalen som
                innehöll villkoren för den nyupptäckta världen lockade mig redan
                då. Det var{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  som ett slags fast kod mer subtilt
                </span>{' '}
                och med ett traditionellt språk.
              </p>
              <p>
                I slutändan blev mjukvaruutveckling ingen heltidssysselsättning
                för mig – och det är något jag är nöjd med i dagsläget. Det
                beror inte på att jag tappat fascinationen för det, utan på att
                jag{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  inte ville riskera skapar&shy;glädjen
                </span>{' '}
                genom att göra mig beroende av en sysselsättning som kanske inte
                är i linje med min egen vilja. Det beror även på att jag alltid
                haft en dragning till företagande, affärsförhandlingar, att
                använda mitt språk för att förmedla budskap och övertyga andra.
              </p>
              <p>
                Jag har haft tur i livet som snubblat in på en nisch i{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  skärnings&shy;punkten mellan teknik och juridik
                </span>
                . Utöver att ha ett arbete som engagerar mig så får jag dagligen
                möjlighet att göra det jag uppskattar mest – att hjälpa andra
                människor. Somliga tycker säkert det låter märkligt när det
                kommer från någon som biträder företag. De glömmer i så fall
                bort att företag (än så länge) drivs av just människor som
                anstränger sig hårt för att göra sitt jobb så bra som möjligt.
              </p>
              <p>
                Om du eller ditt företag behöver hjälp så finner ni mig på{' '}
                <Link
                  href={'https://www.wsa.se/medarbetare/carl-gleisner'}
                  className={
                    'font-semibold text-zinc-900 transition hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400'
                  }
                >
                  Wesslau Söderqvist Advokatbyrå
                </Link>{' '}
                i Stockholm. Om du bara vill snacka open source-licenser,
                säkerhet eller något annat är du så klart också hjärtligt
                välkommen att höra av dig 🤙🏻
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.twitter.com/carlgleisner"
                icon={TwitterIcon}
              >
                Twitter
              </SocialLink>
              <SocialLink
                href="https://www.github.com/carlgleisner"
                icon={GitHubIcon}
                className="mt-4"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/carlgleisner"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:carl@gleisner.legal"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                carl@gleisner.legal
              </SocialLink>
              <SocialLink
                href="https://keys.openpgp.org/search?q=755512972B75E76EB430C5839502AB6A2EBCDE64"
                icon={KeyIcon}
                className="mt-4"
              >
                Publik nyckel för e-post
              </SocialLink>
              <SocialLink
                href="https://www.wsa.se/medarbetare/carl-gleisner"
                icon={BuildingOfficeIcon}
                className="mt-4"
              >
                Medarbetarprofil
              </SocialLink>
              <SocialLink
                href="/carl-gleisner.vcf"
                icon={VCardIcon}
                className="mt-4"
              >
                vCard
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

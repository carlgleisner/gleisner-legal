import Head from 'next/head'
import Link from 'next/link'

import {
  RambergAdvokaterLogo,
  SverigesDomstolarLogo,
  UppsalaUniversitetLogo,
  WesslauSoderqvistLogo,
} from '@/components/Logos'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-500 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function AcademicCapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      className="h-6 w-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        className="fill-zinc-100 stroke-zinc-500 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/artiklar/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date}>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Läs artikeln</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Wesslau Söderqvist Advokatbyrå',
      title: 'Biträdande jurist',
      logo: WesslauSoderqvistLogo,
      start: '2019',
      end: {
        label: 'Nu',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Ramberg Advokater',
      title: 'Biträdande jurist',
      logo: RambergAdvokaterLogo,
      start: '2018',
      end: '2019',
    },
    {
      company: 'Gävle tingsrätt',
      title: 'Tingsnotarie',
      logo: SverigesDomstolarLogo,
      start: '2016',
      end: '2018',
    },
  ]

  let education = [
    {
      institution: 'Uppsala Universitet',
      title: 'Juristexamen',
      logo: UppsalaUniversitetLogo,
      graduated: '2016',
    },
    {
      institution: 'Uppsala Universitet',
      title: 'Teknologiekandidat, datatenik',
      logo: UppsalaUniversitetLogo,
      graduated: '2013',
      start: '2013',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Erfarenhet</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <role.logo className="h-7 w-7 rounded-full" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Företag</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Roll</dt>
              <dd className="text-xs text-zinc-600 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">År</dt>
              <dd
                className="ml-auto text-xs text-zinc-600 dark:text-zinc-400"
                aria-label={`${role.start.label ?? role.start} till ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>
                <span aria-hidden="true">-</span>
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <h2 className="mt-8 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <AcademicCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Utbildning</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <role.logo className="h-7 w-7 rounded-full" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Institution</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {role.institution}
              </dd>
              <dt className="sr-only">Titel</dt>
              <dd className="text-xs text-zinc-600 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Examina</dt>
              <dd
                className="ml-auto text-xs text-zinc-600 dark:text-zinc-400"
                aria-label={`Graduated${
                  role.graduated.label ?? role.graduated
                }`}
              >
                <time dateTime={role.graduated.dateTime ?? role.graduated}>
                  {role.graduated.label ?? role.graduated}
                </time>{' '}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Carl Gleisner - Jurist som förstår teknik</title>
        <meta
          name="description"
          content="Jag heter Carl Gleisner och arbetar som biträdande jurist på Wesslau Söderqvist Advokatbyrå i Stockholm. Min specialitet är att lösa juridiska problem som rör teknik. Fråga gärna mig om informationssäkerhet eller open source-licenser"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Skärningspunkten mellan juridik och teknik.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Jag heter Carl Gleisner och arbetar som biträdande jurist på{' '}
            <Link
              href={'https://www.wsa.se/medarbetare/carl-gleisner'}
              className={
                'font-semibold text-black transition hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400'
              }
            >
              Wesslau Söderqvist Advokatbyrå
            </Link>{' '}
            i Stockholm. Min specialitet är att lösa juridiska problem som rör
            teknik. Fråga gärna mig om informationssäkerhet eller open
            source-licenser.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/carlgleisner"
              aria-label="Följ på Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/carlgleisner"
              aria-label="Följ på GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/carlgleisner"
              aria-label="Följ på LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

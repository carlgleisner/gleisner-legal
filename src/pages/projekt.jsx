import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoVagledningOpenSourceLicenser from '@/images/logos/vägledning-open-source-licenser.svg'
import ndaIcon from '@/images/logos/nda.svg'
import infosecLagstiftningIcon from '@/images/logos/infosec-lagstiftning.svg'
import webserviceIcon from '@/images/logos/webservice-icon.svg'

// 🐣✨🥸
const projects = [
  {
    name: 'Sekretessavtal',
    description:
      'Enkla mallar för sekretessavtal tillsammans med en övergripande vägledning.',
    link: {
      href: 'http://github.com/carlgleisner/sekretessavtal',
      label: 'github.com',
    },
    logo: ndaIcon,
    published: false,
  },
  {
    name: 'Licensavtal för webbtjänster',
    description:
      'Ett licensavtal för öppet tillgängliga webbtjänster som tillhandahåller öppna data.',
    link: { href: '#', label: 'github.com' },
    logo: webserviceIcon,
    published: false,
  },
  {
    name: 'Vägledning vid val open source-licenser',
    description:
      'Hur du bör tänka vid val av open source-licens när en mjukvara ska öppnas upp.',
    link: { href: '#', label: 'github.com' },
    logo: logoVagledningOpenSourceLicenser,
    published: false,
  },
  {
    name: 'Lagstiftning om informationssäkerhet',
    description:
      'En sammanställning av gällande lagstiftning inom informationssäkerhet samt beskrivning av skyddsföremål och tillämpningsområde m.m.',
    link: { href: '#', label: 'github.com' },
    logo: infosecLagstiftningIcon,
    published: false,
  },
  {
    name: 'Wiki för informationssäkerhet',
    description:
      'En lättillgänglig och kollaborativ version av MSB:s metodstöd för informationssäkerhet.',
    link: {
      href: 'https://infosec.gleisner.wiki',
      label: 'infosec.gleisner.wiki',
    },
    logo: infosecLagstiftningIcon,
    published: true,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projekt - Carl Gleisner</title>
        <meta
          name="description"
          content="Saker jag skapat för att dela med mig av mina kunskaper."
        />
      </Head>
      <SimpleLayout
        title="Saker jag skapat för att dela med mig av mina kunskaper."
        intro="Det mesta jag gör är hemligt men det betyder inte att det finns utrymme för att dela med sig av sina kunskaper."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects
            .filter((project) => project.published == true)
            .map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

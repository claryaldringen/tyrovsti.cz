import { Col, Container, Row } from 'reactstrap'
import React, { useMemo, useState } from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { Waldshuterkrieg } from '../../components/Articles/cz/akce/Waldshuterkrieg'
import { BavorskaValka } from '../../components/Articles/cz/akce/BavorskaValka'
import { CernaArmada } from '../../components/Articles/cz/akce/CernaArmada'
import { SoesterskaZasti } from '../../components/Articles/cz/akce/SoesterskaZasti'
import { SaskaBratrovrazednaValka } from '../../components/Articles/cz/akce/SaskaBratrovrazednaValka'
import { JiskrovaVojskaNaSlovensku } from '../../components/Articles/cz/akce/JiskrovaVojskaNaSlovensku'
import { BojeOUherskyTrun1440 } from '../../components/Articles/cz/akce/BojeOUherskyTrun1440'
import { HunyadihoDlouheTazeni } from '../../components/Articles/cz/akce/HunyadihoDlouheTazeni'
import { BitvaUVarny } from '../../components/Articles/cz/akce/BitvaUVarny'
import { DruhaBitvaNaKosovePoli } from '../../components/Articles/cz/akce/DruhaBitvaNaKosovePoli'
import { OblehaniBelehradu1456 } from '../../components/Articles/cz/akce/OblehaniBelehradu1456'
import { BitvaNaKrbavskemPoli } from '../../components/Articles/cz/akce/BitvaNaKrbavskemPoli'
import { BukovinskaVyprava } from '../../components/Articles/cz/akce/BukovinskaVyprava'
import { BitvaUMohace } from '../../components/Articles/cz/akce/BitvaUMohace'
import { CtvrtaLitevskoMoskevska } from '../../components/Articles/cz/akce/CtvrtaLitevskoMoskevska'
import { RakouskyBratrovrazednaValka } from '../../components/Articles/cz/akce/RakouskyBratrovrazednaValka'
import { MohucskaZasti } from '../../components/Articles/cz/akce/MohucskaZasti'
import { BadenskoFalckaValka } from '../../components/Articles/cz/akce/BadenskoFalckaValka'
import { KaplirovoZastiPasov } from '../../components/Articles/cz/akce/KaplirovoZastiPasov'
import { DobytiPajreka } from '../../components/Articles/cz/akce/DobytiPajreka'
import { TrinactiletaValka } from '../../components/Articles/cz/akce/TrinactiletaValka'
import { BocklerskaValka } from '../../components/Articles/cz/akce/BocklerskaValka'
import { SvabskaValka } from '../../components/Articles/cz/akce/SvabskaValka'
import { LandshutskaDedickaValka } from '../../components/Articles/cz/akce/LandshutskaDedickaValka'
import { ZastiBrenkaKocovskeho } from '../../components/Articles/cz/akce/ZastiBrenkaKocovskeho'
import {
  ALL_REGIONS,
  CasovaOsa,
} from '../../components/Articles/cz/akce/CasovaOsa'
import {
  CONFLICTS,
  CZECH_MERCENARIES,
  Region,
} from '../../components/Articles/cz/akce/casovaOsaData'
import { LANG_CS } from '../../shared/constants'
import { ArticleProps } from '../../types'

type ArticleEntry = {
  // ID konfliktů, jejichž viditelnost v ose ovládá zobrazení článku.
  // Článek se zobrazí, je-li v aktuálním filtru viditelný kterýkoli z nich.
  conflictIds: string[]
  // Pořadí článku v seznamu — start roku.
  start: number
  Component: React.ComponentType<ArticleProps>
}

const ARTICLE_ENTRIES: ArticleEntry[] = (
  [
    {
      conflictIds: ['soester-fehde'],
      Component: SoesterskaZasti,
    },
    {
      conflictIds: ['sasky-bratrovrazedny-valka'],
      Component: SaskaBratrovrazednaValka,
    },
    {
      conflictIds: ['bavorska-valka'],
      Component: BavorskaValka,
    },
    {
      conflictIds: ['waldshuterkrieg'],
      Component: Waldshuterkrieg,
    },
    {
      // Černá armáda nemá vlastní bar v ose; zobrazuje se,
      // je-li viditelný některý z konfliktů, jichž se účastnila.
      conflictIds: [
        'bitva-u-baia',
        'cesko-uherska-valka',
        'vpad-kazimira-1471',
        'rakousko-uherska-valka-matyase',
        'osmansko-uherska-valka-1463-1483',
        'cerne-vojsko-vzpoura',
      ],
      Component: CernaArmada,
    },
    {
      conflictIds: ['jiskrova-vojska-na-slovensku'],
      Component: JiskrovaVojskaNaSlovensku,
    },
    {
      conflictIds: ['boje-o-uhersky-trun-1440'],
      Component: BojeOUherskyTrun1440,
    },
    {
      conflictIds: ['hunyadiho-dlouhe-tazeni'],
      Component: HunyadihoDlouheTazeni,
    },
    { conflictIds: ['bitva-u-varny'], Component: BitvaUVarny },
    {
      conflictIds: ['druha-bitva-na-kosove-poli'],
      Component: DruhaBitvaNaKosovePoli,
    },
    {
      conflictIds: ['oblehani-belehradu-1456'],
      Component: OblehaniBelehradu1456,
    },
    {
      conflictIds: ['bitva-na-krbavskem-poli'],
      Component: BitvaNaKrbavskemPoli,
    },
    { conflictIds: ['bukovinska-vyprava'], Component: BukovinskaVyprava },
    { conflictIds: ['bitva-u-mohace'], Component: BitvaUMohace },
    {
      conflictIds: ['ctvrta-litevsko-moskevska'],
      Component: CtvrtaLitevskoMoskevska,
    },
    {
      conflictIds: ['rakousky-bratrovrazedny-valka'],
      Component: RakouskyBratrovrazednaValka,
    },
    { conflictIds: ['mohucska-zasti'], Component: MohucskaZasti },
    { conflictIds: ['badensko-falcka-valka'], Component: BadenskoFalckaValka },
    { conflictIds: ['kaplirovo-zasti-pasov'], Component: KaplirovoZastiPasov },
    { conflictIds: ['dobyti-pajreka-1471-1472'], Component: DobytiPajreka },
    { conflictIds: ['trinactileta-valka'], Component: TrinactiletaValka },
    { conflictIds: ['bocklerska-valka'], Component: BocklerskaValka },
    { conflictIds: ['svabska-valka'], Component: SvabskaValka },
    {
      conflictIds: ['landshutska-dedicka-valka'],
      Component: LandshutskaDedickaValka,
    },
    {
      conflictIds: ['zasti-bronska-kocovskeho-s-wittelsbachy-1475-1476'],
      Component: ZastiBrenkaKocovskeho,
    },
  ] as Omit<ArticleEntry, 'start'>[]
)
  .map((entry) => {
    const earliestStart = Math.min(
      ...entry.conflictIds.map((id) => {
        const conflict = CONFLICTS.find((c) => c.id === id)
        return conflict?.start ?? Number.MAX_SAFE_INTEGER
      })
    )
    return { ...entry, start: earliestStart }
  })
  .sort((a, b) => a.start - b.start)

const Page = () => {
  const [activeRegions, setActiveRegions] = useState<Set<Region>>(
    () => new Set(ALL_REGIONS)
  )
  const [onlyMerc, setOnlyMerc] = useState(false)

  const onToggleRegion = (r: Region) => {
    setActiveRegions((prev) => {
      const next = new Set(prev)
      if (next.has(r)) next.delete(r)
      else next.add(r)
      return next
    })
  }
  const onToggleMerc = () => setOnlyMerc((v) => !v)

  const visibleArticles = useMemo(
    () =>
      ARTICLE_ENTRIES.filter((entry) =>
        entry.conflictIds.some((id) => {
          const conflict = CONFLICTS.find((c) => c.id === id)
          if (!conflict) return false
          const regionMatch = conflict.regions.some((r) => activeRegions.has(r))
          const mercMatch = !onlyMerc || id in CZECH_MERCENARIES
          return regionMatch && mercMatch
        })
      ),
    [activeRegions, onlyMerc]
  )

  return (
    <>
      <HeadExtended
        title="Přehled vojenských akcí 1434 - 1525"
        image="orsha.jpg"
        description="Přehled vojenských akcí – bitvy a tažení v 15. století"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Přehled vojenských akcí 1434 - 1525</h1>
            <CasovaOsa
              activeRegions={activeRegions}
              onlyMerc={onlyMerc}
              onToggleRegion={onToggleRegion}
              onToggleMerc={onToggleMerc}
            />
            {visibleArticles.map((entry) => (
              <entry.Component key={entry.conflictIds[0]} />
            ))}
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/military-campaigns',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page

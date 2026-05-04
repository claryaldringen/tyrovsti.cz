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
import { LitevskaObcanskaValka } from '../../components/Articles/cz/akce/LitevskaObcanskaValka'
import { HusitskeVpadySpis } from '../../components/Articles/cz/akce/HusitskeVpadySpis'
import { BitvaULipan } from '../../components/Articles/cz/akce/BitvaULipan'
import { DoznivaniHusitskychValek } from '../../components/Articles/cz/akce/DoznivaniHusitskychValek'
import { OsmanskeTazeniDoSedmihradska1438 } from '../../components/Articles/cz/akce/OsmanskeTazeniDoSedmihradska1438'
import { OblehaniSmedereva1439 } from '../../components/Articles/cz/akce/OblehaniSmedereva1439'
import { PrvniOblehaniBelehradu1440 } from '../../components/Articles/cz/akce/PrvniOblehaniBelehradu1440'
import { BojeOCeskyTrunPoAlbrechtovi } from '../../components/Articles/cz/akce/BojeOCeskyTrunPoAlbrechtovi'
import { VpadyBratriku } from '../../components/Articles/cz/akce/VpadyBratriku'
import { RakouskoUherskaValka1446 } from '../../components/Articles/cz/akce/RakouskoUherskaValka1446'
import { TazeniJirihoNaPrahu } from '../../components/Articles/cz/akce/TazeniJirihoNaPrahu'
import { BorsengrunskaZasti } from '../../components/Articles/cz/akce/BorsengrunskaZasti'
import { SporOLadislavaPohrobka } from '../../components/Articles/cz/akce/SporOLadislavaPohrobka'
import { PrvniMarkrabskaValka } from '../../components/Articles/cz/akce/PrvniMarkrabskaValka'
import { JihonemeckaMestskaValka } from '../../components/Articles/cz/akce/JihonemeckaMestskaValka'
import { ValkaJirihoProtiStrakonickeJednote } from '../../components/Articles/cz/akce/ValkaJirihoProtiStrakonickeJednote'
import { PruskePovstani } from '../../components/Articles/cz/akce/PruskePovstani'
import { OsmanskeDobytiSrbska } from '../../components/Articles/cz/akce/OsmanskeDobytiSrbska'
import { PovstaniMagnatuProtiMatyasovi1459 } from '../../components/Articles/cz/akce/PovstaniMagnatuProtiMatyasovi1459'
import { OsmanskeDobytiBosny } from '../../components/Articles/cz/akce/OsmanskeDobytiBosny'
import { OsmanskoUherskaValka14631483 } from '../../components/Articles/cz/akce/OsmanskoUherskaValka14631483'
import { StetinskaDedickaValka } from '../../components/Articles/cz/akce/StetinskaDedickaValka'
import { ValkaProtiZelenohorskeJednote } from '../../components/Articles/cz/akce/ValkaProtiZelenohorskeJednote'
import { KnezskaValka } from '../../components/Articles/cz/akce/KnezskaValka'
import { FalckaValkaFridrichaVitezneho } from '../../components/Articles/cz/akce/FalckaValkaFridrichaVitezneho'
import { SpiknutiVitezJanusPannonius } from '../../components/Articles/cz/akce/SpiknutiVitezJanusPannonius'
import { PolskoUherskaValka1474 } from '../../components/Articles/cz/akce/PolskoUherskaValka1474'
import { HlohovskyDedickySpor } from '../../components/Articles/cz/akce/HlohovskyDedickySpor'
import { TatarskyVpad1482 } from '../../components/Articles/cz/akce/TatarskyVpad1482'
import { PolskoTureckaValka } from '../../components/Articles/cz/akce/PolskoTureckaValka'
import { RezenskaValka } from '../../components/Articles/cz/akce/RezenskaValka'
import { ValkaOUherskyTrun14901492 } from '../../components/Articles/cz/akce/ValkaOUherskyTrun14901492'
import { PovstaniSzekelyu1492 } from '../../components/Articles/cz/akce/PovstaniSzekelyu1492'
import { PrvniLitevskoMoskevska } from '../../components/Articles/cz/akce/PrvniLitevskoMoskevska'
import { OsmanskoUherskaValka14921495 } from '../../components/Articles/cz/akce/OsmanskoUherskaValka14921495'
import { KutnohorskaBourka } from '../../components/Articles/cz/akce/KutnohorskaBourka'
import { DruhaLitevskoMoskevska } from '../../components/Articles/cz/akce/DruhaLitevskoMoskevska'
import { TatarskeVpady1500 } from '../../components/Articles/cz/akce/TatarskeVpady1500'
import { GlatzskaValka } from '../../components/Articles/cz/akce/GlatzskaValka'
import { BitvaUKleckeho } from '../../components/Articles/cz/akce/BitvaUKleckeho'
import { TretiLitevskoMoskevska } from '../../components/Articles/cz/akce/TretiLitevskoMoskevska'
import { TatarskyVpadLopuszno } from '../../components/Articles/cz/akce/TatarskyVpadLopuszno'
import { BerlichingenovaZasti } from '../../components/Articles/cz/akce/BerlichingenovaZasti'
import { DozsovoPovstani } from '../../components/Articles/cz/akce/DozsovoPovstani'
import { Povstani1517 } from '../../components/Articles/cz/akce/Povstani1517'
import { WurttembergskaValka } from '../../components/Articles/cz/akce/WurttembergskaValka'
import { HildesheimskaKolegiatniZasti } from '../../components/Articles/cz/akce/HildesheimskaKolegiatniZasti'
import { Reiterkrieg } from '../../components/Articles/cz/akce/Reiterkrieg'
import { OsmanskoUherskaValka15211526 } from '../../components/Articles/cz/akce/OsmanskoUherskaValka15211526'
import { RytirskaValka } from '../../components/Articles/cz/akce/RytirskaValka'
import { NemeckaSelskaValka } from '../../components/Articles/cz/akce/NemeckaSelskaValka'
import { SekularizacePruska } from '../../components/Articles/cz/akce/SekularizacePruska'
import { HornickePovstaniJachymov } from '../../components/Articles/cz/akce/HornickePovstaniJachymov'
import { PovstaniSlovenskychHornichMest } from '../../components/Articles/cz/akce/PovstaniSlovenskychHornichMest'
import { OblehaniSionu } from '../../components/Articles/cz/akce/OblehaniSionu'
import { TazeniSestimestiProtiVartemberkum } from '../../components/Articles/cz/akce/TazeniSestimestiProtiVartemberkum'
import { PopravaJanaSmirickeho } from '../../components/Articles/cz/akce/PopravaJanaSmirickeho'
import { SporZPlavnaVladislav } from '../../components/Articles/cz/akce/SporZPlavnaVladislav'
import { PrazskaDefenestrace1483 } from '../../components/Articles/cz/akce/PrazskaDefenestrace1483'
import { OdbojPodebradskychVsKorvin } from '../../components/Articles/cz/akce/OdbojPodebradskychVsKorvin'
import { ValkaSeSliky1501 } from '../../components/Articles/cz/akce/ValkaSeSliky1501'
import { KopidlanskaValka15071517 } from '../../components/Articles/cz/akce/KopidlanskaValka15071517'
import { BitvaUDomazlic1466 } from '../../components/Articles/cz/akce/BitvaUDomazlic1466'
import { DobytiTepelskehoKlastera1467 } from '../../components/Articles/cz/akce/DobytiTepelskehoKlastera1467'
import { BojeUNyrska1467 } from '../../components/Articles/cz/akce/BojeUNyrska1467'
import { DobytiDegenberga1468 } from '../../components/Articles/cz/akce/DobytiDegenberga1468'
import { TazeniPluhaTachovPlzen1468 } from '../../components/Articles/cz/akce/TazeniPluhaTachovPlzen1468'
import { DobytiVimperkaVlachovaBreziBudkova1468 } from '../../components/Articles/cz/akce/DobytiVimperkaVlachovaBreziBudkova1468'
import { BitvaUNyrska1468 } from '../../components/Articles/cz/akce/BitvaUNyrska1468'
import { TrestneTazeniVevoduProtiBocklerum } from '../../components/Articles/cz/akce/TrestneTazeniVevoduProtiBocklerum'
import { TazeniGutstejnaPlavnaCheb1469 } from '../../components/Articles/cz/akce/TazeniGutstejnaPlavnaCheb1469'
import { TazeniPodebradProtiPlavnu1469 } from '../../components/Articles/cz/akce/TazeniPodebradProtiPlavnu1469'
import { ZastiVolfstejnaNaTrebli } from '../../components/Articles/cz/akce/ZastiVolfstejnaNaTrebli'
import { RazieAlbrechtaIvNaLupice1470 } from '../../components/Articles/cz/akce/RazieAlbrechtaIvNaLupice1470'
import { BojOLoket1471 } from '../../components/Articles/cz/akce/BojOLoket1471'
import { UtokKolovratskoVolfstejnskehoKlanuNaChebsko1471 } from '../../components/Articles/cz/akce/UtokKolovratskoVolfstejnskehoKlanuNaChebsko1471'
import { ZastiElsenberguNothaftuProtiVirspekum1471 } from '../../components/Articles/cz/akce/ZastiElsenberguNothaftuProtiVirspekum1471'
import { BojOLenoOstrohSeeberg14741475 } from '../../components/Articles/cz/akce/BojOLenoOstrohSeeberg14741475'
import { DobytiNovehoHerstejna1475 } from '../../components/Articles/cz/akce/DobytiNovehoHerstejna1475'
import { OblehaniLoketSliky } from '../../components/Articles/cz/akce/OblehaniLoketSliky'
import { DobytiPusperka1473 } from '../../components/Articles/cz/akce/DobytiPusperka1473'
import { TazeniWaldekaraNaKlatovsko1473 } from '../../components/Articles/cz/akce/TazeniWaldekaraNaKlatovsko1473'
import { RezenskaZastiZaunrudaGutstejnaSvamberku14751479 } from '../../components/Articles/cz/akce/RezenskaZastiZaunrudaGutstejnaSvamberku14751479'
import { TrestneTazeniChebuProtiHyncikoviPluhovi1477 } from '../../components/Articles/cz/akce/TrestneTazeniChebuProtiHyncikoviPluhovi1477'
import { OblezeniVeseliAHorazdovic14771478 } from '../../components/Articles/cz/akce/OblezeniVeseliAHorazdovic14771478'
import { PorazkaGutstejnaUPlzne1478 } from '../../components/Articles/cz/akce/PorazkaGutstejnaUPlzne1478'
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
    {
      conflictIds: ['litevska-obcanska-valka'],
      Component: LitevskaObcanskaValka,
    },
    { conflictIds: ['husitske-vpady-spis'], Component: HusitskeVpadySpis },
    { conflictIds: ['lipany'], Component: BitvaULipan },
    {
      conflictIds: ['doznivani-husitskych-valek'],
      Component: DoznivaniHusitskychValek,
    },
    {
      conflictIds: ['osmanske-tazeni-do-sedmihradska-1438'],
      Component: OsmanskeTazeniDoSedmihradska1438,
    },
    {
      conflictIds: ['oblehani-smedereva-1439'],
      Component: OblehaniSmedereva1439,
    },
    {
      conflictIds: ['prvni-oblehani-belehradu-1440'],
      Component: PrvniOblehaniBelehradu1440,
    },
    {
      conflictIds: ['boje-o-cesky-trun-po-albrechtovi'],
      Component: BojeOCeskyTrunPoAlbrechtovi,
    },
    { conflictIds: ['vpady-bratriku'], Component: VpadyBratriku },
    {
      conflictIds: ['rakousko-uherska-valka-1446'],
      Component: RakouskoUherskaValka1446,
    },
    { conflictIds: ['tazeni-jiriho-na-prahu'], Component: TazeniJirihoNaPrahu },
    { conflictIds: ['borsengrunska-zasti'], Component: BorsengrunskaZasti },
    {
      conflictIds: ['spor-o-ladislava-pohrobka'],
      Component: SporOLadislavaPohrobka,
    },
    {
      conflictIds: ['prvni-markrabska-valka'],
      Component: PrvniMarkrabskaValka,
    },
    {
      conflictIds: ['jihonemecka-mestska-valka'],
      Component: JihonemeckaMestskaValka,
    },
    {
      conflictIds: ['valka-jiriho-proti-strakonicke-jednote'],
      Component: ValkaJirihoProtiStrakonickeJednote,
    },
    { conflictIds: ['pruske-povstani'], Component: PruskePovstani },
    {
      conflictIds: ['osmanske-dobyti-srbska'],
      Component: OsmanskeDobytiSrbska,
    },
    {
      conflictIds: ['povstani-magnatu-proti-matyasovi-1459'],
      Component: PovstaniMagnatuProtiMatyasovi1459,
    },
    { conflictIds: ['osmanske-dobyti-bosny'], Component: OsmanskeDobytiBosny },
    {
      conflictIds: ['osmansko-uherska-valka-1463-1483'],
      Component: OsmanskoUherskaValka14631483,
    },
    {
      conflictIds: ['stetinska-dedicka-valka'],
      Component: StetinskaDedickaValka,
    },
    {
      conflictIds: ['valka-proti-zelenohorske-jednote'],
      Component: ValkaProtiZelenohorskeJednote,
    },
    { conflictIds: ['knezska-valka'], Component: KnezskaValka },
    {
      conflictIds: ['falcka-valka-fridricha-vitezneho'],
      Component: FalckaValkaFridrichaVitezneho,
    },
    {
      conflictIds: ['spiknuti-vitez-janus-pannonius'],
      Component: SpiknutiVitezJanusPannonius,
    },
    {
      conflictIds: ['polsko-uherska-valka-1474'],
      Component: PolskoUherskaValka1474,
    },
    {
      conflictIds: ['hlohovsky-dedicky-spor'],
      Component: HlohovskyDedickySpor,
    },
    { conflictIds: ['tatarsky-vpad-1482'], Component: TatarskyVpad1482 },
    { conflictIds: ['polsko-turecka-valka'], Component: PolskoTureckaValka },
    { conflictIds: ['rezenska-valka'], Component: RezenskaValka },
    {
      conflictIds: ['valka-o-uhersky-trun-1490-1492'],
      Component: ValkaOUherskyTrun14901492,
    },
    {
      conflictIds: ['povstani-szekelyu-1492'],
      Component: PovstaniSzekelyu1492,
    },
    {
      conflictIds: ['prvni-litevsko-moskevska'],
      Component: PrvniLitevskoMoskevska,
    },
    {
      conflictIds: ['osmansko-uherska-valka-1492-1495'],
      Component: OsmanskoUherskaValka14921495,
    },
    { conflictIds: ['kutnohorska-bourka'], Component: KutnohorskaBourka },
    {
      conflictIds: ['druha-litevsko-moskevska'],
      Component: DruhaLitevskoMoskevska,
    },
    { conflictIds: ['tatarske-vpady-1500'], Component: TatarskeVpady1500 },
    { conflictIds: ['glatzska-valka'], Component: GlatzskaValka },
    { conflictIds: ['bitva-u-kleckeho'], Component: BitvaUKleckeho },
    {
      conflictIds: ['treti-litevsko-moskevska'],
      Component: TretiLitevskoMoskevska,
    },
    {
      conflictIds: ['tatarsky-vpad-lopuszno'],
      Component: TatarskyVpadLopuszno,
    },
    { conflictIds: ['berlichingenova-zasti'], Component: BerlichingenovaZasti },
    { conflictIds: ['dozsovo-povstani'], Component: DozsovoPovstani },
    { conflictIds: ['povstani-1517'], Component: Povstani1517 },
    { conflictIds: ['wurttemberska-valka'], Component: WurttembergskaValka },
    {
      conflictIds: ['hildesheimska-kolegiatni-zasti'],
      Component: HildesheimskaKolegiatniZasti,
    },
    { conflictIds: ['reiterkrieg'], Component: Reiterkrieg },
    {
      conflictIds: ['osmansko-uherska-valka-1521-1526'],
      Component: OsmanskoUherskaValka15211526,
    },
    { conflictIds: ['rytirska-valka'], Component: RytirskaValka },
    { conflictIds: ['nemecka-selska-valka'], Component: NemeckaSelskaValka },
    { conflictIds: ['sekularizace-pruska'], Component: SekularizacePruska },
    {
      conflictIds: ['hornicke-povstani-jachymov'],
      Component: HornickePovstaniJachymov,
    },
    {
      conflictIds: ['povstani-slovenskych-hornich-mest'],
      Component: PovstaniSlovenskychHornichMest,
    },
    { conflictIds: ['oblehani-sionu'], Component: OblehaniSionu },
    {
      conflictIds: ['tazeni-sestimesti-proti-vartemberkum'],
      Component: TazeniSestimestiProtiVartemberkum,
    },
    {
      conflictIds: ['poprava-jana-smirickeho'],
      Component: PopravaJanaSmirickeho,
    },
    {
      conflictIds: ['spor-z-plavna-vladislav'],
      Component: SporZPlavnaVladislav,
    },
    {
      conflictIds: ['prazska-defenestrace-1483'],
      Component: PrazskaDefenestrace1483,
    },
    {
      conflictIds: ['odboj-podebradskych-vs-korvin'],
      Component: OdbojPodebradskychVsKorvin,
    },
    { conflictIds: ['valka-se-sliky-1501'], Component: ValkaSeSliky1501 },
    {
      conflictIds: ['kopidlanska-valka-1507-1517'],
      Component: KopidlanskaValka15071517,
    },
    { conflictIds: ['bitva-u-domazlic-1466'], Component: BitvaUDomazlic1466 },
    {
      conflictIds: ['dobyti-tepelskeho-klastera-1467'],
      Component: DobytiTepelskehoKlastera1467,
    },
    { conflictIds: ['boje-u-nyrska-1467'], Component: BojeUNyrska1467 },
    {
      conflictIds: ['dobyti-degenberga-1468'],
      Component: DobytiDegenberga1468,
    },
    {
      conflictIds: ['tazeni-pluha-tachov-plzen-1468'],
      Component: TazeniPluhaTachovPlzen1468,
    },
    {
      conflictIds: ['dobyti-vimperka-vlachova-brezi-budkova-1468'],
      Component: DobytiVimperkaVlachovaBreziBudkova1468,
    },
    { conflictIds: ['bitva-u-nyrska-1468'], Component: BitvaUNyrska1468 },
    {
      conflictIds: ['trestne-tazeni-vevodu-proti-bocklerum'],
      Component: TrestneTazeniVevoduProtiBocklerum,
    },
    {
      conflictIds: ['tazeni-gutstejna-plavna-cheb-1469'],
      Component: TazeniGutstejnaPlavnaCheb1469,
    },
    {
      conflictIds: ['tazeni-podebrad-proti-plavnu-1469'],
      Component: TazeniPodebradProtiPlavnu1469,
    },
    {
      conflictIds: ['zasti-volfstejna-na-trebli'],
      Component: ZastiVolfstejnaNaTrebli,
    },
    {
      conflictIds: ['razie-albrechta-iv-na-lupice-1470'],
      Component: RazieAlbrechtaIvNaLupice1470,
    },
    { conflictIds: ['boj-o-loket-1471'], Component: BojOLoket1471 },
    {
      conflictIds: ['utok-kolovratsko-volfstejnskeho-klanu-na-chebsko-1471'],
      Component: UtokKolovratskoVolfstejnskehoKlanuNaChebsko1471,
    },
    {
      conflictIds: ['zasti-elsenbergu-nothaftu-proti-virspekum-1471'],
      Component: ZastiElsenberguNothaftuProtiVirspekum1471,
    },
    {
      conflictIds: ['boj-o-leno-ostroh-seeberg-1474-1475'],
      Component: BojOLenoOstrohSeeberg14741475,
    },
    {
      conflictIds: ['dobyti-noveho-herstejna-1475'],
      Component: DobytiNovehoHerstejna1475,
    },
    { conflictIds: ['oblehani-loket-sliky'], Component: OblehaniLoketSliky },
    { conflictIds: ['dobyti-pusperka-1473'], Component: DobytiPusperka1473 },
    {
      conflictIds: ['tazeni-waldekara-na-klatovsko-1473'],
      Component: TazeniWaldekaraNaKlatovsko1473,
    },
    {
      conflictIds: ['rezenska-zasti-zaunruda-gutstejna-svamberku-1475-1479'],
      Component: RezenskaZastiZaunrudaGutstejnaSvamberku14751479,
    },
    {
      conflictIds: ['trestne-tazeni-chebu-proti-hyncikovi-pluhovi-1477'],
      Component: TrestneTazeniChebuProtiHyncikoviPluhovi1477,
    },
    {
      conflictIds: ['oblezeni-veseli-a-horazdovic-1477-1478'],
      Component: OblezeniVeseliAHorazdovic14771478,
    },
    {
      conflictIds: ['porazka-gutstejna-u-plzne-1478'],
      Component: PorazkaGutstejnaUPlzne1478,
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

export type Region =
  | 'cechy'
  | 'hrr'
  | 'rakousy'
  | 'uhry'
  | 'polsko-litva'
  | 'osmani'

export const REGION_LABELS: Record<Region, string> = {
  cechy: 'České země',
  hrr: 'Svatá říše římská',
  rakousy: 'Rakousy / Habsburkové',
  uhry: 'Uhry',
  'polsko-litva': 'Polsko-Litva',
  osmani: 'Osmanské tažení',
}

export const REGION_COLORS: Record<Region, string> = {
  cechy: '#8b1b1b',
  hrr: '#2c5282',
  rakousy: '#b8860b',
  uhry: '#0f7a3b',
  'polsko-litva': '#5e3784',
  osmani: '#7c4a00',
}

export type Conflict = {
  id: string
  name: string
  start: number
  end: number
  regions: Region[]
  detailHref?: string
}

export const TIMELINE_START = 1434
export const TIMELINE_END = 1526

export const CONFLICTS: Conflict[] = [
  {
    id: 'litevska-obcanska-valka',
    name: 'Litevská občanská válka (Svidrigaila vs. Zikmund Kejstutovič)',
    start: 1434,
    end: 1438,
    regions: ['polsko-litva'],
  },
  {
    id: 'husitske-vpady-spis',
    name: 'Husitské vpády na Spiš a Slovensko',
    start: 1434,
    end: 1444,
    regions: ['uhry'],
  },
  {
    id: 'lipany',
    name: 'Bitva u Lipan',
    start: 1434,
    end: 1434,
    regions: ['cechy'],
  },
  {
    id: 'doznivani-husitskych-valek',
    name: 'Doznívání husitských válek',
    start: 1434,
    end: 1437,
    regions: ['cechy'],
  },
  {
    id: 'osmanske-tazeni-do-sedmihradska-1438',
    name: 'Osmanské tažení do Sedmihradska',
    start: 1438,
    end: 1438,
    regions: ['osmani'],
  },
  {
    id: 'oblehani-smedereva-1439',
    name: 'Osmanské obléhání Smedereva',
    start: 1439,
    end: 1439,
    regions: ['osmani'],
  },
  {
    id: 'prvni-oblehani-belehradu-1440',
    name: 'První osmanské obléhání Bělehradu',
    start: 1440,
    end: 1440,
    regions: ['osmani'],
  },
  {
    id: 'boje-o-uhersky-trun-1440',
    name: 'Boje o uherský trůn (Vladislav vs. Habsburkové)',
    start: 1440,
    end: 1442,
    regions: ['uhry', 'polsko-litva'],
    detailHref: '/prehled-vojenskych-akci/boje-o-uhersky-trun-1440',
  },
  {
    id: 'jiskrova-vojska-na-slovensku',
    name: 'Působení Jana Jiskry z Brandýsa v Horních Uhrách',
    start: 1440,
    end: 1462,
    regions: ['uhry'],
    detailHref: '/prehled-vojenskych-akci/jiskrova-vojska-na-slovensku',
  },
  {
    id: 'boje-o-cesky-trun-po-albrechtovi',
    name: 'Boje o český trůn po Albrechtovi II.',
    start: 1440,
    end: 1444,
    regions: ['cechy'],
  },
  {
    id: 'hunyadiho-dlouhe-tazeni',
    name: 'Dlouhé tažení Jánose Hunyadiho na Balkán',
    start: 1443,
    end: 1444,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/hunyadiho-dlouhe-tazeni',
  },
  {
    id: 'bitva-u-varny',
    name: 'Bitva u Varny',
    start: 1444,
    end: 1444,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/bitva-u-varny',
  },
  {
    id: 'soester-fehde',
    name: 'Soesterská záští',
    start: 1444,
    end: 1449,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/soesterska-zasti',
  },
  {
    id: 'vpady-bratriku',
    name: 'Vpády bratříků na Moravu a do Slezska',
    start: 1445,
    end: 1467,
    regions: ['cechy'],
  },
  {
    id: 'sasky-bratrovrazedny-valka',
    name: 'Saská bratrovražedná válka',
    start: 1446,
    end: 1451,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/saska-bratrovrazedna-valka',
  },
  {
    id: 'rakousko-uherska-valka-1446',
    name: 'Tažení Hunyadiho proti Fridrichu III.',
    start: 1446,
    end: 1446,
    regions: ['rakousy', 'uhry'],
  },
  {
    id: 'tazeni-jiriho-na-prahu',
    name: 'Tažení Jiřího z Poděbrad na Prahu',
    start: 1448,
    end: 1448,
    regions: ['cechy'],
  },
  {
    id: 'borsengrunska-zasti',
    name: 'Boršengrýnská záští',
    start: 1448,
    end: 1453,
    regions: ['hrr'],
  },
  {
    id: 'druha-bitva-na-kosove-poli',
    name: 'Druhá bitva na Kosově poli',
    start: 1448,
    end: 1448,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/druha-bitva-na-kosove-poli',
  },
  {
    id: 'prvni-markrabska-valka',
    name: 'První markraběcí válka',
    start: 1449,
    end: 1450,
    regions: ['hrr'],
  },
  {
    id: 'jihonemecka-mestska-valka',
    name: 'Jihoněmecká městská válka',
    start: 1449,
    end: 1450,
    regions: ['hrr'],
  },
  {
    id: 'valka-jiriho-proti-strakonicke-jednote',
    name: 'Válka Jiřího z Poděbrad proti Strakonické jednotě',
    start: 1449,
    end: 1450,
    regions: ['cechy'],
  },
  {
    id: 'spor-o-ladislava-pohrobka',
    name: 'Spor o korunu sv. Štěpána a Ladislava Pohrobka',
    start: 1452,
    end: 1453,
    regions: ['cechy', 'rakousy', 'uhry'],
  },
  {
    id: 'pruske-povstani',
    name: 'Pruské povstání proti řádu',
    start: 1454,
    end: 1454,
    regions: ['polsko-litva'],
  },
  {
    id: 'trinactileta-valka',
    name: 'Třináctiletá válka',
    start: 1454,
    end: 1466,
    regions: ['polsko-litva'],
    detailHref: '/prehled-vojenskych-akci/trinactileta-valka',
  },
  {
    id: 'serotinska-valka',
    name: 'Šerotínská (Šternberská) válka',
    start: 1454,
    end: 1467,
    regions: ['cechy'],
  },
  {
    id: 'oblehani-belehradu-1456',
    name: 'Obléhání Bělehradu',
    start: 1456,
    end: 1456,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/oblehani-belehradu-1456',
  },
  {
    id: 'rakousky-bratrovrazedny-valka',
    name: 'Rakouská bratrovražedná válka',
    start: 1458,
    end: 1463,
    regions: ['rakousy'],
    detailHref: '/prehled-vojenskych-akci/rakousky-bratrovrazedny-valka',
  },
  {
    id: 'osmanske-dobyti-srbska',
    name: 'Osmanské dobytí Srbska',
    start: 1458,
    end: 1459,
    regions: ['osmani'],
  },
  {
    id: 'bavorska-valka',
    name: 'Bavorská válka (knížecí válka)',
    start: 1459,
    end: 1463,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/bavorska-valka',
  },
  {
    id: 'povstani-magnatu-proti-matyasovi-1459',
    name: 'Povstání magnátů a volba Fridricha III. uherským králem',
    start: 1459,
    end: 1463,
    regions: ['uhry', 'rakousy'],
  },
  {
    id: 'mohucska-zasti',
    name: 'Mohučská kolegiátní záští',
    start: 1461,
    end: 1463,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/mohucska-zasti',
  },
  {
    id: 'badensko-falcka-valka',
    name: 'Badensko-falcká válka',
    start: 1461,
    end: 1462,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/badensko-falcka-valka',
  },
  {
    id: 'osmanske-dobyti-bosny',
    name: 'Osmanské dobytí Bosny',
    start: 1463,
    end: 1463,
    regions: ['osmani'],
  },
  {
    id: 'osmansko-uherska-valka-1463-1483',
    name: 'Osmansko-uherská válka Matyáše Korvína',
    start: 1463,
    end: 1483,
    regions: ['osmani', 'uhry'],
  },
  {
    id: 'stetinska-dedicka-valka',
    name: 'Štětínská dědická válka',
    start: 1464,
    end: 1472,
    regions: ['hrr'],
  },
  {
    id: 'valka-proti-zelenohorske-jednote',
    name: 'Válka proti Zelenohorské jednotě',
    start: 1465,
    end: 1471,
    regions: ['cechy'],
  },
  {
    id: 'knezska-valka',
    name: 'Kněžská válka (Pfaffenkrieg) o varmijské biskupství',
    start: 1467,
    end: 1479,
    regions: ['polsko-litva'],
  },
  {
    id: 'cesko-uherska-valka',
    name: 'Česko-uherská válka',
    start: 1468,
    end: 1478,
    regions: ['cechy', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#cesko-uherska',
  },
  {
    id: 'waldshuterkrieg',
    name: 'Waldshuterkrieg',
    start: 1468,
    end: 1468,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/waldshuterkrieg',
  },
  {
    id: 'falcka-valka-fridricha-vitezneho',
    name: 'Falcká válka Fridricha Vítězného',
    start: 1469,
    end: 1474,
    regions: ['hrr'],
  },
  {
    id: 'spiknuti-vitez-janus-pannonius',
    name: 'Spiknutí Jana Vitéze a Januse Pannonia proti Matyášovi',
    start: 1471,
    end: 1472,
    regions: ['uhry'],
  },
  {
    id: 'polsko-uherska-valka-1474',
    name: 'Vpád Kazimíra Jagellonského do Uher',
    start: 1474,
    end: 1474,
    regions: ['polsko-litva', 'uhry'],
  },
  {
    id: 'hlohovsky-dedicky-spor',
    name: 'Hlohovský dědický spor',
    start: 1476,
    end: 1482,
    regions: ['hrr'],
  },
  {
    id: 'rakousko-uherska-valka-matyase',
    name: 'Rakousko-uherská válka Matyáše Korvína',
    start: 1477,
    end: 1488,
    regions: ['rakousy', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#habsburkove',
  },
  {
    id: 'bitva-na-chlebovem-poli',
    name: 'Bitva na Chlebovém poli (Câmpul Pâinii)',
    start: 1479,
    end: 1479,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#chlebove-pole',
  },
  {
    id: 'tatarsky-vpad-1482',
    name: 'Vpád krymských Tatarů Mengli Gireje na Kyjevsko',
    start: 1482,
    end: 1482,
    regions: ['polsko-litva'],
  },
  {
    id: 'polsko-turecka-valka',
    name: 'Polsko-turecká válka o černomořské porty',
    start: 1485,
    end: 1503,
    regions: ['polsko-litva'],
  },
  {
    id: 'rezenska-valka',
    name: 'Řezenská válka',
    start: 1486,
    end: 1492,
    regions: ['hrr'],
  },
  {
    id: 'valka-o-uhersky-trun-1490-1492',
    name: 'Válka o uherský trůn po smrti Matyáše Korvína',
    start: 1490,
    end: 1492,
    regions: ['uhry'],
  },
  {
    id: 'cerne-vojsko-vzpoura',
    name: 'Vzpoura a rozprášení Černého vojska',
    start: 1492,
    end: 1492,
    regions: ['uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#vzpoura',
  },
  {
    id: 'povstani-szekelyu-1492',
    name: 'Povstání Sikulů v Sedmihradsku',
    start: 1492,
    end: 1492,
    regions: ['uhry'],
  },
  {
    id: 'prvni-litevsko-moskevska',
    name: 'První litevsko-moskevská válka',
    start: 1492,
    end: 1494,
    regions: ['polsko-litva'],
  },
  {
    id: 'osmansko-uherska-valka-1492-1495',
    name: 'Osmanské nájezdy do Uher a Chorvatska',
    start: 1492,
    end: 1495,
    regions: ['osmani', 'uhry'],
  },
  {
    id: 'bitva-na-krbavskem-poli',
    name: 'Bitva na Krbavském poli',
    start: 1493,
    end: 1493,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/bitva-na-krbavskem-poli',
  },
  {
    id: 'kutnohorska-bourka',
    name: 'Kutnohorská hornická bouře',
    start: 1496,
    end: 1496,
    regions: ['cechy'],
  },
  {
    id: 'bukovinska-vyprava',
    name: 'Bukovinská (moldavská) výprava Jana Olbrachta',
    start: 1497,
    end: 1497,
    regions: ['polsko-litva'],
    detailHref: '/prehled-vojenskych-akci/bukovinska-vyprava',
  },
  {
    id: 'svabska-valka',
    name: 'Švábská válka',
    start: 1499,
    end: 1499,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/svabska-valka',
  },
  {
    id: 'druha-litevsko-moskevska',
    name: 'Druhá litevsko-moskevská válka (o Severii)',
    start: 1500,
    end: 1503,
    regions: ['polsko-litva'],
  },
  {
    id: 'tatarske-vpady-1500',
    name: 'Vpády krymských Tatarů na Polsko a Litvu',
    start: 1500,
    end: 1502,
    regions: ['polsko-litva'],
  },
  {
    id: 'glatzska-valka',
    name: 'Kladská válka (spor o Kladsko)',
    start: 1501,
    end: 1501,
    regions: ['cechy'],
  },
  {
    id: 'landshutska-dedicka-valka',
    name: 'Landshutská dědická válka',
    start: 1503,
    end: 1505,
    regions: ['hrr'],
    detailHref: '/prehled-vojenskych-akci/landshutska-dedicka-valka',
  },
  {
    id: 'bitva-u-kleckeho',
    name: 'Tatarský vpád a bitva u Kleckého',
    start: 1506,
    end: 1506,
    regions: ['polsko-litva'],
  },
  {
    id: 'treti-litevsko-moskevska',
    name: 'Třetí litevsko-moskevská válka a vzpoura Michaila Glinského',
    start: 1507,
    end: 1508,
    regions: ['polsko-litva'],
  },
  {
    id: 'ctvrta-litevsko-moskevska',
    name: 'Čtvrtá litevsko-moskevská válka (bitva u Orši)',
    start: 1512,
    end: 1522,
    regions: ['polsko-litva'],
    detailHref: '/prehled-vojenskych-akci/ctvrta-litevsko-moskevska',
  },
  {
    id: 'tatarsky-vpad-lopuszno',
    name: 'Tatarský vpád na Volyň a bitva u Lopuszna',
    start: 1512,
    end: 1512,
    regions: ['polsko-litva'],
  },
  {
    id: 'berlichingenova-zasti',
    name: 'Záští Götze z Berlichingenu',
    start: 1512,
    end: 1514,
    regions: ['hrr'],
  },
  {
    id: 'dozsovo-povstani',
    name: 'Selské povstání Györgye Dózsi',
    start: 1514,
    end: 1514,
    regions: ['uhry'],
  },
  {
    id: 'povstani-1517',
    name: 'Povstání nižší šlechty proti Zikmundu z Lobkovic',
    start: 1517,
    end: 1517,
    regions: ['cechy'],
  },
  {
    id: 'wurttemberska-valka',
    name: 'Württemberská válka',
    start: 1519,
    end: 1519,
    regions: ['hrr'],
  },
  {
    id: 'hildesheimska-kolegiatni-zasti',
    name: 'Hildesheimská kolegiátní záští',
    start: 1519,
    end: 1523,
    regions: ['hrr'],
  },
  {
    id: 'reiterkrieg',
    name: 'Poslední polsko-řádová válka (Reiterkrieg)',
    start: 1519,
    end: 1521,
    regions: ['polsko-litva'],
  },
  {
    id: 'osmansko-uherska-valka-1521-1526',
    name: 'Osmansko-uherská válka Sulejmana I.',
    start: 1521,
    end: 1526,
    regions: ['osmani', 'uhry'],
  },
  {
    id: 'rytirska-valka',
    name: 'Rytířská válka (Sickingenovo povstání)',
    start: 1522,
    end: 1523,
    regions: ['hrr'],
  },
  {
    id: 'nemecka-selska-valka',
    name: 'Německá selská válka',
    start: 1524,
    end: 1526,
    regions: ['hrr'],
  },
  {
    id: 'sekularizace-pruska',
    name: 'Krakovská smlouva — sekularizace řádového státu',
    start: 1525,
    end: 1525,
    regions: ['polsko-litva'],
  },
  {
    id: 'hornicke-povstani-jachymov',
    name: 'Hornické povstání v Jáchymově',
    start: 1525,
    end: 1525,
    regions: ['cechy'],
  },
  {
    id: 'povstani-slovenskych-hornich-mest',
    name: 'Povstání slovenských horníků (Banská Bystrica)',
    start: 1525,
    end: 1526,
    regions: ['uhry'],
  },
  {
    id: 'bitva-u-mohace',
    name: 'Bitva u Moháče',
    start: 1526,
    end: 1526,
    regions: ['osmani', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/bitva-u-mohace',
  },
  {
    id: 'oblehani-sionu',
    name: 'Obležení hradu Sion a poslední odboj Jana Roháče z Dubé',
    start: 1437,
    end: 1437,
    regions: ['cechy'],
  },
  {
    id: 'tazeni-sestimesti-proti-vartemberkum',
    name: 'Tažení Lužického šestiměstí proti Vartemberkům',
    start: 1444,
    end: 1444,
    regions: ['cechy'],
  },
  {
    id: 'poprava-jana-smirickeho',
    name: 'Pád Jana Smiřického a boj o jeho dědictví',
    start: 1453,
    end: 1454,
    regions: ['cechy'],
  },
  {
    id: 'kaplirovo-zasti-pasov',
    name: 'Záští Mikuláše Kaplíře z Vimperka s pasovským biskupem',
    start: 1458,
    end: 1460,
    regions: ['cechy', 'hrr'],
    detailHref: '/prehled-vojenskych-akci/kaplirovo-zasti-pasov',
  },
  {
    id: 'spor-z-plavna-vladislav',
    name: 'Spory pánů z Plavna o Plavno, Bečov a Kynžvart',
    start: 1466,
    end: 1482,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'bitva-u-domazlic-1466',
    name: 'Bitva u Domažlic – odražení bavorsko-falckých křižáků',
    start: 1466,
    end: 1466,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'dobyti-tepelskeho-klastera-1467',
    name: 'Dobytí a vyloupení tepelského kláštera katolickými pány',
    start: 1467,
    end: 1467,
    regions: ['cechy'],
  },
  {
    id: 'boje-u-nyrska-1467',
    name: 'Boje u Nýrska s bocklerskými křižáky',
    start: 1467,
    end: 1467,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'bocklerska-valka',
    name: 'Bocklerská válka (rytířský spolek Jednorožce vs. Albrecht IV.)',
    start: 1467,
    end: 1472,
    regions: ['hrr', 'cechy'],
    detailHref: '/prehled-vojenskych-akci/bocklerska-valka',
  },
  {
    id: 'dobyti-degenberga-1468',
    name: 'Dobytí hradu Degenberga a konfiskace furthského Winkelu',
    start: 1468,
    end: 1468,
    regions: ['hrr', 'cechy'],
  },
  {
    id: 'tazeni-pluha-tachov-plzen-1468',
    name: 'Tažení Šebestiána Pluha s norimberskými křižáky k Tachovu a Plzni',
    start: 1468,
    end: 1468,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'dobyti-vimperka-vlachova-brezi-budkova-1468',
    name: 'Dobytí Vimperka, Vlachova Březí a Budkova pasovskými křižáky',
    start: 1468,
    end: 1468,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'bitva-u-nyrska-1468',
    name: 'Bitva u Nýrska – porážka křižáků a smrt Albrechta Nothafta',
    start: 1468,
    end: 1468,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'trestne-tazeni-vevodu-proti-bocklerum',
    name: 'Trestné tažení bavorských vévodů proti hradům bocklerů',
    start: 1468,
    end: 1469,
    regions: ['hrr', 'cechy'],
  },
  {
    id: 'tazeni-gutstejna-plavna-cheb-1469',
    name: 'Tažení Buriana z Gutštejna a Jindřicha z Plavna proti Chebu a Waldsassen',
    start: 1469,
    end: 1469,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'tazeni-podebrad-proti-plavnu-1469',
    name: 'Tažení Jiřího z Poděbrad proti hradům Jindřicha z Plavna',
    start: 1469,
    end: 1469,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'zasti-volfstejna-na-trebli',
    name: 'Záští Viléma z Volfštejna na Třebli proti Chebu',
    start: 1469,
    end: 1471,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'razie-albrechta-iv-na-lupice-1470',
    name: 'Razie Albrechta IV. na lupiče Petra Gewolfa z Degenberga a Hanse Nussbergera',
    start: 1470,
    end: 1470,
    regions: ['hrr'],
  },
  {
    id: 'boj-o-loket-1471',
    name: 'Boj o Loket a záští na bayreuthské a ašské hranici',
    start: 1471,
    end: 1471,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'utok-kolovratsko-volfstejnskeho-klanu-na-chebsko-1471',
    name: 'Útok kolovratsko-volfštejnského klanu na Chebsko a chebská odveta',
    start: 1471,
    end: 1471,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'zasti-elsenbergu-nothaftu-proti-virspekum-1471',
    name: 'Záští Elsenbergů, Nothaftů, Wallenfelsů a Wildensteinerů proti Viršperkům a Cedvicům',
    start: 1471,
    end: 1471,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'dobyti-pajreka-1471-1472',
    name: 'Dobytí hradu Pajreka a zhroucení bocklerského odboje',
    start: 1471,
    end: 1472,
    regions: ['cechy', 'hrr'],
    detailHref: '/prehled-vojenskych-akci/dobyti-pajreka-1471-1472',
  },
  {
    id: 'oblehani-loket-sliky',
    name: 'Vpád Šliků do města Lokte a vypálení města',
    start: 1473,
    end: 1473,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'dobyti-pusperka-1473',
    name: 'Dobytí hradu Pušperka klatovským vojskem',
    start: 1473,
    end: 1473,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'tazeni-waldekara-na-klatovsko-1473',
    name: 'Tažení Wolfganga Waldekara na Klatovsko',
    start: 1473,
    end: 1473,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'boj-o-leno-ostroh-seeberg-1474-1475',
    name: 'Boj o léno Ostroh/Seeberg na Chebsku',
    start: 1474,
    end: 1475,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'dobyti-noveho-herstejna-1475',
    name: 'Dobytí Nového Herštejna a smíření Hanse Degenberga s Albrechtem IV.',
    start: 1475,
    end: 1475,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'zasti-bronska-kocovskeho-s-wittelsbachy-1475-1476',
    name: 'Záští Břeňka z Ronšperka a Racka Kocovského s Wittelsbachy a pasovským biskupem',
    start: 1475,
    end: 1476,
    regions: ['cechy', 'hrr'],
    detailHref: '/prehled-vojenskych-akci/zasti-bronska-kocovskeho-s-wittelsbachy-1475-1476',
  },
  {
    id: 'rezenska-zasti-zaunruda-gutstejna-svamberku-1475-1479',
    name: 'Řezenská záští Žeberka, Zaunruda, Gutštejna a Švamberků',
    start: 1475,
    end: 1479,
    regions: ['cechy'],
  },
  {
    id: 'trestne-tazeni-chebu-proti-hyncikovi-pluhovi-1477',
    name: 'Trestné tažení Chebu proti Hynčíkovi Pluhovi',
    start: 1477,
    end: 1477,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'oblezeni-veseli-a-horazdovic-1477-1478',
    name: 'Záští Racka Kocovského a obležení Veselí a Horažďovic',
    start: 1477,
    end: 1478,
    regions: ['cechy'],
  },
  {
    id: 'porazka-gutstejna-u-plzne-1478',
    name: 'Porážka Buriana z Gutštejna u Plzně a tažení Jana Planknára proti Chebsku',
    start: 1478,
    end: 1478,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'prazska-defenestrace-1483',
    name: 'Druhá pražská defenestrace a převrat utrakvistů',
    start: 1483,
    end: 1485,
    regions: ['cechy'],
  },
  {
    id: 'odboj-podebradskych-vs-korvin',
    name: 'Odboj Hynka a Jindřicha z Poděbrad proti Korvínovi ve Slezsku',
    start: 1488,
    end: 1490,
    regions: ['polsko-litva'],
  },
  {
    id: 'valka-se-sliky-1501',
    name: 'Válka českých stavů se Šliky o loketskou enklávu',
    start: 1501,
    end: 1504,
    regions: ['cechy', 'hrr'],
  },
  {
    id: 'kopidlanska-valka-1507-1517',
    name: 'Soukromá válka Jiřího Kopidlanského proti Praze',
    start: 1507,
    end: 1517,
    regions: ['cechy'],
  },
  {
    id: 'matyasovo-tazeni-bosna',
    name: 'Matyášovo tažení do Bosny a dobytí Jajce',
    start: 1463,
    end: 1463,
    regions: ['uhry', 'osmani'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#bosna',
  },
  {
    id: 'bitva-u-baia',
    name: 'Moldavské tažení a bitva u Baia',
    start: 1467,
    end: 1467,
    regions: ['uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#moldava',
  },
  {
    id: 'bitva-na-rece-valove',
    name: 'Bitva na řece Valové',
    start: 1470,
    end: 1470,
    regions: ['cechy', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#valova',
  },
  {
    id: 'vpad-kazimira-1471',
    name: 'Vpád Kazimíra Jagellonského do Uher',
    start: 1471,
    end: 1471,
    regions: ['polsko-litva', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#kazimir',
  },
  {
    id: 'bitva-u-thomaswaldu',
    name: 'Bitva u Thomaswaldu (Slezsko)',
    start: 1488,
    end: 1488,
    regions: ['cechy', 'uhry'],
    detailHref: '/prehled-vojenskych-akci/cerne-vojsko#thomaswald',
  },
]

export type CzechMercenaryEntry = {
  confirmed: true
  sources: string[]
}

// Přítomnost klíče = potvrzená účast českých žoldnéřů.
// Absence = zatím nepotvrzeno (neznamená vyloučení).
// Hlavní zdroj: Uwe Tresp, Söldner aus Böhmen (BSB digi20).
export const CZECH_MERCENARIES: Record<string, CzechMercenaryEntry> = {
  'soester-fehde': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00120.html',
    ],
  },
  'sasky-bratrovrazedny-valka': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00140.html',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00150.html',
    ],
  },
  'jiskrova-vojska-na-slovensku': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/Jan_Jiskra_z_Brand%C3%BDsa',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00100.html',
    ],
  },
  'trinactileta-valka': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/Old%C5%99ich_%C4%8Cervenka_z_Lede%C4%8D',
      'https://cs.wikipedia.org/wiki/Bitva_u_%C5%9Awiecina',
      'https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia',
    ],
  },
  'boje-o-uhersky-trun-1440': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/Jan_Jiskra_z_Brand%C3%BDsa',
      'https://en.wikipedia.org/wiki/Hungarian_Civil_War_(1440%E2%80%931442)',
    ],
  },
  'bitva-u-varny': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/Jan_Jiskra_z_Brand%C3%BDsa',
      'https://en.wikipedia.org/wiki/Battle_of_Varna',
    ],
  },
  'rakousky-bratrovrazedny-valka': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html',
    ],
  },
  'bavorska-valka': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html',
    ],
  },
  'mohucska-zasti': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html',
    ],
  },
  'badensko-falcka-valka': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html',
    ],
  },
  'kaplirovo-zasti-pasov': {
    confirmed: true,
    sources: [
      'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html',
    ],
  },
  'cesko-uherska-valka': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00200.html',
    ],
  },
  'bocklerska-valka': {
    confirmed: true,
    sources: [
      'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
      'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
    ],
  },
  'rakousko-uherska-valka-matyase': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00220.html',
      'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
    ],
  },
  'cerne-vojsko-vzpoura': {
    confirmed: true,
    sources: [
      'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00220.html',
    ],
  },
  'svabska-valka': {
    confirmed: true,
    sources: [
      'https://de.wikipedia.org/wiki/Schwabenkrieg',
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00280.html',
    ],
  },
  'landshutska-dedicka-valka': {
    confirmed: true,
    sources: [
      'https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00280.html',
      'https://de.wikipedia.org/wiki/Schlacht_bei_Wenzenbach',
    ],
  },
  'bitva-u-mohace': {
    confirmed: true,
    sources: [
      'https://en.wikipedia.org/wiki/Battle_of_Moh%C3%A1cs',
      'https://cs.wikipedia.org/wiki/Bitva_u_Moh%C3%A1%C4%8De',
    ],
  },
  'ctvrta-litevsko-moskevska': {
    confirmed: true,
    sources: [
      'https://en.wikipedia.org/wiki/Battle_of_Orsha',
      'https://en.wikipedia.org/wiki/Lithuanian%E2%80%93Muscovite_War_(1512%E2%80%931522)',
    ],
  },
  'dobyti-pajreka-1471-1472': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/Pajrek',
      'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
    ],
  },
  'zasti-bronska-kocovskeho-s-wittelsbachy-1475-1476': {
    confirmed: true,
    sources: [
      'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
    ],
  },
  'matyasovo-tazeni-bosna': {
    confirmed: true,
    sources: [
      'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
      'https://en.wikipedia.org/wiki/Bosnian_Royal_War',
    ],
  },
  'bitva-u-baia': {
    confirmed: true,
    sources: [
      'https://en.wikipedia.org/wiki/Battle_of_Baia',
      'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
    ],
  },
  'bitva-na-rece-valove': {
    confirmed: true,
    sources: [
      'https://cs.wikipedia.org/wiki/Bitva_na_%C5%99%C3%AD%C4%8Dce_Valov%C3%A9',
    ],
  },
  'bitva-u-thomaswaldu': {
    confirmed: true,
    sources: ['https://en.wikipedia.org/wiki/Black_Army_of_Hungary'],
  },
}

export const SOURCES: Record<string, string[]> = {
  'litevska-obcanska-valka': [
    'https://pl.wikipedia.org/wiki/Wojna_domowa_na_Litwie_(1432%E2%80%931438)',
    'https://de.wikipedia.org/wiki/Litauischer_B%C3%BCrgerkrieg_(1431%E2%80%931435)',
    'https://en.wikipedia.org/wiki/Lithuanian_Civil_War_(1432%E2%80%931438)',
  ],
  'husitske-vpady-spis': [
    'https://cs.wikipedia.org/wiki/Bratrici',
    'https://pl.wikipedia.org/wiki/Bratrzycy',
  ],
  lipany: [
    'https://cs.wikipedia.org/wiki/Bitva_u_Lipan',
    'https://en.wikipedia.org/wiki/Battle_of_Lipany',
    'https://de.wikipedia.org/wiki/Schlacht_bei_Lipan',
  ],
  'doznivani-husitskych-valek': [
    'https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky',
    'https://cs.wikipedia.org/wiki/Jihlavsk%C3%A1_kompakt%C3%A1ta',
  ],
  'osmanske-tazeni-do-sedmihradska-1438': [
    'https://hu.wikipedia.org/wiki/1438-as_t%C3%B6r%C3%B6k_betor%C3%A9s_Erd%C3%A9lybe',
    'https://en.wikipedia.org/wiki/Ottoman_raid_on_Transylvania_(1438)',
  ],
  'oblehani-smedereva-1439': [
    'https://en.wikipedia.org/wiki/Siege_of_Smederevo_(1439)',
    'https://de.wikipedia.org/wiki/Belagerung_von_Smederevo_(1439)',
  ],
  'prvni-oblehani-belehradu-1440': [
    'https://en.wikipedia.org/wiki/Siege_of_Belgrade_(1440)',
    'https://hu.wikipedia.org/wiki/N%C3%A1ndorfeh%C3%A9rv%C3%A1r_ostroma_(1440)',
  ],
  'boje-o-uhersky-trun-1440': [
    'https://hu.wikipedia.org/wiki/I._Ul%C3%A1szl%C3%B3_magyar_kir%C3%A1ly',
    'https://en.wikipedia.org/wiki/Hungarian_Civil_War_(1440%E2%80%931442)',
    'https://de.wikipedia.org/wiki/Wladislaw_III._(Polen)',
  ],
  'jiskrova-vojska-na-slovensku': [
    'https://cs.wikipedia.org/wiki/Jan_Jiskra_z_Brand%C3%BDsa',
    'https://hu.wikipedia.org/wiki/Giskra_J%C3%A1nos',
    'https://de.wikipedia.org/wiki/Johann_Giskra_von_Brandeis',
  ],
  'boje-o-cesky-trun-po-albrechtovi': [
    'https://cs.wikipedia.org/wiki/Ladislav_Pohrobek',
    'https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad',
  ],
  'hunyadiho-dlouhe-tazeni': [
    'https://en.wikipedia.org/wiki/Long_campaign',
    'https://hu.wikipedia.org/wiki/Hossz%C3%BA_hadj%C3%A1rat',
    'https://de.wikipedia.org/wiki/Lange_Feldzug',
  ],
  'bitva-u-varny': [
    'https://hu.wikipedia.org/wiki/V%C3%A1rnai_csata',
    'https://en.wikipedia.org/wiki/Battle_of_Varna',
    'https://de.wikipedia.org/wiki/Schlacht_bei_Warna',
  ],
  'soester-fehde': [
    'https://de.wikipedia.org/wiki/Soester_Fehde',
    'https://en.wikipedia.org/wiki/Soest_Feud',
  ],
  'vpady-bratriku': [
    'https://cs.wikipedia.org/wiki/Bratrici',
    'https://de.wikipedia.org/wiki/Bratrici',
  ],
  'sasky-bratrovrazedny-valka': [
    'https://de.wikipedia.org/wiki/S%C3%A4chsischer_Bruderkrieg',
    'https://en.wikipedia.org/wiki/Saxon_Fratricidal_War',
  ],
  'rakousko-uherska-valka-1446': [
    'https://hu.wikipedia.org/wiki/Hunyadi_J%C3%A1nos',
    'https://de.wikipedia.org/wiki/Friedrich_III._(HRR)',
  ],
  'tazeni-jiriho-na-prahu': [
    'https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad',
    'https://de.wikipedia.org/wiki/Georg_von_Podiebrad',
  ],
  'borsengrunska-zasti': [
    'https://de.wikipedia.org/wiki/B%C3%B6rschengr%C3%BCner_Fehde',
    'https://cs.wikipedia.org/wiki/Bor%C5%A1engr%C3%BDnsk%C3%A1_z%C3%A1%C5%A1%C5%A5',
  ],
  'druha-bitva-na-kosove-poli': [
    'https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo',
    'https://hu.wikipedia.org/wiki/M%C3%A1sodik_rig%C3%B3mezei_csata',
    'https://de.wikipedia.org/wiki/Zweite_Schlacht_auf_dem_Amselfeld',
  ],
  'prvni-markrabska-valka': [
    'https://de.wikipedia.org/wiki/Erster_Markgrafenkrieg',
    'https://en.wikipedia.org/wiki/First_Margrave_War',
  ],
  'jihonemecka-mestska-valka': [
    'https://de.wikipedia.org/wiki/S%C3%BCddeutscher_St%C3%A4dtekrieg',
    "https://en.wikipedia.org/wiki/South_German_Cities'_War",
  ],
  'valka-jiriho-proti-strakonicke-jednote': [
    'https://cs.wikipedia.org/wiki/Strakonick%C3%A1_jednota',
    'https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad',
  ],
  'spor-o-ladislava-pohrobka': [
    'https://cs.wikipedia.org/wiki/Ladislav_Pohrobek',
    'https://hu.wikipedia.org/wiki/V._L%C3%A1szl%C3%B3_magyar_kir%C3%A1ly',
    'https://de.wikipedia.org/wiki/Ladislaus_Postumus',
  ],
  'pruske-povstani': [
    'https://pl.wikipedia.org/wiki/Powstanie_Zwi%C4%85zku_Pruskiego',
    'https://de.wikipedia.org/wiki/Preu%C3%9Fischer_Bund',
    'https://en.wikipedia.org/wiki/Prussian_Confederation',
  ],
  'trinactileta-valka': [
    'https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia',
    'https://de.wikipedia.org/wiki/Dreizehnj%C3%A4hriger_Krieg',
    "https://en.wikipedia.org/wiki/Thirteen_Years'_War_(1454%E2%80%931466)",
  ],
  'serotinska-valka': [
    'https://cs.wikipedia.org/wiki/Zde%C5%88ek_Konopi%C5%A1tsk%C3%BD_ze_%C5%A0ternberka',
    'https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota',
  ],
  'oblehani-belehradu-1456': [
    'https://hu.wikipedia.org/wiki/N%C3%A1ndorfeh%C3%A9rv%C3%A1ri_diadal',
    'https://en.wikipedia.org/wiki/Siege_of_Belgrade_(1456)',
    'https://de.wikipedia.org/wiki/Belagerung_von_Belgrad_(1456)',
  ],
  'rakousky-bratrovrazedny-valka': [
    'https://de.wikipedia.org/wiki/%C3%96sterreichischer_Bruderzwist',
    'https://en.wikipedia.org/wiki/Albert_VI,_Archduke_of_Austria',
  ],
  'osmanske-dobyti-srbska': [
    'https://en.wikipedia.org/wiki/Ottoman_conquest_of_Serbia',
    'https://de.wikipedia.org/wiki/Despotat_Serbien',
  ],
  'bavorska-valka': [
    'https://de.wikipedia.org/wiki/F%C3%BCrstenkrieg_(1458%E2%80%931463)',
    "https://en.wikipedia.org/wiki/Princes'_War",
  ],
  'povstani-magnatu-proti-matyasovi-1459': [
    'https://hu.wikipedia.org/wiki/I._M%C3%A1ty%C3%A1s_magyar_kir%C3%A1ly',
    'https://de.wikipedia.org/wiki/Matthias_Corvinus',
  ],
  'mohucska-zasti': [
    'https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde',
    'https://en.wikipedia.org/wiki/Mainz_Diocesan_Feud',
  ],
  'badensko-falcka-valka': [
    'https://de.wikipedia.org/wiki/Badisch-Pf%C3%A4lzischer_Krieg',
    'https://de.wikipedia.org/wiki/Schlacht_bei_Seckenheim',
  ],
  'osmanske-dobyti-bosny': [
    'https://en.wikipedia.org/wiki/Ottoman_conquest_of_Bosnia_(1463)',
    'https://hu.wikipedia.org/wiki/Bosznia_oszm%C3%A1n_megh%C3%B3d%C3%ADt%C3%A1sa',
    'https://de.wikipedia.org/wiki/K%C3%B6nigreich_Bosnien',
  ],
  'osmansko-uherska-valka-1463-1483': [
    'https://en.wikipedia.org/wiki/Ottoman%E2%80%93Hungarian_wars',
    'https://hu.wikipedia.org/wiki/Magyar%E2%80%93t%C3%B6r%C3%B6k_h%C3%A1bor%C3%BAk',
  ],
  'stetinska-dedicka-valka': [
    'https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg',
    'https://pl.wikipedia.org/wiki/Wojna_o_sukcesj%C4%99_szczeci%C5%84sk%C4%85',
  ],
  'valka-proti-zelenohorske-jednote': [
    'https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota',
    'https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky',
  ],
  'knezska-valka': [
    'https://pl.wikipedia.org/wiki/Wojna_ksi%C4%99%C5%BCa',
    'https://de.wikipedia.org/wiki/Pfaffenkrieg_(Ermland)',
  ],
  'cesko-uherska-valka': [
    'https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky',
    'https://hu.wikipedia.org/wiki/Cseh%E2%80%93magyar_h%C3%A1bor%C3%BA',
    'https://de.wikipedia.org/wiki/B%C3%B6hmisch-Ungarischer_Krieg',
  ],
  waldshuterkrieg: [
    'https://de.wikipedia.org/wiki/Waldshuterkrieg',
    'https://cs.wikipedia.org/wiki/Waldshutsk%C3%A1_v%C3%A1lka',
  ],
  'falcka-valka-fridricha-vitezneho': [
    'https://de.wikipedia.org/wiki/Friedrich_I._(Pfalz)',
    'https://de.wikipedia.org/wiki/Schlacht_bei_Seckenheim',
  ],
  'spiknuti-vitez-janus-pannonius': [
    'https://hu.wikipedia.org/wiki/V%C3%A1radi_Vit%C3%A9z_J%C3%A1nos',
    'https://hu.wikipedia.org/wiki/Janus_Pannonius',
    'https://en.wikipedia.org/wiki/Janus_Pannonius',
  ],
  'polsko-uherska-valka-1474': [
    'https://pl.wikipedia.org/wiki/Obl%C4%99%C5%BCenie_Wroc%C5%82awia_(1474)',
    'https://hu.wikipedia.org/wiki/I._M%C3%A1ty%C3%A1s_magyar_kir%C3%A1ly',
  ],
  'hlohovsky-dedicky-spor': [
    'https://de.wikipedia.org/wiki/Glogauer_Erbfolgestreit',
    'https://pl.wikipedia.org/wiki/Wojna_o_sukcesj%C4%99_g%C5%82ogowsk%C4%85',
  ],
  'rakousko-uherska-valka-matyase': [
    'https://de.wikipedia.org/wiki/%C3%96sterreichisch-Ungarischer_Krieg_(1477%E2%80%931488)',
    'https://hu.wikipedia.org/wiki/Osztr%C3%A1k%E2%80%93magyar_h%C3%A1bor%C3%BA_(1477%E2%80%931488)',
    'https://en.wikipedia.org/wiki/Austrian%E2%80%93Hungarian_War_(1477%E2%80%931488)',
  ],
  'bitva-na-chlebovem-poli': [
    'https://en.wikipedia.org/wiki/Battle_of_Breadfield',
    'https://hu.wikipedia.org/wiki/Keny%C3%A9rmezei_csata',
    'https://de.wikipedia.org/wiki/Schlacht_auf_dem_Brodfeld',
  ],
  'tatarsky-vpad-1482': [
    'https://pl.wikipedia.org/wiki/Najazd_tatarski_na_Kij%C3%B3w_(1482)',
    'https://en.wikipedia.org/wiki/Sack_of_Kiev_(1482)',
  ],
  'polsko-turecka-valka': [
    'https://pl.wikipedia.org/wiki/Wojna_polsko-turecka_(1485%E2%80%931503)',
    'https://en.wikipedia.org/wiki/Polish%E2%80%93Ottoman_War_(1485%E2%80%931503)',
  ],
  'rezenska-valka': [
    'https://de.wikipedia.org/wiki/Regensburger_Reichskrieg',
    'https://de.wikipedia.org/wiki/Reichsstadt_Regensburg',
  ],
  'valka-o-uhersky-trun-1490-1492': [
    'https://hu.wikipedia.org/wiki/II._Ul%C3%A1szl%C3%B3_magyar_kir%C3%A1ly',
    'https://de.wikipedia.org/wiki/Wladislaw_II._(B%C3%B6hmen_und_Ungarn)',
    'https://en.wikipedia.org/wiki/Vladislaus_II_of_Hungary',
  ],
  'cerne-vojsko-vzpoura': [
    'https://hu.wikipedia.org/wiki/Fekete_sereg',
    'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
    'https://de.wikipedia.org/wiki/Schwarze_Armee_(Ungarn)',
  ],
  'povstani-szekelyu-1492': [
    'https://hu.wikipedia.org/wiki/Sz%C3%A9kelyek',
    'https://en.wikipedia.org/wiki/Sz%C3%A9kelys',
  ],
  'prvni-litevsko-moskevska': [
    'https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1492%E2%80%931494)',
    'https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_War_(1492%E2%80%931494)',
    'https://de.wikipedia.org/wiki/Litauisch-Russischer_Krieg_(1492%E2%80%931494)',
  ],
  'osmansko-uherska-valka-1492-1495': [
    'https://hu.wikipedia.org/wiki/Magyar%E2%80%93t%C3%B6r%C3%B6k_h%C3%A1bor%C3%BAk',
    'https://en.wikipedia.org/wiki/Ottoman%E2%80%93Hungarian_wars',
  ],
  'bitva-na-krbavskem-poli': [
    'https://en.wikipedia.org/wiki/Battle_of_Krbava_Field',
    'https://hu.wikipedia.org/wiki/Korb%C3%A1vmezei_csata',
    'https://de.wikipedia.org/wiki/Schlacht_auf_dem_Krbavafeld',
  ],
  'kutnohorska-bourka': [
    'https://cs.wikipedia.org/wiki/Hornick%C3%A9_povst%C3%A1n%C3%AD_v_Kutn%C3%A9_Ho%C5%99e',
    'https://cs.wikipedia.org/wiki/Kutn%C3%A1_Hora',
  ],
  'bukovinska-vyprava': [
    'https://pl.wikipedia.org/wiki/Wyprawa_bukowi%C5%84ska',
    'https://en.wikipedia.org/wiki/Polish%E2%80%93Moldavian_War_(1497%E2%80%931499)',
    'https://de.wikipedia.org/wiki/Schlacht_im_Kosminer_Wald',
  ],
  'svabska-valka': [
    'https://de.wikipedia.org/wiki/Schwabenkrieg',
    'https://cs.wikipedia.org/wiki/%C5%A0v%C3%A1bsk%C3%A1_v%C3%A1lka',
    'https://en.wikipedia.org/wiki/Swabian_War',
  ],
  'druha-litevsko-moskevska': [
    'https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1500%E2%80%931503)',
    'https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_War_(1500%E2%80%931503)',
    'https://de.wikipedia.org/wiki/Litauisch-Russischer_Krieg_(1500%E2%80%931503)',
  ],
  'tatarske-vpady-1500': [
    'https://pl.wikipedia.org/wiki/Najazdy_tatarskie_na_Polsk%C4%99',
    'https://en.wikipedia.org/wiki/Crimean%E2%80%93Nogai_raids_into_East_Slavic_lands',
  ],
  'glatzska-valka': [
    'https://cs.wikipedia.org/wiki/Kladsko',
    'https://de.wikipedia.org/wiki/Grafschaft_Glatz',
  ],
  'landshutska-dedicka-valka': [
    'https://de.wikipedia.org/wiki/Landshuter_Erbfolgekrieg',
    'https://en.wikipedia.org/wiki/War_of_the_Succession_of_Landshut',
    'https://cs.wikipedia.org/wiki/Landshutsk%C3%A1_d%C4%9Bdick%C3%A1_v%C3%A1lka',
  ],
  'bitva-u-kleckeho': [
    'https://pl.wikipedia.org/wiki/Bitwa_pod_Kleckiem',
    'https://en.wikipedia.org/wiki/Battle_of_Kletsk',
    'https://de.wikipedia.org/wiki/Schlacht_bei_Kleck',
  ],
  'treti-litevsko-moskevska': [
    'https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1507%E2%80%931508)',
    'https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_War_(1507%E2%80%931508)',
    'https://de.wikipedia.org/wiki/Litauisch-Russischer_Krieg_(1507%E2%80%931508)',
  ],
  'ctvrta-litevsko-moskevska': [
    'https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1512%E2%80%931522)',
    'https://en.wikipedia.org/wiki/Fourth_Muscovite%E2%80%93Lithuanian_War',
    'https://pl.wikipedia.org/wiki/Bitwa_pod_Orsz%C4%85_(1514)',
  ],
  'tatarsky-vpad-lopuszno': [
    'https://pl.wikipedia.org/wiki/Bitwa_pod_Wi%C5%9Bniowcem',
    'https://pl.wikipedia.org/wiki/Konstanty_Ostrogski',
  ],
  'berlichingenova-zasti': [
    'https://de.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen',
    'https://en.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen',
  ],
  'dozsovo-povstani': [
    'https://hu.wikipedia.org/wiki/D%C3%B3zsa-fel%C3%A9rt%C3%A9kel%C3%A9s',
    'https://en.wikipedia.org/wiki/Gy%C3%B6rgy_D%C3%B3zsa',
    'https://de.wikipedia.org/wiki/Aufstand_des_Gy%C3%B6rgy_D%C3%B3zsa',
  ],
  'povstani-1517': [
    'https://cs.wikipedia.org/wiki/Vladislavsk%C3%A9_z%C5%99%C3%ADzen%C3%AD_zemsk%C3%A9',
    'https://cs.wikipedia.org/wiki/Svatov%C3%A1clavsk%C3%A1_smlouva',
  ],
  'wurttemberska-valka': [
    'https://de.wikipedia.org/wiki/Schw%C3%A4bischer_Bund',
    'https://de.wikipedia.org/wiki/Ulrich_(W%C3%BCrttemberg)',
    'https://en.wikipedia.org/wiki/Ulrich,_Duke_of_W%C3%BCrttemberg',
  ],
  'hildesheimska-kolegiatni-zasti': [
    'https://de.wikipedia.org/wiki/Hildesheimer_Stiftsfehde',
    'https://en.wikipedia.org/wiki/Hildesheim_Diocesan_Feud',
  ],
  reiterkrieg: [
    'https://pl.wikipedia.org/wiki/Wojna_pruska_(1519%E2%80%931521)',
    'https://de.wikipedia.org/wiki/Reiterkrieg',
    'https://en.wikipedia.org/wiki/Polish%E2%80%93Teutonic_War_(1519%E2%80%931521)',
  ],
  'osmansko-uherska-valka-1521-1526': [
    'https://hu.wikipedia.org/wiki/Magyar%E2%80%93t%C3%B6r%C3%B6k_h%C3%A1bor%C3%BAk',
    'https://en.wikipedia.org/wiki/Ottoman%E2%80%93Hungarian_wars',
    'https://de.wikipedia.org/wiki/Suleiman_I.',
  ],
  'rytirska-valka': [
    'https://de.wikipedia.org/wiki/Pf%C3%A4lzischer_Ritteraufstand',
    "https://en.wikipedia.org/wiki/Knights'_Revolt",
  ],
  'nemecka-selska-valka': [
    'https://de.wikipedia.org/wiki/Deutscher_Bauernkrieg',
    "https://en.wikipedia.org/wiki/German_Peasants'_War",
    'https://cs.wikipedia.org/wiki/N%C4%9Bmeck%C3%A1_selsk%C3%A1_v%C3%A1lka',
  ],
  'sekularizace-pruska': [
    'https://pl.wikipedia.org/wiki/Ho%C5%82d_pruski',
    'https://de.wikipedia.org/wiki/Krakauer_Vertrag_(1525)',
    'https://en.wikipedia.org/wiki/Prussian_Homage',
  ],
  'hornicke-povstani-jachymov': [
    'https://cs.wikipedia.org/wiki/J%C3%A1chymov',
    'https://de.wikipedia.org/wiki/Joachimsthal',
  ],
  'povstani-slovenskych-hornich-mest': [
    'https://hu.wikipedia.org/wiki/Besztercebányai_bányászfelkelés',
    'https://de.wikipedia.org/wiki/Bergarbeiteraufstand_in_Neusohl',
  ],
  'bitva-u-mohace': [
    'https://hu.wikipedia.org/wiki/Moh%C3%A1csi_csata',
    'https://en.wikipedia.org/wiki/Battle_of_Moh%C3%A1cs',
    'https://de.wikipedia.org/wiki/Schlacht_bei_Moh%C3%A1cs_(1526)',
  ],
  'oblehani-sionu': [
    'https://cs.wikipedia.org/wiki/Obl%C3%A9h%C3%A1n%C3%AD_hradu_Sion',
    'https://cs.wikipedia.org/wiki/Jan_Roh%C3%A1%C4%8D_z_Dub%C3%A9',
  ],
  'tazeni-sestimesti-proti-vartemberkum': [
    'https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD',
  ],
  'poprava-jana-smirickeho': [
    'https://cs.wikipedia.org/wiki/Jan_Smi%C5%99ick%C3%BD',
  ],
  'kaplirovo-zasti-pasov': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'spor-z-plavna-vladislav': [
    'https://cs.wikipedia.org/wiki/Plaven%C5%A1t%C3%AD_z_Plavna',
    'https://cs.wikipedia.org/wiki/Jind%C5%99ich_IV._z_Plavna',
  ],
  'bitva-u-domazlic-1466': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'dobyti-tepelskeho-klastera-1467': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'boje-u-nyrska-1467': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'bocklerska-valka': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'dobyti-degenberga-1468': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'tazeni-pluha-tachov-plzen-1468': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'dobyti-vimperka-vlachova-brezi-budkova-1468': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'bitva-u-nyrska-1468': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'trestne-tazeni-vevodu-proti-bocklerum': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'tazeni-gutstejna-plavna-cheb-1469': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'tazeni-podebrad-proti-plavnu-1469': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'zasti-volfstejna-na-trebli': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'razie-albrechta-iv-na-lupice-1470': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'boj-o-loket-1471': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'utok-kolovratsko-volfstejnskeho-klanu-na-chebsko-1471': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'zasti-elsenbergu-nothaftu-proti-virspekum-1471': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
  ],
  'dobyti-pajreka-1471-1472': [
    'https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view',
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'oblehani-loket-sliky': [
    'http://www.loket.cz/clanek/9619958/vladislav-jagellonsky-a-loket.html',
  ],
  'dobyti-pusperka-1473': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'tazeni-waldekara-na-klatovsko-1473': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'boj-o-leno-ostroh-seeberg-1474-1475': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'dobyti-noveho-herstejna-1475': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'zasti-bronska-kocovskeho-s-wittelsbachy-1475-1476': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'rezenska-zasti-zaunruda-gutstejna-svamberku-1475-1479': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
  ],
  'trestne-tazeni-chebu-proti-hyncikovi-pluhovi-1477': [
    'https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view',
  ],
  'oblezeni-veseli-a-horazdovic-1477-1478': [
    'https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view',
    'https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view',
  ],
  'porazka-gutstejna-u-plzne-1478': [
    'https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view',
  ],
  'prazska-defenestrace-1483': [
    'https://cs.wikipedia.org/wiki/Pra%C5%BEsk%C3%A1_defenestrace_(1483)',
  ],
  'odboj-podebradskych-vs-korvin': [
    'https://cs.wikipedia.org/wiki/Hynek_z_Pod%C4%9Bbrad',
    'https://cs.wikipedia.org/wiki/Minsterberkov%C3%A9',
  ],
  'valka-se-sliky-1501': [
    'http://www.loket.cz/clanek/9619958/vladislav-jagellonsky-a-loket.html',
    'https://cs.wikipedia.org/wiki/%C5%A0likov%C3%A9',
  ],
  'kopidlanska-valka-1507-1517': [
    'https://cs.wikipedia.org/wiki/Kopidlan%C5%A1t%C3%AD_z_Kopidlna',
  ],
}

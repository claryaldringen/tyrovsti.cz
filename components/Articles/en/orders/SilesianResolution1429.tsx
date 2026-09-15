import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const SilesianResolution1429 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="silesian-resolution-1429" />
        <h4>
          Silesian Resolution on Wagon Formation, May 1429
          {draft && <DraftBadge />}
        </h4>
        <p>Working translation, not yet reviewed.</p>
        <p>
          According to Toman, King Sigismund agreed on an order for the
          formation of wagons with the Silesian princes and had it sent, in a
          German translation, to the princes and cities of the Empire. It has
          survived as an enclosure to a letter of 23&nbsp;May 1429 in which Ulm
          informed Nördlingen about the meeting of the cities with the
          king&apos;s councillors held at Ehingen on 8&nbsp;May, where the
          cities received the order.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:e4297c33-ec66-4340-8470-3edba8f333cb"
          />{' '}
          In the letter from Ulm the order is called{' '}
          <Cit>
            anschlag und ordnung der wagenburgen, als die denne unser herre der
            küng und och die herren uß der Schlesien hand
          </Cit>
          . The order itself is undated, so the edition of the{' '}
          <i>Deutsche Reichstagsakten</i> only places it before 23&nbsp;May
          1429.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=329"
          />{' '}
          According to the same edition, the envoys of Wrocław (Breslau) had
          already written to their city from Pressburg on 18&nbsp;April about
          the division of the troops into tens, hundreds and thousands
          (art.&nbsp;12).
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=330"
          />
        </p>
        <p>
          Toman regards this order as the most convincing proof that the German
          wagon orders are based on Czech sources, because it contains words
          that the German scribes did not understand.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:e4297c33-ec66-4340-8470-3edba8f333cb"
          />{' '}
          He explains <Cit>fassonswise</Cit> as the Czech “ve způsobu fasuňku”
          (in the manner of a <i>fasuněk</i>), <Cit>gethariast</Cit> as the
          Czech <i>zatarasený</i> (barricaded) and the unintelligible{' '}
          <Cit>sels</Cit> as a scribal error for <Cit>felde</Cit>, i.e. “from
          the field”, meaning on the outer side of the wagon fort.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:862e7cdb-74ed-4129-8a6d-5d37bad30b81"
          />
        </p>
        <p>
          Toman printed the order with normalised spelling and numbered the
          articles himself. In square brackets he added the variants and
          additions of a second copy preserved by Windecke.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:510b0e1c-c8a8-4287-8850-64220be509e7"
          />{' '}
          The edition of the <i>Deutsche Reichstagsakten</i> is based on the
          copy in the Nördlingen records of the Swabian League of Cities.
          Compared with it, Toman has articles 14 and 15 in reverse order, and
          in article 17 he reads <Cit>dem volke</Cit> instead of{' '}
          <Cit>dem folge</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=330"
          />
        </p>
        <p>
          Translation notes: According to Toman, each wagon has 18 men in total:
          six crossbowmen, two handgunners, four men with hooked spears (
          <Cit>haken</Cit>), four flailmen and two drivers; Windecke&apos;s
          reading of 48 does not match this.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:510b0e1c-c8a8-4287-8850-64220be509e7"
          />{' '}
          The edition of the <i>Deutsche Reichstagsakten</i> explains{' '}
          <Cit>kilhoven</Cit> as an iron, wedge-shaped pointed hoe for hacking
          loose crumbly rock, translated here as “pickaxe”. It explains{' '}
          <Cit>in fassonswise</Cit> as a wagon onto which much can be loaded,{' '}
          <Cit>gethariast</Cit> as “barricaded”, and unlike Toman it considers
          the meaning “rope” or “strap” for <Cit>sels</Cit>. According to the
          edition, <Cit>howfnicze</Cit> is the Czech <i>houfnice</i> (howitzer),
          and <Cit>huldung</Cit> (in the edition <Cit>huldnung</Cit>) probably
          means the relationship of a dependant or a servant.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=330"
          />{' '}
          Uncertain passages: <Cit>hacken</Cit> may mean axes as well as hoes;
          Windecke&apos;s <Cit>eine messung wit</Cit> in article 4 is left
          untranslated; in article 6 the word “wagons” is an interpretation; the
          meaning of article 13 and of the end of article 12 (
          <Cit>uf den andern sehe</Cit>) is uncertain. The word{' '}
          <Cit>(klötz)</Cit> in article 1 does not appear in the edition of the{' '}
          <i>Deutsche Reichstagsakten</i>.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Item zu einem stritwagen söllen gehören sechs schutzen, und zu
            jetlichem armbrost vier schock pfile, zween mann mit handbuchsen, zu
            jeglicher vier schock kugelin (klötz) und pulvers gnüg; vier mann
            mit haken, vier mann mit drischeln, zwo hacken, zwo schufeln, zwo
            kilhoven oder grabschit [schufeln].
          </li>
          <li>
            Item zu jetlichem [wagen] vier stark hengst, welcher aber nit
            starker pferd [hengest] hant, der nehm sünst sechs; dass doch
            jeglicher wagen zween fürmann habe [wohl] gewappent.
          </li>
          <li>
            Item die schufeln, grabschit und hacken dörfen nit [hon] sunder
            lüte, sunder wird man ihr dörfen, so nimmt man sie [wohl] aus dem
            hufen, da lut genug sin werden. Summa zu einem wagen 18 [48] person,
            die sich von dem wagen nit sullen scheiden, es si denne mit des
            hauptmanns geheiss [und auch sine willen].
          </li>
          <li>
            Item sölicher starker wagen soll sin in fassonswise [eine messung
            wit] mit hohen leitern, gethariast von dem sels [felde] zwischen den
            leitern und under den leitern mit [guten] hangenden brettern an
            starken widen oder ketten.
          </li>
          <li>
            Item zu jetlichem wagen sullen ketten sein, dieselben zu binden, ob
            es sin not wird [not sin wurde.]
          </li>
          <li>
            Item allwegen zu fünf soll sein ein steinbuchs genannt howfnicze,
            und zu jetlicher ein schock stein zum mindsten und pulvers gnüg; und
            zu denselben [derselben] buchsen und ihren steinen muss man einen
            besunder wagen hon.
          </li>
          <li>
            Item man muss och uf denselben wagen kein spis legen, sunder ein
            statt darauf lassen, darin man [der lut] wurfstein leget.
          </li>
          <li>
            Item was übriger lut seind über befehlung der wägen [die bestellung
            der wagen], die sullen alle ihr wehre [gewehre] haben und thun nach
            geheiss des hoptmanns.
          </li>
          <li>
            Item viel sache und befehlung [bestellung] mag man darzu thun, die
            da nit zu schriben, sunder nach gelegenheit der lute und ordnung
            uszerichten sind, als man denne für ögen sehen wird [also man das
            fur ougen sehen].
          </li>
          <li>
            Item ehe man zu felde uszucht, dass danne alle obgeschrieben stucke
            bereit seiend.
          </li>
          <li>
            Item zu allen obgeschrieben sachen sullen lute auserkorn sein, die
            alle ding besehent und ordnent, dass das vollkumelich zugehe.
          </li>
          <li>
            Item es soll unter dem volk eine söliche ordnung sein, dass je zehn
            mann einen hoptmann haben, und hundert einen, und tusend einen, und
            also immer mehr für sich bis uf den obersten hoptmann, als man der
            lute genügig haben wird, die söliche sache und schickung wohl ordnen
            können, und dass je ein hoptmann uf den andern sehe, als denn [dann]
            ein gewohnheit ist.
          </li>
          <li>Item man soll underston, dass alle huldung obsi.</li>
          <li>Item dass jedermann uf si mit seim selbs libe.</li>
          <li>
            Item wer aber von alter und krankheit selber nit geziehen möcht, der
            möcht einen andern an sein statt bestellen.
          </li>
          <li>
            Item wer sich in den obgeschrieben sachen ungehorsam finden liesse,
            zu des lieb und gut man grifen soll, als zu einem zuleger und helfer
            der ketzer, ohn all gefährde.
          </li>
          <li>
            Item dass reisige pferit [dass man reisig volk] zu ross ufbringen
            soll, so man meist mag, und dass man dem volke [fussvolk] och
            gereisig lüte in die wagenburg zuschicken sülle.
          </li>
          <li>
            Item och süllen die fürsten, herren und städt gross und kleine
            buchsen und anderen gezüge mit ihn bringen, so sie meist mügen.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:510b0e1c-c8a8-4287-8850-64220be509e7"
            />
            <Qt
              publication={PUBLICATIONS.DRA9}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=329"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            To one war wagon shall belong six shooters, and to each crossbow
            four sixties of bolts; two men with handguns, to each four sixties
            of bullets (klötz) and enough powder; four men with hooks, four men
            with flails, two axes, two shovels, two pickaxes or spades
            [shovels].
          </li>
          <li>
            To each [wagon] four strong stallions; but whoever does not have
            strong horses [stallions] shall take six instead; and each wagon
            shall have two [well] armed drivers.
          </li>
          <li>
            The shovels, spades and axes do not need [to have] special men; but
            if they are needed, they are [well] taken from the troop, where
            there will be men enough. In total, 18 [48] persons to one wagon,
            who shall not leave the wagon except by the captain&apos;s command
            [and also with his will].
          </li>
          <li>
            Such a strong wagon shall be in the manner of a <i>fasuněk</i> [eine
            messung wit], with high ladder sides, barricaded from the field
            between the ladder sides and below the ladder sides with [good]
            hanging boards on strong withies or chains.
          </li>
          <li>
            Each wagon shall have chains to bind the wagons together, should it
            be necessary.
          </li>
          <li>
            For every five (wagons) there shall be one stone gun called a{' '}
            <i>houfnice</i>, and for each at least sixty stones and enough
            powder; and for these guns and their stones one must have a special
            wagon.
          </li>
          <li>
            Also no food may be loaded on these wagons, but a place shall be
            left on them where [the men] put throwing stones.
          </li>
          <li>
            Whatever men remain beyond the manning of the wagons shall all have
            their weapons and act on the captain&apos;s command.
          </li>
          <li>
            Many things and arrangements may be added to this that cannot be
            written down but must be settled according to the circumstances of
            the men and the order, as one will see before one&apos;s eyes.
          </li>
          <li>
            Before marching out into the field, all the things written above
            shall be ready.
          </li>
          <li>
            For all the things written above, men shall be chosen who inspect
            and arrange everything so that it is done completely.
          </li>
          <li>
            There shall be such an order among the troops that every ten men
            have a captain, and every hundred one, and every thousand one, and
            so on upwards up to the supreme captain, as far as there are enough
            men who can arrange such matters and dispositions well; and that
            each captain look to the other, as is the custom.
          </li>
          <li>
            One shall undertake that all bonds of dependence be suspended (?).
          </li>
          <li>That everyone set out in person.</li>
          <li>
            But whoever cannot go himself because of age and illness may appoint
            another in his place.
          </li>
          <li>
            Whoever proves disobedient in the things written above shall be
            seized in life and property as a supporter and helper of the
            heretics, without any deceit.
          </li>
          <li>
            That as many mounted horses [mounted men] as possible be raised, and
            that mounted men also be sent to the people [foot soldiers] in the
            wagon fort.
          </li>
          <li>
            Also the princes, lords and cities shall bring with them as many
            large and small guns and other equipment as they can.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)

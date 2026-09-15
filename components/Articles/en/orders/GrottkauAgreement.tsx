import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const GrottkauAgreement = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="grottkau-agreement" />
        <h4>
          Agreement of the Silesian Princes, Vassals and Towns at Grottkau (1421
          or 1427)
        </h4>
        <p>
          The agreement against the Hussites was concluded by the Silesian
          princes together with the lands and towns of Breslau and
          Schweidnitz-Jauer. It regulates the garrisoning of the border castles
          with cavalry, joint action in the event of an invasion of Silesia, the
          equipment of the wagons and the allocation of guns, and finally lists
          what is to be taken along on the campaign. The document bears no year;
          it is dated only{' '}
          <Cit>on the Thursday of the Ember Days before Michaelmas</Cit>.
          Palacký printed it after Grünhagen&apos;s edition under 18 September
          1421.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
          />{' '}
          Grünhagen connects it with the assembly of princes at Grottkau on that
          day and stresses its markedly defensive character.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Toman, on the other hand, holds that the document belongs to a later
          period, perhaps to 1427. He regards it rather as a more detailed
          implementation of the league of the same principalities of 14 February
          1427, and considers such a large number of guns altogether improbable
          for 1421.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
            note="pp. 185–186"
          />
        </p>
        <p>
          Translation notes: I interpret the obscure words following
          Grünhagen&apos;s paraphrase of the document in modern German.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n70/mode/1up"
          />{' '}
          According to him, the <Cit>landzocht</Cit> chain connected the two
          halves of the wagon, <Cit>czoë</Cit> are pitchforks and{' '}
          <Cit>pisschullen</Cit> are hand firearms. He explains{' '}
          <Cit>tarrasssteinbüchsen</Cit> as guns that are rested on something
          when fired, as opposed to hand firearms; I translate them as tarasnice
          (light pieces on a stand). I also follow Grünhagen in identifying the
          princes: Duke Kaske is Casimir of Auschwitz (Oświęcim), Bernhard is
          Bernhard of Falkenberg and Przemek is Přemek of Troppau (Opava).
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          I leave the words <Cit>kriptücher</Cit>, <Cit>lythische schilde</Cit>,{' '}
          <Cit>poffeysen</Cit> and <Cit>fusseysen</Cit> untranslated. Grünhagen
          merely renders them in modern German (
          <i>Halstragseln, lüttische Schilde (?), Puffeisen, Fußeisen</i>) and
          their meaning is uncertain.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>Einigung mann vnd stete vnd der fürsten in der Slesia.</p>
        <p>
          Off den tag zue Grottkaw haben sich die fürsten und lande u. stete
          Breslaw Swednitz u. Jawer sich eyntrechtiglich geeynet u. beslossen
          wider die kätzer in Behem, also hienoch stehet geschreben:
        </p>
        <p>
          Zum irsten die festen an den grentzen vff eine landwer zu besetzen,
          also: Item hertzog Johannes von Monsterberg u. land u. stete Breslaw,
          Swidnitz und Jawer sullen 230 pferde legen uff das Smedewerg
          (Schmiedeberg), off den Schetzler (Schatzler), vf Swartzenwalde
          (Schwarzwaldau) u. vf Conradswalde (bei Grüssau). Item der bischof 70
          pferde. Hertz. Ruprecht von Löbin vnd Ludwig sein bruder 35 pferdt, h.
          Ludwig vom Brige 60 pferdt und h. Conrad Canthner 60 pferdt sullen sie
          kein Brawnaw legen. Item so sullen die von Ratibor Jegerdorff selbir
          mit 50 pferden besetzen. Item h. Bolcke von Teschen 30 pf. und der
          junge h. Bolco 25 pf. in die Ostra legen. H. Bernhard mit 30 pf., h.
          Kaske mit 20 pf., und der weisse h. Conrad mit 20 pf. sollen h.
          Przemken helfen, wo her der helfe am notlichsten dann wird bedürfen,
          uff 1/4 jar. Item zu welchen vnder den besatzten slossen die ketzer
          zuziehen würden, den sullen die andern von den besatzten slossen zur
          hulffe kommen. Item ap sie swach weren vnd den fürsten hinder sich
          schreiben wörden, so hat iglich furste vff sein mit gantzer macht, die
          her vor jugent vnd von alder vffbrengen mag, ein feld wieder die
          ketzer zu machen, dass sullen auch thun mann vnd stete. Item dozu sol
          iglich furste in das schicken, das is an im nicht dorffe gebrechen,
          nach des bundes lawt und auch land vnd stete.
        </p>
        <p>
          Item ap es sich geburte, welch furste odir land adir stad seine macht
          dem andern entzihn vnd den bund brechen welde, den wellen die andern
          vorclagen vor dem bobiste, vor dem cardinal vnd vor dem römischen
          konige, vnd werde zurathe, wie sie es an jm gehaben konnen, en zu
          holffen vnd den bunden in seinen würden zu halden.
        </p>
        <p>
          Item ap die kätzer in die Slesie zien werden, so sal iglich furste
          land vnd stete, die im lande sein, mit gantzer macht vff sein, sam
          jederman gesessin ist, vnd en enkegen zien, ein feld zu machen, beide
          aus landen vnd steten etc. Item iglich furste sal bestellen in seinen
          landen vnd steten, das 10 gebawer einen waijn haben mit irer were vnd
          speise vff drei monden. Nemlich itzlich waijn sol haben eine kethe,
          die man nennt eine landzocht, zwey brethe, zwey grabescheit, eine
          schauffel, zwu czoë, eine haue adir zwu. Vnd itzlicher sal seine beste
          were mit jm nemen, also spisse, armbroste vnd suste so er beste mag.
          Das sullen auch tun die obgenante lande vnd stete. Item itzlicher
          furste sal seine stete heissen mete nemen weren so sie beste mögen vnd
          ouch die lannt. Item itzlich furste sal mit jm nemen bochsen, nachdeme
          also es im ist angeslagen. Item die Sweidnitzer land vnd stete sullen
          mit jn nemen eine grosse bochse, 15 tarrasssteinbüchsen vnd 100
          pisschullen. Item die andern fursten vnd land vnd stete werden och
          mete nemen iglicher nach seinem anslage. Summa summarum der bochsen,
          20 grosse bochsen, domete man mawren fellen mag, 300
          tarrasssteinbüchsen, 2000 pisschullen.
        </p>
        <p>
          Ussrichtung vnd gerethe in die herfart zu habin: capelan mit eynem
          ornat, messebuch, lichte, kelich, wein, ampullen alterstein. Gelt,
          wein, byr, fleisch, speck, seitenfleisch, schmaltz, fysche, putter,
          behmische kese, cleine kese, saltz, tyschlag, hant tücher, kessel,
          dreifuss, würze, vnsletlichte, wichsinne stöckel, spisse, exsse,
          grabescheit, haulkin, muldin, schauffeln, schlegel, kriptücher, pfele,
          strenge, futterstricke, getzelt mit stangen vnd sinem gerethe,
          futtersecke, hobir vnd ein moss dorzu, hulzyne kannen, kopperinne
          tringgefese, lythische schilde, pfannen, tringtoppen, roste,
          brantreithe, schutzemeister, balbirer, czymmerleuthe, bochsenmeister,
          bochsen, pulver, poffeysen, kawlin, fusseysen, eiserne flegel, erbis,
          zugemüse.
        </p>
        <p>
          Am dornstage in der quatertempora vor Michaelis.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
            note="No. 140, pp. 149–151"
          />
        </p>
      </Col>
      <Col md={6}>
        <p>Agreement of the vassals and towns and of the princes in Silesia.</p>
        <p>
          At the assembly at Grottkau the princes and the lands and towns of
          Breslau, Schweidnitz and Jauer united in concord and resolved against
          the heretics in Bohemia, as is written hereafter:
        </p>
        <p>
          First, to garrison the strongholds on the borders for the defence of
          the land, as follows: Duke John of Münsterberg and the lands and towns
          of Breslau, Schweidnitz and Jauer shall station 230 horse at
          Schmiedeberg (Kowary), at Schatzlar (Žacléř), at Schwarzwaldau (Czarny
          Bór) and at Konradswaldau near Grüssau. Item the bishop 70 horse. Duke
          Rupert of Lüben and Louis his brother 35 horse, Duke Louis of Brieg 60
          horse and Duke Conrad the Kantner 60 horse shall station them at
          Braunau (Broumov). Item those of Ratibor shall garrison Jägerndorf
          (Krnov) themselves with 50 horse. Item Duke Bolko of Teschen 30 horse
          and the young Duke Bolko 25 horse shall station them at Ostrau
          (Ostrava). Duke Bernhard with 30 horse, Duke Kaske with 20 horse and
          the white Duke Conrad with 20 horse shall help Duke Przemek wherever
          he shall most need help, for a quarter of a year. Item whichever of
          the garrisoned castles the heretics move against, the others from the
          garrisoned castles shall come to its aid. Item if they were weak and
          wrote to the princes for help, every prince shall rise with all the
          might he can raise from young and old and take the field against the
          heretics; the vassals and towns shall do the same. Item every prince
          shall contribute to this so that nothing is lacking on his part,
          according to the terms of the league, and the lands and towns as well.
        </p>
        <p>
          Item should it happen that any prince or land or town wished to
          withhold its might from the others and break the league, the others
          will accuse him before the pope, before the cardinal and before the
          King of the Romans, and will take counsel how they might bring him to
          help them and to keep the league in force.
        </p>
        <p>
          Item if the heretics move into Silesia, every prince, land and town
          that is in the country shall rise with all its might, according to how
          each is settled, march against them and take the field, both from the
          lands and from the towns, etc. Item every prince shall arrange in his
          lands and towns that every 10 peasants have one wagon with their
          weapons and food for three months. Namely, each wagon shall have a
          chain called a landzocht, two boards, two spades, one shovel, two
          pitchforks, one hoe or two. And each man shall take his best weapon
          with him, that is spears, crossbows and otherwise whatever he best
          can. The aforesaid lands and towns shall do the same. Item every
          prince shall order his towns to take weapons as best they can, and the
          countryside too. Item every prince shall take guns with him according
          to his allotment. Item the land and towns of Schweidnitz shall take
          with them one great gun, 15 tarasnice and 100 pisschullen. Item the
          other princes and lands and towns will also take theirs, each
          according to his allotment. Sum total of guns: 20 great guns with
          which walls can be brought down, 300 tarasnice, 2000 pisschullen.
        </p>
        <p>
          Equipment and gear to be had on the campaign: a chaplain with a
          vestment, missal, candles, chalice, wine, cruets, altar stone. Money,
          wine, beer, meat, bacon, flitches, lard, fish, butter, Bohemian
          cheeses, small cheeses, salt, tablecloths, towels, kettles, trivets,
          spices, tallow candles, wax tapers, spears, axes, spades, hooks,
          troughs, shovels, mallets, kriptücher, stakes, traces, fodder ropes, a
          tent with poles and its fittings, fodder sacks, oats and a measure for
          them, wooden jugs, copper drinking vessels, lythische schilde, pans,
          drinking pots, gridirons, firedogs, masters of the marksmen, barbers,
          carpenters, gunners, guns, powder, poffeysen, balls, fusseysen, iron
          flails, peas, vegetables.
        </p>
        <p>On the Thursday of the Ember Days before Michaelmas.</p>
      </Col>
    </Row>
  </>
)

import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const VegetiusOnTheWagonFortCgm356 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="vegetius-on-the-wagon-fort-cgm-356" />
        <h4>
          Vegetius on the Wagon Fort from Manuscript Cgm 356, Late 15th Century
          {draft && <DraftBadge />}
        </h4>
        <p>Working transcription and translation, not yet reviewed.</p>
        <p>
          The text is written in manuscript Cgm 356 of the Bavarian State
          Library in Munich, an anonymous book on fireworks and gunnery. The
          whole manuscript was written by a single hand in Bavarian dialect with
          some East Swabian features; its provenance is unknown and the paper
          watermarks point to the last decade of the 15th century.
          <Qt
            publication={PUBLICATIONS.SCHNEIDER1973}
            href="https://handschriftenportal.de/search?hspobjectid=HSP-ab1f2e94-505c-3efe-ae59-e996710ab174"
            note="pp. 46–47"
          />{' '}
          The catalogue lists the text as a wagon fort ordinance (
          <i>Wagenburgordnung</i>).
          <Qt
            publication={PUBLICATIONS.SCHNEIDER1973}
            href="https://handschriftenportal.de/search?hspobjectid=HSP-ab1f2e94-505c-3efe-ae59-e996710ab174"
            note="p. 48"
          />{' '}
          In fact it is based on chapters 22–25 and 27 of the first book of
          Vegetius&apos; <i>Epitoma rei militaris</i> in the German translation
          by Ludwig Hohenwang, as known from the Augsburg print of about 1475.
          In these chapters Hohenwang renders the Roman military camp as a wagon
          fort (<i>wagenburg</i>), which is why the text speaks of the{' '}
          <i>praetoria</i> and <i>decumana</i> gates, of cohorts and centuries.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=40"
          />{' '}
          The scribe of the manuscript shortened and altered Hohenwang&apos;s
          text in places and added to the end of the chapter on fortifying the
          wagon fort a passage that is not in the print. Besides hoes and
          shovels he calls for axes, flails, scythes and sickles, and for every
          wagon in the wagon fort a 24-foot spear with a hook, a Bohemian flail
          with iron spikes and two hook-gun shooters.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=41"
          />
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=195"
            note="p. 192"
          />{' '}
          Würdinger paraphrased the content of these pages in modern German as
          an excerpt from a late 15th-century book on fireworks.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=407"
          />
        </p>
        <p>
          Notes on the transcription and translation: abbreviations are
          expanded, the spelling of the manuscript is kept and <i>u</i> with a
          superscript sign is transcribed as <i>ü</i>. Doubtful readings were
          checked against Hohenwang&apos;s print.
          <br />
          Following Hohenwang, <Cit>ritter</Cit> here corresponds to Latin{' '}
          <i>miles</i> and is translated as <Cit>soldiers</Cit>. With the ditch,{' '}
          <Cit>hoch</Cit> means depth; <Cit>spitz</Cit> is the battle line,{' '}
          <Cit>auffbietter</Cit> the herald (Hohenwang has <i>büttel</i>),{' '}
          <Cit>getüll stecken</Cit> palisade stakes and <Cit>beichel</Cit> axes.
          <br />
          The numeral read as <i>x</i> has the same form in five places in the
          chapter on fortification. For the proper ditch Hohenwang&apos;s print
          gives a width of 12 and a depth of 9 feet, and after the earth is
          heaped up a depth of 13 and a width of 12 feet. According to him the
          first ditch is 9 feet wide and 7 deep, whereas the manuscript has 7 or
          8 and 6 feet. Würdinger read 10 feet in the manuscript. For the ten
          thousand paces the manuscript agrees with the print.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=43"
          />
          <br />
          The phrase <Cit>an die wege</Cit> in the chapter on fortification has
          no counterpart in the print and its meaning is uncertain.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>Aber von der wagenpurg</h5>
        <p>
          Aber die wagenpurg voran, so die feind nahet sein, süllen an einer
          sichern stat gemacht werden, besunder do holtz genüg und futer genüg
          ist und auch wassers genüg ist. Und ob lenger do zu bleyben sey, so
          sol erwelt werden gesuntheit der stat. Es ist zu hütten, das kein
          nahender perg sey bey der wagenpurg, also daz die feind den perg nit
          ein nemen und in belegern. Auch daz das feld mit guss wasser nit gewon
          sey zu überwessern, von welhem das heer ungemach leyden müst. Auch
          nach der zal reitter und knecht und auch des zeugs, so zu inne gehört
          sein, die wagenpurg zu bewaren, nit daz die mengin des folcks
          bezwungen werd in ein engin oder die wenig in ein weittin mer dan not
          ist sich auss zu brayten etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=193"
            note="p. 190"
          />
        </p>
        <h5>Von der wagenpurg</h5>
        <p>
          Unter weile gefiert wagenpurg, zu zeitten dreyeket und zu zeitten halb
          sinwel, dar nach die statt oder notturfft haischet, sein die wagenpurg
          zu machen. Aber daz tor, daz man heist pretoriam, sol eintweders gegen
          der sunne auffgang stan oder gegen der stat, do man dan die feind
          sicht. Ist aber sach, das man im zug ist, so sol es an den tail sehen,
          da hin dan der zeug ziehen wil, auff welhem sy dan die erste cohortes,
          daz ist der erst hauff, gezelt, paner und zaichen geordnet. Aber die
          port, die man heist decumanam, die ist nach der port, die dan pretoria
          heist, und ist die port, durch welche die straff wirdige ritter zu der
          pen gefürt werden etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=194"
            note="p. 191"
          />
        </p>
        <h5>Wie man die wagenpurg beware sol</h5>
        <p>
          Der wagenpurg bewarung ist mangerlay, aber besunder dreyerlei. Wan ist
          das grosse nott nit bezwingt, so sol man die wagenpurg mit wasen umb
          machen oder mit ertreich, und auss dem wirt gemacht gleich als ein
          maur dreyer schüch hoch, also das vornen an ein grab wirt und das
          ertreich hin ein an die wege geworffen von dem, so die wasen hin dan
          genomen sind. Wirt dar nach ein grab siben oder acht schüch brayt und
          wirt sechs schüch hoch. Aber da man die feind am meisten besorgt, so
          sol der recht grab der wagenpurg bewart werden, also das er x schüch
          brayt sey und x schüch hoch nach der linien, als man dan spricht, x
          schüch. Auch auff die graben der wagenpurg sol man gut zeün machen,
          und das ertreich, das dan hin und her auss graben wirt, sol man zu
          samen tragen. Das selb ertreich bringt in die höch des grabes fier
          schüch. Also wirt der grab x schüch hoch und x schüch brayt, zu
          welchem man haben müss getüll stecken von starcken holtz, die dan die
          trabanten oder fuss knecht gewon sein zu tragen, dar zu hawen und
          schauffel und auch gute beichel, gut flegel, sensen und sichel genüg.
          Item auff yettlichem wagen, der dan an der wagenpurg stet, ein langen
          spiess, der xxiiij schüch lang sey und forne ein scharpffs eysen, daz
          gut stechen sey, und ein hacken an dem eysen, und ein Behemische
          dryschel mit eysnen zencken, und auch auff yettlichem wagen zwen haken
          büchsen schützen mit irem zeug, wan es mag gesein etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=195"
            note="p. 192"
          />
        </p>
        <h5>Wie man die wagenpurg beware sol so der feind nahet ist</h5>
        <p>
          Wan sölichs gering ist, wa nit feind sein, die wagenpurg zu bewaren.
          So aber der feind zu statt, so sol der ganz gereisig zeug und der halb
          tayl der fuss knecht ab zu treiben den einbruch an eine spitz geordnet
          werden, und die andern nach in graben machen und die wagenpurg
          bewaren. Und durch den auffbietter gezaigt werden, welche erste
          centuria, welche andre, welche dritte ein yettlichs werck vol bracht
          hab. Dar nach wirt von den centuriones geheissen daz beschawet und
          gemessen, und die sölichs mit sawmnuss getan haben, werdent gestrafft.
          Dar umb zu solicher gewonheit ist zu ordnen der new ritter, wan
          sölichs not aischet, das die wagenpurg on irrung und behend mügen
          bewart und versehen werden etc.
        </p>
        <h5>Von römischer bewarung reitter und fuss knecht</h5>
        <p>
          Darumb ist alte gewonheit beliben, und durch die auffsetzung Augusti
          und auch Adriani wirt gepoten, das zu dreyen maln in dem monet die
          reitter und auch die fuss knecht spacieren gefürt würden, wan mit dem
          wort wirt sölichs übung bedeut. Also die fuss knecht wurden geheissen
          zu gen und wider keren in die wagenpurg geharnascht und gerüst mit
          allerlay wer x tausent schritt, also das sy ein tail des wegs mit
          lauffen vol prachten. Auch die reitter getaylt in turmas und
          geharnascht vol brachten so vil wegs, also daz sy nach reyttlicher
          ordnung zu zeitten nach volgten und zu zeitten wichen und mit wider
          lauff gleich mit einer ungestiem wider umb kerten. Aber nit alain in
          dem feld, sunder auch in tellern und hohen stetten auff und ab zu
          steigen wart yettweder spitz bezwungen, dar um daz kein sach beschehen
          möcht, das dann streng vest ritter mit steter übung vor nit hettend
          erlernet etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=196"
            note="p. 193"
          />
        </p>
      </Col>
      <Col md={6}>
        <h5>Further on the Wagon Fort</h5>
        <p>
          The wagon fort, above all when the enemy is approaching, is to be made
          in a safe place, especially where there is enough wood, enough fodder
          and also enough water. And if one is to stay there longer, a healthy
          place is to be chosen. Care must be taken that there is no hill close
          to the wagon fort, so that the enemy does not seize the hill and
          besiege it. Also that the field is not liable to be flooded by
          torrents, from which the army would have to suffer hardship. The wagon
          fort is also to be fortified according to the number of horsemen and
          foot and of the equipment belonging to them, so that the multitude of
          people is not crammed into a narrow space, nor a small number spread
          out over a wide space more than is necessary, etc.
        </p>
        <h5>On the Wagon Fort</h5>
        <p>
          Wagon forts are made sometimes square, sometimes triangular and
          sometimes semicircular, as the place or necessity requires. The gate
          called <i>praetoria</i> should face either the sunrise or the place
          from which the enemy can be seen. But if the army is on the march, it
          should face the side towards which the army intends to move, and
          behind it the first cohorts, that is the first body, the tents,
          banners and standards are placed. The gate called <i>decumana</i> lies
          behind the gate called <i>praetoria</i>, and it is the gate through
          which soldiers deserving punishment are led out to be punished, etc.
        </p>
        <h5>How the Wagon Fort Is to Be Fortified</h5>
        <p>
          The fortification of the wagon fort is of many kinds, but especially
          of three. When no great necessity presses, the wagon fort is to be
          surrounded with sods or with earth, and of this something like a wall
          three feet high is made, so that a ditch is formed in front, and the
          earth is thrown inwards (?) from the place where the sods were taken.
          Then a ditch is made seven or eight feet wide and six feet deep. But
          where the enemy is most feared, the wagon fort is to be secured with a
          proper ditch, so that it is x feet wide and x feet deep below the
          line, as they say, x feet. Good fences are also to be made on the
          ditches of the wagon fort, and the earth dug out of the ditch this way
          and that is to be heaped together; this earth adds four feet to the
          height of the ditch. Thus the ditch becomes x feet deep and x feet
          wide. For this one must have palisade stakes of strong wood, which the
          trabants or foot soldiers are accustomed to carry, and also hoes and
          shovels and good axes, good flails, scythes and sickles in sufficient
          number. Item on every wagon standing in the wagon fort a long spear,
          which is to be 24 feet long with a sharp iron in front, good for
          thrusting, and a hook on the iron, and a Bohemian flail with iron
          spikes, and also on every wagon two hook-gun shooters with their
          equipment, if it can be, etc.
        </p>
        <h5>How the Wagon Fort Is to Be Fortified When the Enemy Is Near</h5>
        <p>
          It is easy to fortify the wagon fort where there are no enemies. But
          if the enemy is at hand, all the cavalry and half of the foot soldiers
          are to be drawn up in line of battle to repel the attack, and the
          others behind them are to dig ditches and fortify the wagon fort. And
          the herald is to announce which century completed its work first,
          which second and which third. After that the centurions have it
          inspected and measured, and those who have done it negligently are
          punished. Therefore the new soldiers are to be trained to such a
          practice, so that when necessity demands, the wagon fort can be
          fortified and secured without confusion and quickly, etc.
        </p>
        <h5>On the Roman Exercise of Horsemen and Foot</h5>
        <p>
          Therefore the old custom has remained, and by the ordinances of
          Augustus and Hadrian it is commanded that three times a month the
          horsemen and the foot soldiers are led out for a walk, for by this
          word such exercise is meant. The foot soldiers were ordered to march
          ten thousand paces and return to the wagon fort, armoured and equipped
          with all kinds of weapons, so that they covered part of the way
          running. The horsemen too, divided into turmae and armoured, covered
          the same distance, so that according to cavalry order they sometimes
          pursued, sometimes gave way and then turned back again in a fierce
          counter-charge. And not only in the field but also in valleys and high
          places each line was made to climb up and down, so that nothing could
          happen that brave and steadfast soldiers had not learned before by
          constant exercise, etc.
        </p>
      </Col>
    </Row>
  </>
)

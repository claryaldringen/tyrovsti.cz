import React from 'react'
import { Col, Row } from 'reactstrap'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const Sattel = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <h1>Der Sattel{draft && <DraftBadge />}</h1>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h4>
          Vybrané artikule sedlářů, které potvrdili konšelé Novoměstští 9. ledna
          1451
          {draft && <DraftBadge />}
        </h4>
        <p>
          Druhé, ktož by sě chtěl za mistra posaditi, aby sě v přijímání
          skutečném těla a krve pána našeho Jhesu Crysta pod obojí spósobú
          srovnával časy svými s jinými obyvateli našimi vedle kompaktat a smluv
          s svatým concilium Bazilejským, a aby přinesl list svého zachovánie,
          odkud jest rodem, že jest z poctivých a dobrých rodičuov a že se jest
          dobře zachoval, kdež jest prvé obýval, a to pro čest toho řemesla;
          potom aby řemeslo svú rukú udělané okázal mezi mistry, zejména tři
          sedla, jedno s kostmi, druhé pošité všecko, třetie povlečené z sucha,
          na jich pochválenie; a když to učiní a přijat bude za mistra, aby sobě
          od pánuov práva městského dobyl a do cechu mistruom dal puol kopy
          grošuov a dvě libře vosku.
        </p>
        <p>
          Třetie, kteráž jsú sedla za starodávna byla dělána v jednu kóži, ta
          mohú ještě dělána býti spravedlivě; také žádný mistr aby žádnými
          kostmi sedla vuokol neobkládal, kromě jeleních rohuov, opět ovčími
          kóžemi aby nepovláčil sedla žádného, než koží Benádckú, kromě pošitých
          sedel. Také kderýž by luk povlekl svinskú koží, aby naň nebil kosti
          nikdiež více kromě okolo hlavy. Item sedlo každé má býti dekováno
          břiezdú pod pokutú svrchupsanú. Také staré sedlo nemá býti prodáváno
          za nové pod túž pokutú; opět žádné sedlo nemá býti plátnem povlačováno
          ani svrchu ani vespod. Item kterýžby lukař bydlel v našem městě, nemá
          prodávati lukuov ven z města, leč by mistruom sedlářuom potřebie
          nebylo.
        </p>
      </Col>
      <Col md={6}>
        <h4>
          Ausgewählte Artikel der Sattler, bestätigt von den Neustädter Schöffen
          am 9. Januar 1451
        </h4>
        <p>
          Zweitens, wer Meister werden will, soll sich beim wahren Empfang des
          Leibes und Blutes unseres Herrn Jesus Christus unter beiderlei Gestalt
          zu seinen Zeiten mit den übrigen unseren Einwohnern gemäß den
          Kompaktaten und Vereinbarungen mit dem heiligen Basler Konzil
          vergleichen und einen Brief seiner Führung beibringen, woher er
          stammt, dass er ehrlicher und guter Eltern ist und sich dort, wo er
          zuvor gewohnt hat, wohl verhalten hat, dies zur Ehre des Handwerks;
          sodann soll er den Meistern die von seiner eigenen Hand gefertigte
          Arbeit vorweisen, namentlich drei Sättel, einen mit Bein, einen
          anderen ganz vernäht, den dritten trocken überzogen, zu deren
          Billigung; und wenn er dies getan hat und als Meister angenommen wird,
          soll er sich von den Herren das Stadtrecht erwerben und den Meistern
          in die Zunft ein halbes Schock Groschen und zwei Pfund Wachs geben.
        </p>
        <p>
          Drittens, Sättel, die seit alters her aus einem einzigen Leder
          gefertigt wurden, dürfen weiterhin ordnungsgemäß so gefertigt werden;
          auch soll kein Meister einen Sattel ringsum mit anderem Bein als
          Hirschgeweih belegen, noch einen Sattel mit Schafsleder überziehen,
          sondern nur mit venezianischem Leder, ausgenommen vernähte Sättel.
          Auch wer einen Sattelbogen mit Schweinsleder überzieht, soll nirgends
          darauf Bein schlagen außer um den Kopf (Vorderzwiesel). Jeder Sattel
          soll unter der oben genannten Strafe mit Birkenrinde gedeckt werden;
          auch soll ein alter Sattel nicht unter derselben Strafe als neuer
          verkauft werden. Wiederum soll kein Sattel mit Leinwand überzogen
          werden, weder oben noch unten. Auch soll kein Bogenmacher, der in
          unserer Stadt wohnt, Bögen außerhalb der Stadt verkaufen, es sei denn,
          die Sattlermeister hätten keinen Bedarf daran.
        </p>
        <p>
          Anmerkung: Bögen bedeuten in diesem Zusammenhang Hinterzwiesel und
          Vorderzwiesel. Der Bogenmacher (auf Tschechisch{' '}
          <i>&bdquo;lukař&ldquo;</i>, auf Lateinisch{' '}
          <i>&bdquo;arcuficis&ldquo;</i>) ist ein Handwerker, der Sattelgestelle
          fertigt.
        </p>
      </Col>
    </Row>
  </>
)

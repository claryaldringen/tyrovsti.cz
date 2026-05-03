import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BitvaNaKrbavskemPoli = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bitva-na-krbavskem-poli" />
        <h4>Bitva na Krbavském poli (1493){draft && <DraftBadge />}</h4>
        <p>
          Bitva na Krbavském poli, svedená <b>9. září 1493</b> v Lice (dnešní
          Chorvatsko), byla zničující porážkou chorvatské bánské armády vedené
          bánem Emerikem Derenčínem proti osmanským akindžiům pod velením
          bosenského sandžak-bega Hadima Jakuba Paši. Bitva je v chorvatské
          tradici nazývána „pohromou chorvatského království&ldquo;.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Krbava_Field"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po pádu Bosny roku 1463 se chorvatské země ocitly na frontové linii
          osmanských nájezdů. Akindžijové, lehká nepravidelná jízda placená
          výhradně z kořisti, vyplenili během léta 1493 Krajinu, jihozápadní
          Štýrsko a Korutany. Při návratu z plenící výpravy s rozsáhlou kořistí
          a zástupem zajatců se vraceli přes chorvatské území. Bán Emerik
          Derenčín svolal chorvatskou šlechtu, aby Osmanům zatarasil cestu.
        </p>
        <p>
          Chorvatské vojsko čítalo přibližně 8 000 mužů, převážně těžké rytířské
          jízdy, doplněné pěchotou. Osmanských akindžiů bylo srovnatelně, podle
          některých odhadů až 8 000 až 10 000. Hadim Jakub Paša nabídl bánovi
          volný průchod výměnou za část kořisti, ale Derenčín návrh odmítl a
          trval na otevřené bitvě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Krbava_Field"
          />
        </p>
        <p>
          O bitvě máme řadu pramenů z první ruky. Nejstarší dochovanou zprávu
          představuje glagolský zápis kněze Martince z Grobnické farnosti v{' '}
          <i>Novljanském druhém breviáři</i> (Novljanski II. brevijar), psaný
          krátce po události, který popisuje, jak{' '}
          <i>„naval na jazik hr&apos;vatski&ldquo;</i> Turci a jak{' '}
          <i>„tagda nače cviliti rod&apos; hr&apos;vatski&ldquo;</i> — tehdy
          počal kvíleti rod chorvatský. Druhým klíčovým pramenem je list
          ninského biskupa <b>Juraje Divniće</b> papeži Alexandru VI. ze 27.
          září 1493 a paralelní zpráva papežského legáta{' '}
          <b>Antonia Fabreguese</b> ze Senje ze 13. září 1493. Český cestovatel{' '}
          <b>Jan Hasištejnský z Lobkovic</b> zaznamenal zprávu o bitvě ve svém
          itineráři pod 23. zářím 1493. Z osmanské strany podává líčení{' '}
          <b>Hoca Sadeddin Efendi</b> ve svém díle <i>Tac üt-tevarih</i> (Koruna
          kronik).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hr.wikipedia.org/wiki/Krbavska_bitka"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh</h5>
        <p>
          Derenčín odmítl radu starších velitelů, mimo jiné knížete Bernardina
          Frankopana, kteří doporučovali zaútočit na Osmany při přechodu
          horských průsmyků. Místo toho zvolil střet na otevřené pláni
          Krbavského pole, čímž vyhrál akindžijům výhodný terén pro manévr lehké
          jízdy. Hadim Jakub Paša rozdělil svou jízdu na tři části — centrum a
          dva boční obchvatné oddíly skryté v záloze.
        </p>
        <p>
          Když chorvatská těžká jízda zaútočila do středu, akindžijové
          předstíraně ustoupili a vlákali rytíře hluboko do svého šiku. Skryté
          oddíly poté zaútočily na chorvatská křídla a zezadu, čímž vojsko
          obklíčily. Bitva se zvrhla v jednostranný masakr. Z vůdců padli
          knížata <b>Ivan Frankopan Cetinski</b>, <b>Mihovil Frankopan</b>,{' '}
          <b>Petar Zrinski</b>, <b>Juraj Vlatković</b> a Mikuláš z Bužimu. Bán
          Derenčín a jeho syn byli zajati. Bernardin Frankopan z bojiště uprchl.
          Sadeddin Efendi uvádí, že Hadim Jakub Paša po bitvě nechal zajaté
          křesťanské bojovníky pobít, šlechtu si však ponechal pro výkupné. Z
          chorvatské strany podle moderních odhadů padlo nebo bylo zajato 10 000
          až 13 000 mužů, osmanské ztráty činily přibližně 1 000.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Krbava_Field"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Výsledek</h5>
        <p>
          Pohroma na Krbavském poli zlomila vojenskou sílu chorvatské šlechty.
          Zničení rytířské třídy uvolnilo cestu osmanským nájezdům do
          Chorvatska, Kraňska a Štýrska v následujících desetiletích. Při tažení
          a bezprostředně po něm bylo vypleněno modrušské opatství a desítky
          kostelů v Záhoří. Postupně padla většina středověkého chorvatského
          území, takže Chorvati po roce 1526 začali nazývat zbytek svých zemí{' '}
          <i>„reliquiae reliquiarum olim inclyti regni Croatiae&ldquo;</i> —
          pozůstatky pozůstatků kdysi slavného chorvatského království.
        </p>
        <p>
          Krbavská porážka výrazně proměnila osídlení i správu chorvatských
          zemí. Ozbrojený lid se z Liky a Krbavy stahoval na severozápad k
          uherskému Záhoří a do oblasti Kraňska, kde Habsburkové od počátku 16.
          století budovali Vojenskou hranici (<i>Militärgrenze</i>). Z jihu
          naopak postupně přicházeli vlaští pastevci a srbští <i>uskoci</i>,
          kteří původní chorvatské obyvatelstvo nahrazovali. Pozdně středověké
          chorvatské stavovské zřízení s typickou velmožskou jízdou Frankopanů,
          Zrinských a Karlovićů již bitva u Krbavy definitivně neumožnila
          obnovit.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Croatian_Military_Frontier"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých žoldnéřů v bitvě není písemně doložena —
          chorvatská bánská armáda se opírala především o místní šlechtické
          kontingenty a jejich družiny. Čeští a moravští žoldnéři však v té době
          sloužili v jagellonské uherské armádě Vladislava II. Jagellonského a v
          posádkách jižní obranné linie podél Sávy. Po krbavské pohromě rostla v
          jagellonském soustátí poptávka po profesionálních žoldnéřích z Čech,
          kteří doplňovali stálé pohraniční posádky a černé roty Hunyadiho
          dědictví.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <p>
          Doloženým českým ohlasem bitvy je již zmíněný cestopis Jana
          Hasištejnského z Lobkovic, který v září 1493 procházel Senjem na cestě
          do Svaté země a zaznamenal zprávu o porážce krátce po události. Jeho
          zpráva patří k nejranějším českým svědectvím o střetu a dokládá, že
          Krbavská bitva měla rezonanci i v českém kulturním prostoru, kde
          panovník Vladislav II. Jagellonský musel okamžitě reagovat posílením
          jižních posádek.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hr.wikipedia.org/wiki/Krbavska_bitka"
          />
        </p>
      </Col>
    </Row>
  </>
)

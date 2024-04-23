import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'

export const Estok = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="estok" />
        <h4>Estok (Harnischkampfschwert)</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Estok (polsky <i>estok</i>, anglicky i francouzsky <i>estoc</i>) je
          meč s velmi úzkou a tuhou čepelí, která měla projít některou mezerou v
          plátové zbroji a následně kroužkovou zbrojí. Od podobného končíře
          (polsky <i>koncerz</i>) se liší zejména obouručním úchopem
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Estok"
          />{' '}
          i když oba druhy mečů bývají v literatuře často zaměňovány. U němců
          spadá končíř i estok do kategorie mečů <i>Panzerbrecher</i>{' '}
          (propichovač brnění), ale pro variantu estoku používanou při{' '}
          <i>Harnischfechten</i> (šermu ve zbroji) mají němci termín{' '}
          <i>Harnischkampfschwert</i>. Aby celá věc byla ještě více matoucí,
          termín <i>Harnischkampfschwert</i> se používá pro všechny meče určené
          pro <i>Harnischfechten</i>, tj. i cvičné meče s vybráním čepele pro
          úchop zvaný <i>Halbschwert</i>{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Panzerbrecher"
          />
          , které však nemají tak úzkou čepel jako estoky. Tento článek se však
          bude zabývat speciální kategorií estoků (harnischkampfschwertů), které
          jsou nějakým způsobem upravené k zasazování úderů, zejména pak známého{' '}
          <i>Mortschag</i>. Takové estoky, na pomezí meče a válečného kladiva,
          se dochovaly (nejspíš) tři.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="estoc14.jpg"
        width={530}
        height={1200}
        title="Klasický estok s obouručním úchopem z počátku 16. století."
      />
      <ImageWithTitle
        md={3}
        src="estoc15.jpg"
        width={960}
        height={1200}
        title="Končíř s jednoručním úchopem z Metropolitního muzea v New Yorku, konec 16. století."
      />
      <ImageWithTitle
        md={3}
        src="estoc16.jpg"
        width={760}
        height={2218}
        title={
          <>
            Cvičný <i>Harnischkampfschwert</i> z Kunsthistorisches museum ve
            Vídni, který není estokem.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="harnischkampfschwertes.jpeg"
        width={784}
        height={1200}
        title="Harnischkampfschwerty (první dva, třetí je určen k boji se štítem) na iluminaci z manuskriptu Hanse Talhoffera, 1459."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Tzv. <Cit>Teutonský estok</Cit>
        </h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc1.png" width={2720} height={440} title="" />
    </Row>
    <Row>
      <ImageWithTitle
        src="estoc2.png"
        width={2720}
        height={440}
        title="Obr. 1"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Tento estok je součástí depozitu Muzea knížat Czartoryských, který je
          nyní uchováván ve zbrojnici Královského hradu Wawel v Krakově, pod
          inventárním číslem MNK XIV-49. Je datován přibližně do 14. nebo 15.
          století. Má zcela zachovanou tlustou ocelovou čepel obdélníkového,
          téměř čtvercového průřezu, která se zužuje do mírně zaoblené špičky.
          Ani jedna z hran ani špička nevykazuje známky broušení. Záštita má
          tvar jednoduchého kříže z tlustých ocelových prutů, které se zužují do
          zaoblených hrotů a jsou také téměř čtvercového průřezu (obr. 3 a 4).
          Trn je tlustý a čtvercového průřezu (obr. 3), zploštělý v rovině
          záštity. Na rukojeti je dostatek místa pro přibližně jednu a půl
          průměrné mužské ruky. Na trn bylo provizorně nasazeno dřevěné
          obložení. Je trochu širší uprostřed (obr. 1). Nicméně pokrývá pouze
          jednu stranu a je pravděpodobně mnohem mladší než samotný artefakt, na
          kterím jej drží pouze stříbrná plaketa s nápisem{' '}
          <Cit>Teutonské z královské pokladnice</Cit>
          připevněná v polovině 19. století. Hlavice je velká a masivní,
          tvarovaná jako nepravidelný tetrakaidekahedron se čtyřmi konkávními
          stranami (obr. 5). Celá zbraň je dlouhá 1586 mm a váží 4050 g. Její
          težiště se nachází na čepeli, 230 mm daleko od spodní hrany záštity.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={7}
        src="estoc3.png"
        width={1040}
        height={570}
        title="Obr. 3"
      />
      <ImageWithTitle
        md={5}
        src="estoc4.png"
        width={734}
        height={570}
        title="Obr. 4"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc5.png"
        width={958}
        height={702}
        title="Obr. 5"
      />
      <ImageWithTitle
        md={4}
        src="estoc9.png"
        width={756}
        height={848}
        title="Obr. 8"
      />
    </Row>
    <Row>
      <Col>
        <h6>Čepel</h6>
        <p>
          Čepel je vyrobena z oceli a je dobře zachovaná (obr. 1). Hrany čepele
          a špička jsou mírně zaoblené. Čepel je mírně ohnutá v rovině kolmé na
          rovinu záštity. Ohnutí je viditelné asi na třech čtvrtinách délky
          čepele, blíže ke špičce a nepřesahuje 1 mm od dlouhé osy čepele. Zatím
          nejsme schopni určit, kdy ani za jakých okolností k tomuto
          zdeformování došlo. Na všech čtyřech plochách čepele jsou mečířské
          značky ve formě pěticípé hvězdy a půlměsíce, každá o průměru 5 až 6 mm
          (obr. 8). Dva znaky na opačných stranách čepele jsou umístěny 45 mm od
          spodního okraje záštity, zatímco další dva jsou od ní vzdáleny 53 mm.
          Čepel je dlouhá 1346 mm. U záštity je její šířka 29,5 mm a síla 25,5
          mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
        <h6>Záštita, jílec a hlavice</h6>
        <p>
          Hlavice je velká a masivní (obr. 5, 6 a 7). Na jejích dvanácti stěnách
          jsou kruhové důlky o průměru 2 až 4 mm a hloubce až 2 mm (obr. 5 a 6).
          Kromě toho na ní byly vyryty tři mečířské značky, analogicky těm na
          čepeli, z nichž jedna je kompletně zachovaná. Kompletní značka má
          kruhový tvar a její průměr je 4 mm. Průměry zbývajících značek jsou
          menší, přibližně 3 mm. Trn je tlustý a robustní, odpovídající
          velikosti hlavice a čepele (obr. 3). Ale jeden neobvyklý detail upoutá
          pozornost. Špička trnu nepřesahuje nad horní část hlavice a ani v
          nejmenším a nevykazuje žádné známky kování (obr. 3 a 7). Navíc ji
          obklopuje tmavá výrazná skvrna, což možná svědčí o chybějícím nýtu
          (obr. 7). Záštita je robustní (obr. 3 a 4). Její ramena zaoblenými
          hroty a podobně jako čepel mají téměř čtvercový průřez o úhlopříčce 13
          mm. Záštita je dlouhá 208 mm. Na obou stranách jsou nějaké drobné
          škrábance a oděrky nebo prohlubně, ale obecně nejsou viditelné žádné
          stopy užívání nebo opotřebení pouhým okem. Jílec je dobře zachovaný.
          Všechny prvky jsou vyrobeny z oceli, avšak jelikož nebyla provedena
          žádná chemická analýza, její kvalita zůstává neznámá. Rozměry hlavice
          jsou: výška 63 mm, šířka 84 mm, síla 85 mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="estoc6.png"
        width={1648}
        height={724}
        title="Obr. 6"
      />
      <ImageWithTitle
        md={6}
        src="estoc7.png"
        width={1640}
        height={818}
        title="Obr. 7"
      />
    </Row>
    <Row>
      <Col>
        <h5>Estok z Vilniusu</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc10.png" width={2744} height={592} title="" />
    </Row>
    <Row>
      <p>
        Tento estok je uchováván v Litevském národním muzeu ve Vilniusu
        (registrovaný jako &apos;dvouruční meč&apos;, inventární číslo IM-839).
        Bohužel jediné dostupné fotografie pocházejí z katalogu sbírky muzea
        publikovaného v roce 1979. Ukazují zbraň připomínající estok s čepelí
        obdélníkového průřezu, dvouruční rukojetí, ostrými špičkami záštity a
        kulatou, hrotitou hlavicí. Její písemný popis je v souladu s těmito
        pozorováními . Známé rozměry artefaktu jsou: celková délka zbraně 135 cm
        a délka čepele 99 cm. Je datován mezi 14. a 16. století a poskytuje
        nejbližší analogii výše zmíněnému krakovskému estoku, která je známá.
        Bohužel, personál muzea ve Vilniusu jej považuje za padělek z 19.
        století, což nebylo zaznamenáno ve zmíněném katalogu. Nicméně se zdá, že
        v současné době neexistují rozhodující důkazy pro tuto představu. Navíc
        je zbraň velmi podobná mečům zobrazeným v kompendiu Paula Hectora Maira.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <Col>
        <h5>Estok kombinovaný s ručnicí</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc13.jpg" width={1920} height={469} title="" />
    </Row>
    <Row>
      <p>
        Zbraň se nachází ve sbírkách Královských zbrojnic (Royal Armouries) ve
        Velké Británii pod inventárním číslem XIV.10. Kombinuje estok s ručnicí.
        Je datována okolo roku 1520 a předpokládá se, že kdysi patřila notoricky
        známému králi Jindřichovi VIII. Má čepel estoku a robustní, špičatou
        záštitu, zatímco místo jílce a hlvice má hlaveň ručnice, která je
        připojena k trnu zakončenému šroubem.
        <Qt publication={PUBLICATIONS.TALAGA} /> Zbraň je dlouhá 195 cm.
        <Qt
          publication={PUBLICATIONS.RA}
          href="https://royalarmouries.org/collection/object/object-1294"
        />{' '}
        Bohužel nic bližšího k ní zatím nebylo publikováno.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc11.jpg"
        width={1920}
        height={503}
        title=""
      />
      <ImageWithTitle
        md={4}
        src="estoc12.jpg"
        width={1256}
        height={1920}
        title=""
      />
    </Row>
  </>
)

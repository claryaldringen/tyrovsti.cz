import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ImageWithTitle } from '../../../ImageWithTitle'

export const Sukne = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="sukne" />
        <h4>Sukně</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Sukně byla základním typem svrchního oděvu. Byla ušita nejčastěji z
          vlněného sukna, odtud pak její název. Mohla být různých délek. Dlouhá
          varianta se nejspíš mohla nzývat <i>reverenda</i>, jak ukazuje zápis z
          roku 1478, že pražský sladovník Rameš chodil v{' '}
          <Cit>reverendě nové barvy</Cit>. Sukně mohly být podšité látkou,
          kožešinou nebo i nepodšité. Tak roku 1425 odkazuje Tomášek z Hlohovic
          svému bratru <Cit>sukni s beránčím kožichem</Cit> a{' '}
          <Cit>sukni parvířku s liščím kožichem</Cit>. Týž Tomášek měl však i{' '}
          <Cit>sukni modrú nepodšitú</Cit>. Plzeňský měšťan Jan Chudoba odkázal
          v roce 1432 ze svého šatníku{' '}
          <Cit>knězi Šimanovi sukni černú svú s liščím kožichem</Cit> a mistr
          Petr, rovněž z Plzně, zmiňuje v roce 1492{' '}
          <Cit>harasovú suknici krátkú podšitú</Cit>. Pražský sladovník Duchek,
          jenž zemřel roku 1437, měl kromě jiného tři sukně, jednu{' '}
          <Cit>šerú s beránčím kožichem črným</Cit>, jinou <Cit>s liškami</Cit>{' '}
          a jinou <Cit>s plátnem</Cit>, tj. podšitou lněnou tkaninou (plátno v
          této době nutně neznamená plátnovou vazbu, ale označuje lněnou látku).
        </p>
        <p>
          Ke konci 15. a začátkem 16. století zachycujeme v písemných pramenech
          i sukně lemované kožešinou. Například v jindřichohradeckých knihách se
          roku 1496 uvádí <Cit>červená, lasicí opremovaná</Cit>, která stála 2
          kopy grošů. V roce 1503 pak ukradl služebník urozené paní Barboře z
          Vrchlabí také{' '}
          <Cit>
            sukni atlasovou zelenou, kožichem podšitou a lasičkami opremovanou
          </Cit>
          .
        </p>
        <p>V Českých zemích můžeme vysledovat tři nejčastější varianty:</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Sukně prostá</h5>
        <p>
          Sukně více či méně košilového střihu různých délek, buď s uzkými nebo
          širokými rukávy. Označení &bdquo;prostá&ldquo; se netýká materiálu,
          který mohl být vskutku honosný, ale relativní jednoduchosti střihu.
          Mohla být zdobena tehdy módním řasením čili vrapováním. V české
          ikonografii mají váženější postavy (např. starší, světci, andělé atd.)
          zpravidla velice prosté, ale také velmi dlouhé sukně.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Jan Žižka v prosté sukni s úzkými rukávy a praporečník v prosté sukni s širokými rukávy. Výřez z Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        src="sv-sebestian-jenikov.jpg"
        width={221}
        height={482}
        title="Sv. Šebestián v módní krátké zelené sukni podšité hnědou kožešinou se širokými rukávy, bočními rozparky na šorcu a vrapováním na výřezu z oltáře z Jeníkova, kolem roku 1460."
      />
      <ImageWithTitle
        src="kutnohorska1.jpg"
        width={524}
        height={520}
        title="Muž v prosté sukni a plášti, výřez z Bible Kutnohorské, 1489."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Sukně typu <i>vestina</i>
        </h5>
        <p>
          Sukně, pro kterou mají italové pojmenování <Cit>vestina</Cit>, se
          vyznačuje vypasovaným hrudníkem, který byl opatřen zapínáním, a více
          či méně vrapovaným šorcem různých délek, zpravidla však ne delším, než
          lehce pod kolena.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Řasená sukně s pytlovitými rukávy</h5>
        <p>
          Tento typ sukně, na západě známý jako se vyznačuje pytlovitými rukávy
          a bohatým řasením po celé délce. Česká varianta se od svých
          západoevropských vzorů odlišuje zejména konstrukcí rukávů. Zdá se, že
          v Čechách se udržel hluboký průramek, tzv. <i>grande assiette</i>, což
          českým sukním tohoto typu propůjčuje poněkud splihlý vzhled, zvláště v
          kombinaci s kabáty, které nemají vycpaná ramena, jak bylo obvyklé
          např. v Burgundsku a Francii. České rukávy byly také zpravidla
          hranatější a měly pouze jeden otvor, kudy šla ruka prostrčit a to
          zhruba v úrovni loketní jamky. Tuto konstrukci rukávu lze nepřímo
          potvrdit i některými písemnými prameny. Tak lze v jedné rakovnické
          soudní knize číst k roku 1486 zápis:
          <i>
            &bdquo;Poručil jsem, aby kladl peníze do truhly, a on kladl do
            rukáva sukně své.&ldquo;
          </i>{' '}
          Jinde zase lze číst:{' '}
          <i>
            &bdquo;Vyňal peníze s měchýřem, dosti pěkný uzlík, a vložil je do
            rukáva.&ldquo;
          </i>
        </p>
      </Col>
    </Row>
  </>
)

import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const InstrukceMarkrabiAlbrechtaOSikovaniVozu = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="instrukce-markrabi-albrechta-o-sikovani-vozu"
        />
        <h4>
          Instrukce markrabí Albrechta z roku 1477 o šikování vozů
          {draft && <DraftBadge />}
        </h4>
        <p>Přeložila PhDr. Zdeňka Kopková</p>
        <p>
          Poznámky k překladu: V němčině se pro vozovou hradbu užívá termínu{' '}
          <i>wagenberg</i>, což odpovídá spíše překladu <i>vozový hrad</i>.
          Mluví-li se tedy v textu o vozové hradbě, jsou tím myšleny úplně
          všechny vozy, bez ohledu na to, jestli je vozová hradba, tak jak ji
          chápeme v českých reáliích, postavena, či zda jsou vozy v pohybu, jak
          se o tom mluví v následujícím textu.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>Zu der macht des heerzugs muss man haben tausend wagen </li>
          <li>
            Item II<sup>m</sup> dort in, ausserhalb der frunt ...
          </li>
          <li>
            Item zu den tausent wagen sollen zu iglichen wagen X mann geordnet
            werden, das macht: X tausend mann, nemlich tausend wagenknecht,
            tausend schäufler, die da graben zu befestigung und notdurft des
            heers und gewinnung der sloss, und VIII<sup>m</sup> guter gerüster
            drabanten; das ist die austeilung der zehner, die zu einem jeden
            wagen gehören, die bleiben halb bei den wagen, und halbe uf den
            platz.
          </li>
          <li>
            Item ein iglicher wagen muss haben zwei schaufel, einen bickel, ein
            beiel und ein hauen.
          </li>
          <li>
            Item zwu zaun gegen einander, und darüber ein höbelen (häub- lein)
            uf das geringst mit einer groben leinwand uberdeckt.
          </li>
          <li>
            Item under den tausent wagen mussen IV<sup>c</sup> wagen sein, die
            zu der äussersten zeil, die man beschliessen muss, dienen; der jeder
            muss haben ein britt, das man of der äusseren seiten anhenkt zu
            notdurft der wagenburg, das zuoberst an den leiterbaum gehenkt
            werden und herabreichen soll bis zu halbem rad, und unden an dem
            wagen zwuschen den rädern ein angehangen britt. Es mussen auch
            dieselben IIII<sup>c</sup> wagen haben: ketten, damit man sie
            zusammen schleusset. Und die andern VI<sup>c</sup> wagen sollen
            haben seil, damit man sie sperret als ander wagen, und mussen alle
            sein nach dem muster, das wir zu Berlin gelassen haben...
          </li>
        </ol>
        <h5>Ordenung eines heerzoges.</h5>
        <p>
          Item es zeihet (ziehet) E. G. mit einer grossen wagenborg, und
          sunderlich wenn die wagenborg im zoge ist, so bestelle E. G. die warte
          gar wohl und vorn, hinder und vordern wagenborg, und blibt mit allem
          volk in der mitte neben der wagenborg, ab sie hindern oder vorn
          angegriffen worden, dass man kan zu holfe kommen. Ein wagenborg kann
          nicht an allen orten ubern wasser, graben, thale, berge und holz in
          ihren IV zeilen, wie sich das geboret, gehen; und also sic IIzeilicht
          gehet, mussen sie sich gar lang erstrecken, daromb kann man zu zeiten
          hinden oder vorn ein rad abgehen, sunderlich als ich gehort, E. F. G.
          habe uber tausend heerwagen, ane (ohne) futterwagen, nechstmals im
          felde gehabt.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:1a5fff7e-12a4-4ef8-9374-71fcfbdf16cd"
          />
        </p>
      </Col>
      <Col md={6}>
        <ol>
          <li>K&nbsp;síle vojenského tažení je třeba mít tisíc vozů …</li>
          <li>Dále 2000 tam uvnitř, mimo frontu…</li>
          <li>
            K&nbsp;tisícům vozů musí být ke každému vozu přiřazeno X mužů, tj. X
            tisíc mužů, tedy tisíc vozových pacholků, tisíc kopáčů, kteří kopají
            zeminu pro opevnění a potřebu vojska a dobytí zámku a 8000 dobře
            vyzbrojených trabantů; to je rozdělení do desítek, které patří ke
            každému vozu a ti zůstanou z&nbsp;poloviny na voze a z&nbsp;poloviny
            na místě.
          </li>
          <li>
            Každý vůz musí mít dvě lopaty, jeden krumpáč, jednu sekeru a jednu
            motyku.
          </li>
          <li>
            Dva ploty proti sobě a nad tím víko překryté nejméně jedním hrubým
            plátnem.
          </li>
          <li>
            Mezi tisíci vozy musí být 400 vozů, které slouží
            k&nbsp;nejkrajnějšímu konci, který se musí uzavřít; každý musí mít
            jedno prkno, které v&nbsp;případě nutnosti zavěsí na vnější stranu
            vozové hradby, které se zavěsí úplně nahoru na štafle a musí sahat
            dolů až do poloviny kola a dole u dvou vozů mezi dvěma koly zavěšené
            prkno. Také těchto 400 vozů musí mít řetězy, aby se společně
            svázaly. A ostatních 600 vozů musí mít provaz, aby se zavřely jako
            jiné vozy, a všechny musí být podle vzoru, který jsme nechali
            v&nbsp;Berlíně….
          </li>
        </ol>
        <h5>Pořadí vojenského tažení</h5>
        <p>
          E.G. táhne s&nbsp;velkou vozovou hradbou a postaví stráž nejspíš
          dopředu, dozadu a před vozovou hradbu a zůstane s&nbsp;veškerým lidem
          uprostřed vedle vozové hradby, aby mohli přijít na pomoc, když budou
          napadeni zepředu nebo zezadu. Jedna vozová hradba nemůže jet na všech
          místech přes vodu, příkop, údolí, hory a lesy ve IV řadech, jak se
          patří, a musí se tedy roztáhnout do délky, proto se může občas vzadu
          nebo vpředu odklonit jedno kolo, obzvláště (když) jak jsem slyšel, měl
          E.F.G v&nbsp;poli přes tisíc vojenských vozů, bez vozů
          s&nbsp;proviantem.
        </p>
      </Col>
    </Row>
  </>
)

import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const Doublet = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="doublet" />
        <h4>Doublet</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          In medieval Czech, the term <i>kabát</i> was used for doublet. This
          term have been used since the 14th century to denote a shorter and
          fitted garment and as a synonym for the German <i>wams</i>,{' '}
          <i>jacke</i>, <i>schecke</i>, or <i>rock</i>, the French{' '}
          <i>pourpoint</i>, <i>rochet</i>, <i>roquette</i>, or the English{' '}
          <i>jacket</i>, <i>rocket</i>
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:50711a90-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          and <i>doublet</i>, from the Italian <i>giubbetta</i>.
          <Qt
            publication={PUBLICATIONS.WEDGWOOD}
            href="https://babel.hathitrust.org/cgi/pt?id=uc1.b3924121&view=1up&seq=82"
          />
        </p>
        <p>
          The words <i>kabát</i>, <i>rock (waffenrock)</i>,{' '}
          <i>doublet (arming doublet)</i>, and <i>pourpoint</i> also denoted a
          type of quilted garment, and in Czech, the first use of the word{' '}
          <i>kabát</i> at the turn of the 13th and 14th centuries is associated
          specifically with the term for a quilted garment in the Alexandreida{' '}
          <Qt publication={PUBLICATIONS.ALEX} note="Page 43" /> and it remained
          at least throughout the entire 15th century, as we can read in the{' '}
          <i>Very Nice Chronicle about Jan Žižka</i>:{' '}
          <Cit>
            Tiem jest polniem vojskem vládl kněz Prokop Holý. Pak ten jest býval
            k bitvě na špici v tlustém kabátě.
          </Cit>{' '}
          (Thereby the field army was led by Priest Prokop the Holy. Then he
          used to be at the front in battle in a thick doublet.)
          <Qt publication={PUBLICATIONS.KRONIKAPEKNA} /> It is a question
          whether the Czech word <i>kabát</i> originated from the Old German{' '}
          <i>gewæte</i>
          <Qt publication={PUBLICATIONS.GEBAUER} /> or is also derived from the
          Italian <i>giubbetta</i>.
        </p>

        <p>
          Although doublets were used to attach hose earlier, as evident from
          the hose ties on the pourpoint of Charles de Blois, the combination of
          a doublet and attached hose became widely popular in Bohemia around
          the mid-15th century, making the doublet a functional part of clothing
          that straddles the line between undergarment and outerwear, which also
          corresponds to the establishment of a separate doubletmakers&apos;
          guild in 1441.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:5988fc10-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          As hose gradually become pants and their waistline is raised, doublets
          also become shorter and by the end of the 15th century, they once
          again become a full-fledged outer garment. A brief outline of the
          evolution of the doublet can be seen in the following images.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat1.jpg"
        width={375}
        height={323}
        title="Early doublet with wide sleeves, worn as an outer garment, on a cut-out from the Bible of Wenceslaus IV (1389-1395)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="A coinmaker who is stripped down to just his hose and doublet when working. The second coinmaker in the same fresco is wearing a vestina-type skirt over his doublet. Cutout from a fresco in the Coinmakers' Chapel of the Cathedral of St. Barbara in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat3.jpg"
        width={1643}
        height={1643}
        title="Wrestlers in short doublets of fashionable cut and colour on a fresco from the Red Bastion at Švihov Castle, around 1500."
      />
    </Row>
    <Row>
      <Col>
        <p>
          As previously mentioned, during the king George of Poděbrady era, the
          doublet was somewhat of an intermediate stage between undergarment and
          outerwear, not only in Bohemia. Therefore, the body of the doublet
          could be made from cheaper, for example, undyed fabric. This is also
          reflected in the will of the kettle-maker Martin from what is now
          Spálená Street in Prague, who in 1477 left{' '}
          <Cit>dva rukávy aksamitové od kabáta</Cit> (two velvet sleeves from a
          doublet)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6c9674e0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          . Given that the doublet formed a single entity with hose, it was
          fashionable to have hose and a doublet, or at least their visible
          parts, in the same color, ideally contrasting with the outer skirt or
          cloak.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat4.jpg"
        width={1920}
        height={1579}
        title="A doublet with undyed body on illumination from Hans Talhofer's fechtbuch, Germany, 1459."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="A doublet and hose in the same (black) colour. Cutout from the Brno Law Book of Václav of Jihlava (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="A doublet and hose in the same (red) colour. Cutout from the Codex of Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          The lack of Czech pictorial sources and the fact that during the king
          George of Poděbrady era the doublet was an intermediate layer between
          the undergarment and the outerwear greatly complicates research
          efforts. Nevertheless, some details and differences compared to other
          regions can be traced. The sleeves of Czech doublets are either narrow
          or wide, tightened with a short cuff at the wrist. In contrast,
          shoulder padding according to Burgundian fashion or gathering of the
          upper half of the sleeve as in Italian fashion is not found.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="A coinmaker in a doublet with narrow sleeves. Cutout from a fresco in the Coinmakers' Chapel of the Cathedral of St. Barbara in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={3}
        src="kabat6.jpg"
        width={600}
        height={600}
        title="A priest wearing a doublet with wide sleeves, cuffed at the wrist. Cutout from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="kabat7.jpg"
        width={230}
        height={273}
        title={
          <>
            A doublet with padded shoulders according to Burgundian fashion.
            Detail from the painting <i>The Execution of the Innocent Count</i>{' '}
            by the painter Dieric Bouts, Netherlands, 1460.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="kabat8.jpg"
        width={667}
        height={864}
        title="A doublet with ruffled upper half of sleeves, cut-out from a fresco by Paolo di Stefano Badaloni, Florence, 1460"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Comparing the doublet from the fresco in the Coinmakers&apos; Chapel
          of St. Barbara&apos;s Church in Kutná Hora with contemporary German
          patterns, it seems that Czech doublets were somewhat more archaic in
          style, i.e., with a long part tightly wrapping around the belly and
          tied with a single lace, and a very arched, likely padded chest, which
          however may not be as tightly fastened as the abdominal part and thus
          either fastened with buttons or several laces passing through opposing
          pairs of holes.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat9.jpg"
        width={464}
        height={692}
        title="A doublet with a long belly-hugging part tightened tightly on one lace. The chest no longer needs to be so tightly cinched and is fastened with several laces passing through opposing pairs of holes. Cut from Königsegg Treatise, Germany, (1446-1459)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Although this doublet should be similar in date to the German doublet in the following picture, it retains its archaic shape with a tightly tightened single-laced belly-hugging part and a looser buttoned chest. Cutout from a fresco in the Coinmakers' Chapel of St Barbara's Cathedral in Kutná Hora(1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat10.jpg"
        width={1780}
        height={1678}
        title="A younger type of short belly part doublets, worn in Germany at that time. Page from Hans Talhofer's Fechtbuch, Germany, (1459)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Some insights into the construction of doublets can be gleaned from
          certain articles of the New Town doubletmakers&apos; guild, which were
          confirmed on <b>August 16, 1448</b>:
        </p>

        <p>
          <Cit>
            Třetie, aby byly dělány barchanové kabáty v prostředku plátnem
            novým, a bavlna aby byla v prsy, a vespod aby bylo plátno nové nebo
            cvilink bez přimiešenie vetchého; a v kožené kabáty aby bylo vetché
            plátno v prostředek, a vespod nové bez přimiešenie vetchého. Také
            aby vetché plátno nebylo děláno pod barchanové kabáty ani kožené ani
            cvilinkové, nebo pod rukávy aby žádného vetchého mandlovaného na trh
            nedělali.
          </Cit>{' '}
          (Thirdly, that fustian doublets be made with new linen in the middle,
          and a raw cotton should be in the chest, and below there should be new
          linen or coarse linen fabric without the addition of old material; and
          in leather doublets, there should be old linen in the middle, and new
          at the bottom without the addition of old. Also, old linen should not
          be used under fustian doublets nor leather nor coarse linen doublets,
          nor should any old quilted material be made for the market under the
          sleeves.)
        </p>
        <p>
          <Cit>
            Desáté a poslednie, v harasové kabáty aby bylo děláno dvuoje plátno
            v prsy svrchnie, a v pokošinové též, pod pokutami svrchupsanými.
          </Cit>{' '}
          (Tenth and last, in woolen doublets there should be two layers of
          fabric in the upper chest, and in the (another) woolen ones as well,
          under the penalties mentioned above.)
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=458"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          While in Western Europe the laces used to tie hose to the doublet were
          visibly tied to a single loop, in Central Europe it was customary to
          wear these laces hidden, as evident from the following images.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        width={564}
        height={988}
        src="memling.jpg"
        title="A doublet tied to hose with visible knots on the laces. Cutout from the altar of St. John by Hans Memling, 1479."
      />
      <ImageWithTitle
        md={3}
        width={373}
        height={480}
        src="stetisvjiri.jpg"
        title="A doublet tied to hose with visible knots on the laces. St. George's Centenary, Friedrich Herlin, 1462 - 1465."
      />
      <ImageWithTitle
        md={3}
        width={978}
        height={1188}
        src="talhofer1.jpg"
        title="The laces between the hose and the doublet are only hinted at here, as the knot is hidden on the inside. Page from Hans Talhofer's Fechtbuch, Germany, (1459)."
        href="talhofer2.jpg"
      />
      <ImageWithTitle
        md={3}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="In the Czech environment, the laces that connect the doublet to the hose are so hidden that they are not even hinted at, unlike the laces on the belly. A cut-out from a fresco in the Coinmakers' Chapel of St. Barbara's Cathedral in Kutná Hora (1460-1470)."
      />
    </Row>
  </>
)

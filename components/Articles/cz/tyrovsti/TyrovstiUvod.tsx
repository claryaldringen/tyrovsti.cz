import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TyrovstiUvod = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col md={6}>
        <h1>Týřovští z Einsiedlu{draft && <DraftBadge />}</h1>
        <p>
          Odvozují své rodové jméno od hradu Týřova či jinak Tejřova, takže se
          vyskytuje jak varianta Týřovští tak Tejřovští.
        </p>
        <p>
          Jejich původ je pak odvozen od obce Mnichov v okrese Cheb, který se
          německy nazývá Einsiedl. Různým fonetickým přepisem pak vznikly
          používané varianty z Einsiedlu/e, z Einsidlu/e, z Ensiedlu/e, z
          Ensidlu/e, z Einzidlu/e či z Enzidlu/e.
        </p>
        <p>
          Zakladatel rodu Jošt z Einsidlu (od roku 1460 rytíř z Týřova) jako
          německý sekretář správce a pozdějšího krále Jiřího z Poděbrad
          zasahoval do nejvyšší české, potažmo říšské politiky. Jeho potomci
          však již takového věhlasu a významu nedosáhli a zařadili se mezi
          drobnou šlechtu na pomezí Rakovnicka a Kralovicka. Posledním členem
          rodu byl Jan Michal, který zastával úřad zemského rady a krátce i
          soudce, ale potom onemocněl hypochondrií, takže jeho statky byly
          nejprve pod poručenskou správou, ale nakonec byly v roce 1759 prodány.
          Nevíme dokonce ani kdy zemřel.
          <Qt publication={PUBLICATIONS.HALADA} note="Str. 156" />
        </p>
        <p>
          Příbuzenskými svazky byli spojeni s Krakovskými z Kolovrat, Kokořovci
          z Kokořova, Malovci z Chýnova, Sporcky, s Klenovskými z Janovic a
          dalšími českými rody.
          <Qt publication={PUBLICATIONS.HALADA} note="Str. 156" />
        </p>
      </Col>
      <ImageWithTitle
        md={6}
        width={1244}
        height={1600}
        src="erb.png"
        title="Erb Týřovských"
      />
    </Row>
  </>
)

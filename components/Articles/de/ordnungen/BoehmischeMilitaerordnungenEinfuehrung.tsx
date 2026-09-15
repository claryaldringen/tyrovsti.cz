import React from 'react'
import { Col, Row } from 'reactstrap'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const BoehmischeMilitaerordnungenEinfuehrung = () => (
  <>
    <h1>Böhmische Militärordnungen und Schriften</h1>
    <Row>
      <Col>
        <p>
          Zu den mittelalterlichen Schriften, die uns einen Einblick in die
          Kriegsverhältnisse jener Zeit gewähren, gehören die sogenannten
          Militärordnungen. Sie wurden in der Regel vor einem bestimmten Feldzug
          verfasst und befassten sich ursprünglich hauptsächlich mit
          Disziplinar- und Organisationsangelegenheiten. Aus der Zeit vor dem
          15. Jahrhundert sind nur relativ wenige erhalten geblieben. Zu den
          bekanntesten zählt die <i>Heeresordnung Friedrichs I. Barbarossa</i>{' '}
          von 1158. Die älteste Militärordnung der Schweizer ist der sogenannte{' '}
          <i>Sempacherbrief</i>, der 1393 in Zürich verfasst wurde. Diese beiden
          Ordnungen wurden zur Grundlage und zum Vorbild für die meisten
          späteren Schriften dieser Art im deutschen Raum.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fd18f7bc-3cb3-4d13-a2c4-1cd3a9878f2d"
          />{' '}
          Abgesehen von der umstrittenen Datierung der sogenannten
          Hodětín-Ordnung (verschiedene Gelehrte datieren sie zwischen 1413 und
          1431) wurde der erste Versuch zur Einführung einer vollwertigen
          Militärordnung von Jan Hvězda von Vícemilice im Oktober 1421 in Prag
          unternommen. Diese Ordnung ist jedoch nicht erhalten geblieben und
          wird lediglich in einer Erwähnung in der Hussitischen Chronik des
          Laurentius von Březová überliefert
          <Qt publication={PUBLICATIONS.VAVRINEC} note="S. 259–260" />:{' '}
          <i>
            dass bei Feldzügen niemand ohne den Willen der Hauptleute das Heer
            verlassen solle, noch, wenn es dazu käme, unter Verlust von Leib und
            Gut aus der Schlacht stehlen dürfe.
          </i>
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:956e3859-9fca-4287-93f8-4c33d455d0f3"
          />
        </p>
        <p>
          Nach der Mitte des 15. Jahrhunderts nahmen Anzahl und Qualität der
          böhmischen und deutschen Militärordnungen zu; sie beschäftigten sich
          nicht mehr nur mit Disziplinar- und Organisationsfragen, sondern auch
          mit Militärtaktik und Kriegskunst. Das krönende Werk in dieser
          Hinsicht ist zweifellos{' '}
          <i>
            Václav Vlčeks von Čenov Handbuch für König Vladislav, wie man
            Formationen von Reiterei, Fußvolk und Wagen aufstellt
          </i>
          , während unter den deutschen Ordnungen die Schriften Albrechts III.
          Achilles besonders hervorzuheben sind.
        </p>
        <p>
          Hier habe ich versucht, alle böhmischen Schriften und Aufzeichnungen
          des 15. Jahrhunderts, die sich auf die zeitgenössische Kriegskunst
          beziehen, zusammenzustellen.
        </p>
      </Col>
    </Row>
  </>
)

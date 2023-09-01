import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_EN} title="Saddle" />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>The saddle</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h4>
                  Vybrané artikule sedlářů, které potvrdili konšelé Novoměstští
                  9. ledna 1451
                </h4>
                <p>
                  Druhé, ktož by sě chtěl za mistra posaditi, aby sě v přijímání
                  skutečném těla a krve pána našeho Jhesu Crysta pod obojí
                  spósobú srovnával časy svými s jinými obyvateli našimi vedle
                  kompaktat a smluv s svatým concilium Bazilejským, a aby
                  přinesl list svého zachovánie, odkud jest rodem, že jest z
                  poctivých a dobrých rodičuov a že se jest dobře zachoval, kdež
                  jest prvé obýval, a to pro čest toho řemesla; potom aby
                  řemeslo svú rukú udělané okázal mezi mistry, zejména tři
                  sedla, jedno s kostmi, druhé pošité všecko, třetie povlečené z
                  sucha, na jich pochválenie; a když to učiní a přijat bude za
                  mistra, aby sobě od pánuov práva městského dobyl a do cechu
                  mistruom dal puol kopy grošuov a dvě libře vosku.
                </p>
                <p>
                  Třetie, kteráž jsú sedla za starodávna byla dělána v jednu
                  kóži, ta mohú ještě dělána býti spravedlivě; také žádný mistr
                  aby žádnými kostmi sedla vuokol neobkládal, kromě jeleních
                  rohuov, opět ovčími kóžemi aby nepovláčil sedla žádného, než
                  koží Benádckú, kromě pošitých sedel. Také kderýž by luk
                  povlekl svinskú koží, aby naň nebil kosti nikdiež více kromě
                  okolo hlavy. Item sedlo každé má býti dekováno břiezdú pod
                  pokutú svrchupsanú. Také staré sedlo nemá býti prodáváno za
                  nové pod túž pokutú; opět žádné sedlo nemá býti plátnem
                  povlačováno ani svrchu ani vespod. Item kterýžby lukař bydlel
                  v našem městě, nemá prodávati lukuov ven z města, leč by
                  mistruom sedlářuom potřebie nebylo.
                </p>
              </Col>
              <Col md={6}>
                <h4>
                  Selected articules of the saddlers, confirmed by the New Town
                  of Prague councillors on 9 January 1451
                </h4>
                <p>
                  Secondly, who would become a master, that in the true
                  communion of the body and blood of our Lord Jesus Christ,
                  under both kinds, he may in time compare himself with the rest
                  of our inhabitants, apart the Compacts and covenants with the
                  holy council of Basel, and bring his certificate of
                  preservation, that he is of honest and good parents, and that
                  he was a burgess where he formerly dwelt, for the honour of
                  the craft; then to show the work made by his own hand to the
                  masters, particularly three saddles, one with bones, the other
                  all sewn, the third dry-coated, for their approval; and when
                  he has done this and is accepted as a master, to arrange for
                  the rights of the town from the lords, and to give the masters
                  in the guild half a schock of groschen and two pounds of wax.
                </p>
                <p>
                  Thirdly, that saddles which have been made of one leather may
                  continue to be made in this way; also that no craftsman shall
                  cover the saddle with bones other than deer antlers, nor cover
                  the saddle with sheepskin other than Venetian, except in the
                  case of saddles which have been sewn. Also, whoever covers a
                  saddle tree with pigskin shall not nail bones to it except
                  around the head (pommel). Every saddle should be covered with
                  birch bark under the aforesaid fine; also an old saddle should
                  not be sold as new under the same fine. Again - no saddle
                  should be canvas covered either on top or underneath. Also,
                  any bowyer living in our town is not to sell bows outside the
                  town unless the saddlers have no need for them.
                </p>
                <p>
                  Note: Bows in this context means cantle and pommel. The bowyer
                  (in Czech <i>&bdquo;lukař&ldquo;</i>, in Latin{' '}
                  <i>&bdquo;arcuficis&ldquo;</i>) is craftsman, who makes saddle
                  trees.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page

import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../ImageWithTitle/ImageWithTitle'

export const Footwork = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="footwork-or-manoeuvres" />
        <h4>Footwork, or Manoeuvres</h4>
        <p>
          The purpose of this short article is to provide an overview of
          footwork, i.e. the manoeuvres that are essential for a safe and
          successful engagement with an opponent in mounted combat (
          <i>Rossfechten</i>). The footwork described here is based on
          contemporary equestrian manuscripts and the logical application of
          biomechanics to the art of mounted combat.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Manoeuvres</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle md={2} src="haunches-in.png" width={512} height={960} />
      <Col>
        <h6>Travers (Haunches-in)</h6>
        <p>
          The horse is bent with its hindquarters inward. The horse will be
          steered from the outside rear. This allows for greater lateral
          manoeuvrability and distance estimation. It is a position for both
          approach and attack. It is also the least threatening approach to
          horses and will help prevent unwanted aggression between horses.
        </p>
        <p>Note: Your horse should always be bent towards your opponent.</p>
      </Col>
      <ImageWithTitle src="travers-in-to-attck.png" width={832} height={712} />
    </Row>
    <Row>
      <ImageWithTitle md={2} src="shoulder-in.png" width={512} height={960} />
      <Col>
        <h6>Shoulder-in</h6>
        <p>
          In this position the horse is still bent in the same direction
          (towards your opponent) but travels on the inside hindquarter. This
          manoeuvre is used in defence to cancel a blow or to evade the
          opponent&apos;s aim.
        </p>
        <p>Note: Your horse should always be bent towards your opponent.</p>
      </Col>
      <ImageWithTitle src="shoulder-in-to-evade.png" width={884} height={758} />
    </Row>
    <Row>
      <ImageWithTitle src="volte.png" width={602} height={666} />
      <Col>
        <h6>Pirouette</h6>
        <p>
          From the travers, the horse slows the forward movement of the
          hindquarters and moves the shoulder around in a tight circle. This is
          ideal for assuming the correct position or for repeating an encounter.
        </p>
      </Col>
    </Row>
  </>
)

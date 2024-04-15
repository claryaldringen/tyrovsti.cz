module.exports = {
  async redirects() {
    return [
      {
        source: '/vaclav-vlcek-o-sikovani-vojska',
        destination:
          '/ceske-vojenske-rady-a-spisy#vaclava-vlcka-z-cenova-nauceni-ku-krali-vladislavi-kterak-se-maji-sikovati-jizdni-pesi-i-vozy',
        permanent: true,
      },
      {
        source: '/en/military-order-of-vaclav-vlcek-of-cenov',
        destination:
          '/en/czech-military-orders-and-writings#vaclav-vlcek-of-cenov-handbook-to-king-vladislaus-how-to-make-formations-of-cavalry-infantry-and-wagons',
        permanent: true,
      },
      {
        source: '/jost-z-einsidle-a-na-tyrove',
        destination: '/tyrovsti-z-einsiedlu',
        permanent: true,
      },
      {
        source: '/panske-pokryvky-hlavy',
        destination: '/muzsky-odev#pokryvky-hlavy',
        permanent: true,
      },
      {
        source: '/obuv',
        destination: '/muzsky-odev#obuv',
        permanent: true,
      },
      {
        source: '/valecne-kladivo',
        destination: '/vyzbroj-a-vystroj/valecne-kladivo',
        permanent: true,
      },
    ]
  },
}

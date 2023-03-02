module.exports = {
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
  },
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
    ]
  },
}

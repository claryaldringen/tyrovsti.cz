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
    ]
  },
}

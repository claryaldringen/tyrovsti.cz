import { Col, Row } from 'reactstrap'
import React, { useMemo } from 'react'
import Link from 'next/link'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import {
  CONFLICTS,
  CZECH_MERCENARIES,
  REGION_COLORS,
  REGION_LABELS,
  Region,
  SOURCES,
  TIMELINE_END,
  TIMELINE_START,
} from './casovaOsaData'
import styles from './CasovaOsa.module.scss'

const TOTAL_YEARS = TIMELINE_END - TIMELINE_START + 1

const yearToColumn = (year: number) => 2 + (year - TIMELINE_START)

const decadeStarts: number[] = []
for (let y = TIMELINE_START; y <= TIMELINE_END; y++) {
  if (y % 10 === 0) decadeStarts.push(y)
}

const sortedConflicts = [...CONFLICTS].sort((a, b) => {
  if (a.start !== b.start) return a.start - b.start
  if (a.regions[0] !== b.regions[0])
    return a.regions[0].localeCompare(b.regions[0])
  return a.name.localeCompare(b.name)
})

export const ALL_REGIONS = Object.keys(REGION_LABELS) as Region[]

export type CasovaOsaProps = ArticleProps & {
  activeRegions: Set<Region>
  onlyMerc: boolean
  onToggleRegion: (r: Region) => void
  onToggleMerc: () => void
}

export const CasovaOsa = ({
  draft,
  activeRegions,
  onlyMerc,
  onToggleRegion,
  onToggleMerc,
}: CasovaOsaProps) => {
  const filteredConflicts = useMemo(
    () =>
      sortedConflicts.filter(
        (c) =>
          c.regions.some((r) => activeRegions.has(r)) &&
          (!onlyMerc || c.id in CZECH_MERCENARIES)
      ),
    [activeRegions, onlyMerc]
  )

  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `var(--label-col) repeat(${TOTAL_YEARS}, var(--year-col))`,
  }

  return (
    <Row>
      <Col>
        <div className="anchor" id="casova-osa" />
        <h2>Časová osa konfliktů 1434–1526{draft && <DraftBadge />}</h2>
        <p>
          Přehled vojenských konfliktů 15. a počátku 16. století v Čechách a
          okolním středoevropském prostoru. Tabulka slouží k orientaci v souběhu
          a překryvech jednotlivých válek a tažení a jako rozcestník k podrobným
          článkům.
        </p>

        <div className={styles.legend}>
          {ALL_REGIONS.map((r) => {
            const active = activeRegions.has(r)
            return (
              <button
                key={r}
                type="button"
                className={`${styles.legendItem} ${
                  active ? '' : styles.legendItemInactive
                }`}
                onClick={() => onToggleRegion(r)}
                aria-pressed={active}
                title={
                  active
                    ? `Skrýt: ${REGION_LABELS[r]}`
                    : `Zobrazit: ${REGION_LABELS[r]}`
                }
              >
                <span
                  className={styles.legendSwatch}
                  style={{ backgroundColor: REGION_COLORS[r] }}
                />
                {REGION_LABELS[r]}
              </button>
            )
          })}
          <button
            type="button"
            className={`${styles.mercToggle} ${
              onlyMerc ? styles.mercToggleActive : ''
            }`}
            onClick={onToggleMerc}
            aria-pressed={onlyMerc}
            title={
              onlyMerc
                ? 'Zobrazit všechny konflikty'
                : 'Zobrazit jen konflikty s doloženou účastí českých žoldnéřů'
            }
          >
            <span className={styles.mercToggleIcon}>⚔</span> Jen s českými
            žoldnéři
          </button>
        </div>

        <p className={styles.scrollHint}>
          Tabulku lze posouvat doleva a doprava. Kliknutím na region nebo
          tlačítko ⚔ filtr zapneš/vypneš.
        </p>

        <div className={styles.scrollContainer}>
          <div className={styles.gantt} style={gridStyle}>
            <div className={styles.headerLabel}>Konflikt</div>

            <div
              className={styles.headerDecade}
              style={{
                gridColumn: `${yearToColumn(TIMELINE_START)} / span ${
                  decadeStarts[0] - TIMELINE_START
                }`,
              }}
            >
              {TIMELINE_START}
            </div>

            {decadeStarts.map((y, i) => {
              const next = decadeStarts[i + 1] ?? TIMELINE_END + 1
              const span = next - y
              return (
                <div
                  key={`decade-${y}`}
                  className={styles.headerDecade}
                  style={{
                    gridColumn: `${yearToColumn(y)} / span ${span}`,
                  }}
                >
                  {y}
                </div>
              )
            })}

            {decadeStarts.map((y) => (
              <div
                key={`divider-${y}`}
                className={styles.decadeDivider}
                style={{
                  gridColumn: `${yearToColumn(y)} / span 1`,
                  gridRow: `1 / ${filteredConflicts.length + 2}`,
                }}
              />
            ))}

            {filteredConflicts.map((c, idx) => {
              const row = idx + 2
              const dates =
                c.start === c.end ? `${c.start}` : `${c.start}–${c.end}`
              const colors = c.regions.map((r) => REGION_COLORS[r])
              const background =
                colors.length === 1
                  ? colors[0]
                  : `repeating-linear-gradient(45deg, ${colors[0]} 0px, ${colors[0]} 6px, ${colors[1]} 6px, ${colors[1]} 12px)`
              const barStyle: React.CSSProperties = {
                gridRow: row,
                gridColumn: `${yearToColumn(c.start)} / ${
                  yearToColumn(c.end) + 1
                }`,
                background,
              }
              const merc = CZECH_MERCENARIES[c.id]
              const tooltip = merc
                ? `${c.name} (${dates}) — česká žoldnéřská účast doložena`
                : `${c.name} (${dates})`
              const handleClick = () => {
                const sources = SOURCES[c.id]
                /* eslint-disable no-console */
                console.group(`%c${c.name} (${dates})`, 'font-weight: bold')
                if (sources && sources.length > 0) {
                  sources.forEach((url) => console.log(url))
                } else {
                  console.log('(žádné zdroje uložené)')
                }
                if (merc) {
                  console.log(
                    '%c⚔ Účast českých žoldnéřů: POTVRZENA',
                    'color: #b8860b; font-weight: bold'
                  )
                  merc.sources.forEach((url) => console.log(url))
                }
                console.groupEnd()
                /* eslint-enable no-console */
              }
              const handleKey = (e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleClick()
                }
              }
              return (
                <React.Fragment key={c.id}>
                  <div className={styles.rowLabel} style={{ gridRow: row }}>
                    {merc && (
                      <span
                        className={styles.mercFlag}
                        title="Doložená účast českých žoldnéřů"
                        aria-label="Doložená účast českých žoldnéřů"
                      >
                        ⚔
                      </span>
                    )}
                    {c.detailHref ? (
                      <Link
                        href={c.detailHref}
                        className={styles.rowNameLink}
                        title={`${tooltip} – otevřít článek`}
                      >
                        {c.name}
                      </Link>
                    ) : (
                      <span className={styles.rowName} title={tooltip}>
                        {c.name}
                      </span>
                    )}
                    <span className={styles.rowDates}>{dates}</span>
                  </div>
                  <div
                    className={styles.bar}
                    style={barStyle}
                    title={tooltip}
                    onClick={handleClick}
                    onKeyDown={handleKey}
                    role="button"
                    tabIndex={0}
                  >
                    {c.detailHref ? (
                      <Link href={c.detailHref} className={styles.barLink}>
                        <span className={styles.barLabel}>{c.name}</span>
                      </Link>
                    ) : (
                      <span className={styles.barLabel}>{c.name}</span>
                    )}
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </Col>
    </Row>
  )
}

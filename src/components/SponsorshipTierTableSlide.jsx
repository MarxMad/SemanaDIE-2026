import React from 'react';
import { TIER_BENEFIT_ROWS, renderTierCell, withIva } from '../data/sponsorshipTiers';
import { TAX_DISCLAIMER } from '../data/sponsorshipCopy';

function TierCellContent({ cell }) {
  if (!cell || cell.type === 'empty') {
    return <span style={{ color: '#CBD5E1' }}>—</span>;
  }
  if (cell.type === 'check') {
    return <span style={{ color: '#16A34A', fontWeight: 900 }}>✔</span>;
  }
  if (cell.type === 'dual') {
    return (
      <div style={{ lineHeight: 1.35 }}>
        <div style={{ fontWeight: 800, color: '#0A192F' }}>{cell.mxn} MXN</div>
        <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#1E40AF' }}>{cell.usd} USD</div>
      </div>
    );
  }
  return (
    <span style={{ fontWeight: cell.bold ? 800 : 600, fontSize: cell.type === 'note' ? '10px' : 'inherit', color: '#1E293B' }}>
      {cell.value}
    </span>
  );
}

export default function SponsorshipTierTableSlide({ tiers, lang, currency, title, subtitle, eyebrow, showDualCurrency = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div>
          <div style={{ fontSize: '12px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
            {eyebrow}
          </div>
          <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0A192F', margin: 0 }}>
            {title} · {currency}
          </h2>
        </div>
        <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>{subtitle}</div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', borderRadius: '14px', border: '1px solid #CBD5E1' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '11px' }}>
          <thead>
            <tr style={{ background: '#0A192F', color: '#FFFFFF' }}>
              <th style={{ padding: '10px 12px', fontWeight: 800, minWidth: '180px', position: 'sticky', left: 0, background: '#0A192F', zIndex: 2 }}>
                {lang === 'en' ? 'Item / Benefit' : 'Concepto / Beneficio'}
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.id}
                  style={{
                    padding: '10px 8px',
                    textAlign: 'center',
                    minWidth: '88px',
                    background: tier.highlight ? '#1E293B' : tier.isCripto ? '#172554' : '#0A192F',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ fontSize: '10.5px', fontWeight: 800, lineHeight: 1.25, color: tier.highlight ? '#F2C24C' : '#FFFFFF' }}>
                    {tier.name[lang]}
                  </div>
                  <div style={{ fontSize: '10px', color: tier.highlight ? '#F2C24C' : '#94A3B8', marginTop: '3px' }}>
                    {currency === 'MXN' ? `${withIva(tier.price)} MXN` : `${withIva(tier.price)} USD`}
                  </div>
                  <div style={{ fontSize: '8px', color: tier.highlight ? '#FDE68A' : '#64748B', marginTop: '2px', fontWeight: 600 }}>
                    {lang === 'en' ? 'VAT incl.' : 'IVA incl.'}
                  </div>
                  {(showDualCurrency || tier.priceUsd) && tier.priceUsd && (
                    <div style={{ fontSize: '9px', color: '#38BDF8', marginTop: '2px', fontWeight: 700 }}>
                      {withIva(tier.priceUsd)} USD
                    </div>
                  )}
                  {tier.isCripto && (
                    <div style={{ fontSize: '8px', color: '#38BDF8', marginTop: '2px', fontWeight: 700 }}>
                      CriptoUNAM
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIER_BENEFIT_ROWS.map((row, idx) => {
              if (row.isSection) {
                return (
                  <tr key={row.key} style={{ background: '#E2E8F0' }}>
                    <td
                      colSpan={tiers.length + 1}
                      style={{ padding: '6px 12px', fontWeight: 900, color: '#0A192F', fontSize: '10px', letterSpacing: '0.08em' }}
                    >
                      {row.label[lang]}
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={row.key} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{
                    padding: '7px 12px',
                    fontWeight: 700,
                    color: '#1E293B',
                    position: 'sticky',
                    left: 0,
                    background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    zIndex: 1,
                  }}>
                    {row.label[lang]}
                  </td>
                  {tiers.map((tier) => {
                    const cell = renderTierCell(tier.benefits, row, lang, { showDualCurrency });
                    return (
                      <td
                        key={tier.id}
                        style={{
                          padding: '7px 6px',
                          textAlign: 'center',
                          borderLeft: '1px solid #E2E8F0',
                          background: tier.highlight ? (idx % 2 === 0 ? '#FFFBEB' : '#FEF3C7') : undefined,
                        }}
                      >
                        <TierCellContent cell={cell} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{
        marginTop: '10px',
        padding: '10px 14px',
        borderRadius: '10px',
        background: '#FFFBEB',
        border: '1px solid #FDE68A',
        fontSize: '11px',
        color: '#92400E',
        fontWeight: 600,
        lineHeight: 1.45,
      }}>
        {TAX_DISCLAIMER[lang]}
      </div>
    </div>
  );
}

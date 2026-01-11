import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '8px',
            background: 'linear-gradient(180deg, #d4af37 0%, #b59325 100%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Вадим Фрунзе
          </h1>
          
          <p
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#d4af37',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Инвестиции в недвижимость
          </p>
          
          <div
            style={{
              width: '200px',
              height: '4px',
              background: '#d4af37',
              marginTop: '32px',
            }}
          />
          
          <p
            style={{
              fontSize: '28px',
              color: '#b0b0b0',
              margin: 0,
              marginTop: '16px',
            }}
          >
            Профессиональные стратегии и реальные кейсы
          </p>
        </div>

        {/* Icon circle */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            border: '4px solid #d4af37',
            backgroundColor: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
            color: '#d4af37',
          }}
        >
          ₽
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ByteNodes - Premium Game Server Hosting & Development Services';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #1a1a2e, #16213e)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
            ByteNodes
          </div>
          <div style={{ fontSize: 40, color: '#00D9FF', textAlign: 'center', maxWidth: '80%' }}>
            Premium Game Server Hosting & Development Services
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

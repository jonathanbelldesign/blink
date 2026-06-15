export interface EmbedInfo {
  src: string;
  aspectRatio: string;
  title: string;
}

function getYoutubeId(url: URL): string | null {
  if (url.hostname.includes('youtu.be')) {
    return url.pathname.slice(1) || null;
  }
  if (url.pathname.startsWith('/embed/')) {
    return url.pathname.replace('/embed/', '') || null;
  }
  if (url.pathname.startsWith('/shorts/')) {
    return url.pathname.replace('/shorts/', '') || null;
  }
  return url.searchParams.get('v');
}

export function resolveEmbed(rawUrl: string): EmbedInfo | null {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, '');

  if (host === 'youtube.com' || host === 'youtu.be' || host === 'm.youtube.com') {
    const id = getYoutubeId(url);
    if (!id) return null;
    return {
      src: `https://www.youtube.com/embed/${id}`,
      aspectRatio: '16 / 9',
      title: 'YouTube video player',
    };
  }

  if (host === 'open.spotify.com') {
    return {
      src: `https://open.spotify.com/embed${url.pathname}`,
      aspectRatio: 'auto',
      title: 'Spotify player',
    };
  }

  if (host === 'maps.google.com' || host === 'google.com' || host === 'goo.gl') {
    const query = url.searchParams.get('q');
    const src = query
      ? `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
      : `${url.toString()}&output=embed`;
    return {
      src,
      aspectRatio: '4 / 3',
      title: 'Google Maps',
    };
  }

  return null;
}

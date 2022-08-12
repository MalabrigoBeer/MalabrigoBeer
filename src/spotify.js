export default function Spotify(props) {
    const {
      iframeSource = '<iframe className="spotify" src="https://open.spotify.com/embed/playlist/0pq24pxXAUbInI6eHRGFRk?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    } = props;
    return <div className="spotify2" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }
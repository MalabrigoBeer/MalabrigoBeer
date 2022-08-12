export default function Spotify(props) {
    const {
      iframeSource = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0pq24pxXAUbInI6eHRGFRk?utm_source=generator" class="spotify" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    } = props;
    return <div className="spotify2" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }
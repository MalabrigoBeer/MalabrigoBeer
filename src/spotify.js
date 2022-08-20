export default function Spotify(props) {
    const {
      iframeSource = '<iframe class="spotify" src="https://open.spotify.com/embed/episode/7GAmzSosYFIPMRdMNa16xV?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    } = props;
    return <div className="spotify" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }
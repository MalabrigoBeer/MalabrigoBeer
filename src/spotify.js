export default function Spotify(props) {
    const {
      iframeSource = '<iframe style="border-radius:12px; z-index:10" src="https://open.spotify.com/embed/playlist/0tMgMS8DcKqIUTtHU7ylxt?utm_source=generator" class="spotify" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    } = props;
    return <div className="spotify2" style={{zIndex:'10'}} dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }

  // <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0tMgMS8DcKqIUTtHU7ylxt?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
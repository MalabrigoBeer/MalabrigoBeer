export default function Spotify(props) {
    const {
      iframeSource = '<iframe style="border-radius:12px" src="https://open.spotify.com/playlist/0tMgMS8DcKqIUTtHU7ylxt?si=ce249bb734924e42" class="spotify" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    } = props;
    return <div className="spotify2" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }
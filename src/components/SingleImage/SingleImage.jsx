import "./singleimage.css";
import ReactPlayer from "react-player";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
const SingleImage = ({ image }) => {
  return (
    <div className="singleImageWrapper">
      <div className="singleImageContainer">
        {image.media_type === "image" ? (
          <img src={image.url} alt="" className="singleImage" />
        ) : (
          <ReactPlayer
            id="myVedio"
            url={image.url}
            className="videoContainer"
            width="100%"
            height="100%"
            controls={true}
            volume={1}
            progressInterval={5000}
            pip={true}
          />
        )}
      </div>
      <div className="singleImageDescriptionContainer">
        <h1 className="imageTitle">{image.title}</h1>
        <h4 className="imageDate">Dated:{image.date}</h4>
        <p className="imageDescription">{image.explanation}</p>
        <div className="shareContainer">
          <FacebookShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <WhatsappShareButton />
        </div>
      </div>
    </div>
  );
};

export default SingleImage;

import "./singleimage.css";
import ReactPlayer from "react-player";
import LazyLoad from "react-lazyload";

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
import { useState } from "react";
const SingleImage = ({ image }) => {
  const [readMore, setReadMore] = useState(false);
  const [liked, setLiked] = useState(false);
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
        <p className="imageDescription">
          {readMore
            ? image.explanation
            : `${image.explanation.substring(0, 200)}...`}
          <button
            className="readMoreBtn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <div className="likeContainer">
          <button className="likeButton" onClick={() => setLiked(!liked)}>
            <span className="likeText">{!liked ? "Like" : "Unlike"}</span>
            {liked?(<i
              style={{ color: 'crimson' }}
              className={`heartIcon fa-solid fa-heart `}
            ></i>):(<i class="fa-regular fa-heart"></i>)}

          </button>
        </div>
        <div className="shareContainer">
          <FacebookShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="sharesingle"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="sharesingle"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="sharesingle"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <WhatsappShareButton />
          <RedditShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="sharesingle"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <TelegramShareButton
            url={image.url}
            quote={image.title}
            hashtag={"#NASA"}
            description={image.explanation}
            className="sharesingle"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
